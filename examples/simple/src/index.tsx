import React from "react"
import render, { Gtk } from "@react-native-gtk/renderer"
import App from "./components/App.js"

render(<App />, new Gtk.Application("com.example.simple", 0))
