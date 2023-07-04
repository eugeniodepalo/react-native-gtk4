import React from "react"
import render from "@react-native-gtk/renderer"
import gi from "node-gtk"
import App from "./components/App.js"

const Gtk = gi.require("Gtk", "4.0")

render(<App />, new Gtk.Application("com.example.simple", 0))
