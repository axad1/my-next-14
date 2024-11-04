"use client";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
};

export default function Layout({
  children,
  analytics,
  notifications,
  login,
}: Props) {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <>
      <div>Dashboard Layout</div>
      {children}
      {analytics}
      {notifications}
      <button onClick={() => setIsLogin(false)}>Logout</button>
    </>
  ) : (
    <>
      {login}
      <button onClick={() => setIsLogin(true)}>Login</button>
    </>
  );
}
