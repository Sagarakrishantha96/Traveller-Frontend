import React, { useState } from "react";

// Change the port to match your .NET API
const API_URL = "http://localhost:5123/api/auth/register";

interface RegisterFormProps {
  styles: any;
  title: string;
  goToLogin: () => void;
  onRegisterSuccess: () => void;
}

interface RegisterData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

type FormErrors = Partial<Record<keyof RegisterData | "agree", string>>;

const emptyForm: RegisterData = {
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: ""
};

export const RegisterForm: React.FC<RegisterFormProps> = ({ styles, title, goToLogin, onRegisterSuccess }) => {
  const [form, setForm] = useState<RegisterData>(emptyForm);
  const [agree, setAgree] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [alert, setAlert] = useState<{ type: "error" | "success"; message: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: undefined });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (form.fullName.trim() === "") newErrors.fullName = "Full name is required";
    if (form.email.trim() === "") newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = "Enter a valid email";
    if (form.phone !== "" && !/^\+?\d{9,15}$/.test(form.phone)) newErrors.phone = "Enter a valid phone number";
    if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (form.confirmPassword !== form.password) newErrors.confirmPassword = "Passwords do not match";
    if (!agree) newErrors.agree = "You must accept the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone || null,
          password: form.password
        })
      });

      if (response.ok) {
        setAlert({ type: "success", message: "Account created successfully! Redirecting to login..." });
        setForm(emptyForm);
        setAgree(false);
        setTimeout(onRegisterSuccess, 1500);
      } else {
        const message = await response.text();
        setAlert({ type: "error", message: message || "Registration failed. Please try again." });
      }
    } catch {
      setAlert({ type: "error", message: "Cannot connect to the server. Is the API running?" });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field: keyof RegisterData) => ({
    ...styles.input,
    ...(errors[field] && styles.input.invalid)
  });

  return (
    <form style={styles.registerForm} onSubmit={handleSubmit} noValidate>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.subTitle}>Create an account and start planning your trips.</p>

      {alert && (
        <div style={{ ...styles.alert, ...styles.alert[alert.type] }}>{alert.message}</div>
      )}

      <div style={styles.inputGroup}>
        <label style={styles.label} htmlFor="fullName">Full Name</label>
        <input id="fullName" name="fullName" style={inputStyle("fullName")}
          value={form.fullName} onChange={handleChange} placeholder="Your full name" />
        {errors.fullName && <span style={styles.inputError}>{errors.fullName}</span>}
      </div>

      <div style={styles.row}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" style={inputStyle("email")}
            value={form.email} onChange={handleChange} placeholder="you@example.com" />
          {errors.email && <span style={styles.inputError}>{errors.email}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" style={inputStyle("phone")}
            value={form.phone} onChange={handleChange} placeholder="+94771234567" />
          {errors.phone && <span style={styles.inputError}>{errors.phone}</span>}
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="password">Password</label>
          <input id="password" name="password" type="password" style={inputStyle("password")}
            value={form.password} onChange={handleChange} placeholder="At least 6 characters" />
          {errors.password && <span style={styles.inputError}>{errors.password}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="confirmPassword">Confirm Password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" style={inputStyle("confirmPassword")}
            value={form.confirmPassword} onChange={handleChange} placeholder="Repeat password" />
          {errors.confirmPassword && <span style={styles.inputError}>{errors.confirmPassword}</span>}
        </div>
      </div>

      <div style={styles.policyWrapper}>
        <input id="agree" type="checkbox" checked={agree}
          onChange={(e) => { setAgree(e.target.checked); setErrors({ ...errors, agree: undefined }); }} />
        <label htmlFor="agree" style={{ ...styles.policyLabel, ...(errors.agree && styles.policyLabel.invalid) }}>
          I agree to the Terms and Privacy Policy
        </label>
      </div>

      <button type="submit" disabled={loading}
        style={{ ...styles.submitButton, ...(loading && styles.submitButton.disabled) }}>
        {loading ? "Creating account..." : "Register"}
      </button>

      <div style={styles.loginNowWrapper}>
        Already have an account?
        <span style={styles.hyperLink} onClick={goToLogin}>Login</span>
      </div>
    </form>
  );
};
