"use client"

import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'

export default function GoogleProvider({ children }: { children: React.ReactNode }) {
  // НИЖЕ ВСТАВЬ СВОЙ CLIENT ID, КОГДА ПОЛУЧИШЬ ЕГО В GOOGLE CLOUD
  const clientId = "684148062106-liingoeq7c47nhbsgbgi80kmsan4li9i.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={clientId}>
      {children}
    </GoogleOAuthProvider>
  )
}