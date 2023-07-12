import React from "react"
import render, { Gtk, Gio } from "react-native-gtk4"
import App from "./components/App.js"

render(
  <App />,
  new Gtk.Application("com.example.simple", Gio.ApplicationFlags.DEFAULT_FLAGS)
)
