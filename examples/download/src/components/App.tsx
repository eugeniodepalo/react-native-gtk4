import React, { useState } from "react"
import axios from "axios"
import { spawn } from "child_process"
import {
  ApplicationWindow,
  Button,
  Box,
  Label,
  Entry,
  ProgressBar,
  GLib,
  CenterBox,
  Gtk,
} from "react-native-gtk4"
import fs from "fs"

const homeDir = GLib.getHomeDir()

const App = () => {
  const [url, setUrl] = useState("")
  const [progress, setProgress] = useState(0)
  const filePath = `${homeDir}/Downloads/${url.split("/").pop()}`

  const downloadFile = async () => {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    })

    const totalLength = response.headers["content-length"]
    const writer = fs.createWriteStream(filePath)

    response.data.on("data", (chunk: any) => {
      writer.write(chunk)
      setProgress(writer.bytesWritten / totalLength)
    })

    response.data.on("end", () => {
      writer.end()
      spawn("xdg-open", [filePath])
    })

    setProgress(0)
  }

  return (
    <ApplicationWindow title="URL Downloader" hexpand vexpand>
      <CenterBox
        marginBottom={10}
        marginTop={10}
        marginEnd={10}
        marginStart={10}
        hexpand
        vexpand
      >
        <Box
          orientation={Gtk.Orientation.VERTICAL}
          spacing={10}
          valign={Gtk.Align.CENTER}
          widthRequest={300}
        >
          <Label label="Enter URL to download" />
          <Entry
            text={url}
            onChanged={(entry) => {
              setUrl(entry.text ?? "")
            }}
          />
          <ProgressBar fraction={progress} showText />
          <Button label="Download" onClicked={downloadFile} />
        </Box>
      </CenterBox>
    </ApplicationWindow>
  )
}

export default App
