import React, { useEffect } from 'react'

export const OBSControllerPrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'OBS Controller Privacy Policy'
    document.getElementById('favicon').href = 'obs-controller.ico'
    document.getElementById('appleTouchIcon').href = 'obs-controller192.png'
  })

  return <div style={{width: 400, margin: 'auto'}}>
    <h1>OBS Controller Does Not Collect Any Personal Information</h1>
    <p>
      OBS Controller does not collect, use, save or have access to any of your personal data.
    </p>
    <p>
      Individual settings related to the app are not personal and are stored only on your device.
    </p>
  </div>
}
