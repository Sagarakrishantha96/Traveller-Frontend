import React, { useState } from "react";
import { postLoginRequest, saveLogin } from "../../Services/AuthService";
import { getErrorMessage } from "../Common";

interface LoginFormProps {
  styles: any;
  title: string;
  goToRegister: () => void;
  onLoginSuccess: () => void;
}

interface LoginData {
  email: string;
  password: string;
}

type FormErrors = Partial<Record<keyof LoginData, string>>;

const emptyForm: LoginData = {
  email: "",
  password: ""
};

export const LoginForm: React.FC<LoginFormProps> = ({ styles, title, goToRegister, onLoginSuccess }) => {
  const [form, setForm] = useState<LoginData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [alert, setAlert] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (form.email.trim() === "") newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (form.password === "") newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);
    if (!validate()) return;

    setLoading(true);
    try {
      const login = await postLoginRequest({
        email: form.email,
        password: form.password
      });

      saveLogin(login);
      onLoginSuccess();
    } catch (error) {
      setAlert(getErrorMessage(error, "Login failed. Please try again."));
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field: keyof LoginData) => ({
    ...styles.input,
    ...(errors[field] ? styles.inputInvalid : {})
  });

  return (
    <form style={styles.registerForm} onSubmit={handleSubmit} noValidate>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.subTitle}>Log in to continue planning your trips.</p>

      {alert && <div style={{ ...styles.alert, ...styles.alertError }}>{alert}</div>}

      <div style={styles.inputGroup}>
        <label style={styles.label} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" style={inputStyle("email")}
          value={form.email} onChange={handleChange} placeholder="you@example.com" />
        {errors.email && <span style={styles.inputError}>{errors.email}</span>}
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label} htmlFor="password">Password</label>
        <input id="password" name="password" type="password" style={inputStyle("password")}
          value={form.password} onChange={handleChange} placeholder="Your password" />
        {errors.password && <span style={styles.inputError}>{errors.password}</span>}
      </div>

      <button type="submit" disabled={loading}
        style={{ ...styles.submitButton, ...styles.loginButton, ...(loading ? styles.submitButtonDisabled : {}) }}>
        {loading ? "Logging in..." : "Login"}
      </button>

      <div style={styles.loginNowWrapper}>
        Don't have an account?
        <span style={styles.hyperLink} onClick={goToRegister}>Register</span>
      </div>
    </form>
  );
};
