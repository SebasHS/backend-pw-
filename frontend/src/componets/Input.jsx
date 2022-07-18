import React from 'react'

export default function Input({ label, placeholder, value, onChange, type }) {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <span className="input-group-text color_letra">{label}</span>
          <input
            type={type}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}
