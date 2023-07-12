import { Gtk, Gdk, Gio, GLib, Pango } from "../index.js"
import React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      AboutDialog: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.AboutDialog>
        artists?: string[]
        authors?: string[]
        comments?: string
        copyright?: string
        documenters?: string[]
        license?: string
        licenseType?: Gtk.License
        logo: Gdk.Paintable
        logoIconName?: string
        programName?: string
        systemInformation?: string
        translatorCredits?: string
        version?: string
        website?: string
        websiteLabel?: string
        wrapLicense?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivateLink?: (uri: string) => void
      }
      ActionBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ActionBar>
        revealed?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      AppChooserButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AppChooserButton>
        contentType?: string
        heading?: string
        modal?: boolean
        showDefaultItem?: boolean
        showDialogItem?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
        onChanged?: () => void
        onCustomItemActivated?: (itemName: string) => void
      }
      AppChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.AppChooserDialog>
        parent?: Gtk.Window
        flags: Gtk.DialogFlags
        file: Gio.File
        gfile: Gio.File
        heading?: string
        accessibleRole?: Gtk.AccessibleRole
        contentType?: string
      }
      AppChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AppChooserWidget>
        contentType?: string
        defaultText?: string
        showAll?: boolean
        showDefault?: boolean
        showFallback?: boolean
        showOther?: boolean
        showRecommended?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onApplicationActivated?: (application: Gio.AppInfo) => void
        onApplicationSelected?: (application: Gio.AppInfo) => void
      }
      ApplicationWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ApplicationWindow>
        application?: Gtk.Application
        showMenubar?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      AspectFrame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AspectFrame>
        children?: React.ReactElement
        xalign?: number
        yalign?: number
        ratio?: number
        obeyChild?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Assistant: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.Assistant>
        pages: Gio.ListModel
        useHeaderBar?: number
        accessibleRole?: Gtk.AccessibleRole
        onApply?: () => void
        onCancel?: () => void
        onClose?: () => void
        onEscape?: () => void
        onPrepare?: (page: Gtk.Widget) => void
      }
      Box: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Box>
        orientation?: Gtk.Orientation
        spacing?: number
        baselinePosition?: Gtk.BaselinePosition
        homogeneous?: boolean
        accessibleRole?: Gtk.AccessibleRole
        children?: React.ReactNode
      }
      Button: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Button>
        children?: React.ReactElement
        hasFrame?: boolean
        iconName?: string
        label?: string
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
        onClicked?: () => void
      }
      Calendar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Calendar>
        day?: number
        month?: number
        showDayNames?: boolean
        showHeading?: boolean
        showWeekNumbers?: boolean
        year?: number
        accessibleRole?: Gtk.AccessibleRole
        onDaySelected?: () => void
        onNextMonth?: () => void
        onNextYear?: () => void
        onPrevMonth?: () => void
        onPrevYear?: () => void
      }
      CellView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CellView>
        cellArea: Gtk.CellArea
        cellAreaContext: Gtk.CellAreaContext
        drawSensitive?: boolean
        fitModel?: boolean
        model: Gtk.TreeModel
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      CenterBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CenterBox>
        baselinePosition?: Gtk.BaselinePosition
        centerWidget?: Gtk.Widget
        endWidget?: Gtk.Widget
        startWidget?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      CheckButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CheckButton>
        children?: React.ReactElement
        active?: boolean
        group: Gtk.CheckButton
        inconsistent?: boolean
        label?: string
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
        onToggled?: () => void
      }
      ColorButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorButton>
        modal?: boolean
        showEditor?: boolean
        title?: string
        accessibleRole?: Gtk.AccessibleRole
        rgba: Gdk.RGBA
        useAlpha?: boolean
        onActivate?: () => void
        onColorSet?: () => void
        onColorActivated?: (color: Gdk.RGBA) => void
      }
      ColorChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.ColorChooserDialog>
        title?: string
        parent?: Gtk.Window
        showEditor?: boolean
        accessibleRole?: Gtk.AccessibleRole
        rgba: Gdk.RGBA
        useAlpha?: boolean
        onColorActivated?: (color: Gdk.RGBA) => void
      }
      ColorChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorChooserWidget>
        showEditor?: boolean
        accessibleRole?: Gtk.AccessibleRole
        rgba: Gdk.RGBA
        useAlpha?: boolean
        onColorActivated?: (color: Gdk.RGBA) => void
      }
      ColorDialogButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorDialogButton>
        dialog?: Gtk.ColorDialog
        rgba: Gdk.RGBA
        accessibleRole?: Gtk.AccessibleRole
      }
      ColumnView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColumnView>
        model?: Gtk.SelectionModel
        columns: Gio.ListModel
        enableRubberband?: boolean
        reorderable?: boolean
        showColumnSeparators?: boolean
        showRowSeparators?: boolean
        singleClickActivate?: boolean
        sorter: Gtk.Sorter
        accessibleRole?: Gtk.AccessibleRole
        hadjustment: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: (position: number) => void
      }
      ComboBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ComboBox>
        children?: React.ReactElement
        active?: number
        activeId?: string
        buttonSensitivity?: Gtk.SensitivityType
        entryTextColumn?: number
        hasEntry?: boolean
        hasFrame?: boolean
        idColumn?: number
        model: Gtk.TreeModel
        popupFixedWidth?: boolean
        popupShown?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        onActivate?: () => void
        onChanged?: () => void
        onFormatEntryText?: (path: string) => void
        onMoveActive?: (scrollType: Gtk.ScrollType) => void
        onPopdown?: () => void
        onPopup?: () => void
        onEditingDone?: () => void
        onRemoveWidget?: () => void
      }
      ComboBoxText: JSX.IntrinsicElements["ComboBox"] & {
        ref?: React.Ref<Gtk.ComboBoxText>
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        onEditingDone?: () => void
        onRemoveWidget?: () => void
      }
      Dialog: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.Dialog>
        useHeaderBar?: number
        accessibleRole?: Gtk.AccessibleRole
        onClose?: () => void
        onResponse?: (responseId: Gtk.ResponseType) => void
      }
      DragIcon: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DragIcon>
        children?: React.ReactElement
        accessibleRole?: Gtk.AccessibleRole
      }
      DrawingArea: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DrawingArea>
        contentHeight?: number
        contentWidth?: number
        accessibleRole?: Gtk.AccessibleRole
        onResize?: (width: number, height: number) => void
      }
      DropDown: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DropDown>
        model?: Gio.ListModel
        expression?: Gtk.Expression
        enableSearch?: boolean
        factory: Gtk.ListItemFactory
        listFactory: Gtk.ListItemFactory
        selected?: number
        selectedItem: any
        showArrow?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
      }
      EditableLabel: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.EditableLabel>
        str?: string
        editing?: boolean
        accessibleRole?: Gtk.AccessibleRole
        cursorPosition?: number
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        selectionBound?: number
        text?: string
        widthChars?: number
        xalign?: number
        onChanged?: () => void
        onDeleteText?: (startPos: number, endPos: number) => void
        onInsertText?: (text: string, length: number, position: number) => void
      }
      EmojiChooser: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.EmojiChooser>
        accessibleRole?: Gtk.AccessibleRole
        onEmojiPicked?: (text: string) => void
      }
      Entry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Entry>
        activatesDefault?: boolean
        attributes: Pango.AttrList
        buffer: Gtk.EntryBuffer
        completion: Gtk.EntryCompletion
        enableEmojiCompletion?: boolean
        extraMenu: Gio.MenuModel
        hasFrame?: boolean
        imModule?: string
        inputHints?: Gtk.InputHints
        inputPurpose?: Gtk.InputPurpose
        invisibleChar?: number
        invisibleCharSet?: boolean
        maxLength?: number
        overwriteMode?: boolean
        placeholderText?: string
        primaryIconActivatable?: boolean
        primaryIconGicon: Gio.Icon
        primaryIconName?: string
        primaryIconPaintable: Gdk.Paintable
        primaryIconSensitive?: boolean
        primaryIconStorageType?: Gtk.ImageType
        primaryIconTooltipMarkup?: string
        primaryIconTooltipText?: string
        progressFraction?: number
        progressPulseStep?: number
        scrollOffset?: number
        secondaryIconActivatable?: boolean
        secondaryIconGicon: Gio.Icon
        secondaryIconName?: string
        secondaryIconPaintable: Gdk.Paintable
        secondaryIconSensitive?: boolean
        secondaryIconStorageType?: Gtk.ImageType
        secondaryIconTooltipMarkup?: string
        secondaryIconTooltipText?: string
        showEmojiIcon?: boolean
        tabs: Pango.TabArray
        textLength?: number
        truncateMultiline?: boolean
        visibility?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        cursorPosition?: number
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        selectionBound?: number
        text?: string
        widthChars?: number
        xalign?: number
        onActivate?: () => void
        onIconPress?: (iconPos: Gtk.EntryIconPosition) => void
        onIconRelease?: (iconPos: Gtk.EntryIconPosition) => void
        onEditingDone?: () => void
        onRemoveWidget?: () => void
        onChanged?: () => void
        onDeleteText?: (startPos: number, endPos: number) => void
        onInsertText?: (text: string, length: number, position: number) => void
      }
      Expander: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Expander>
        children?: React.ReactElement
        label?: string
        expanded?: boolean
        labelWidget?: Gtk.Widget
        resizeToplevel?: boolean
        useMarkup?: boolean
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
      }
      FileChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.FileChooserDialog>
        title?: string
        parent?: Gtk.Window
        action?: Gtk.FileChooserAction
        firstButtonText?: string
        accessibleRole?: Gtk.AccessibleRole
        createFolders?: boolean
        filter: Gtk.FileFilter
        filters: Gio.ListModel
        selectMultiple?: boolean
        shortcutFolders: Gio.ListModel
      }
      FileChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FileChooserWidget>
        action?: Gtk.FileChooserAction
        searchMode?: boolean
        showTime?: boolean
        subtitle?: string
        accessibleRole?: Gtk.AccessibleRole
        createFolders?: boolean
        filter: Gtk.FileFilter
        filters: Gio.ListModel
        selectMultiple?: boolean
        shortcutFolders: Gio.ListModel
        onDesktopFolder?: () => void
        onDownFolder?: () => void
        onHomeFolder?: () => void
        onLocationPopup?: (path: string) => void
        onLocationPopupOnPaste?: () => void
        onLocationTogglePopup?: () => void
        onPlacesShortcut?: () => void
        onQuickBookmark?: (bookmarkIndex: number) => void
        onRecentShortcut?: () => void
        onSearchShortcut?: () => void
        onShowHidden?: () => void
        onUpFolder?: () => void
      }
      Fixed: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Fixed>
        accessibleRole?: Gtk.AccessibleRole
      }
      FlowBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBox>
        acceptUnpairedRelease?: boolean
        activateOnSingleClick?: boolean
        columnSpacing?: number
        homogeneous?: boolean
        maxChildrenPerLine?: number
        minChildrenPerLine?: number
        rowSpacing?: number
        selectionMode?: Gtk.SelectionMode
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onActivateCursorChild?: () => void
        onChildActivated?: (child: Gtk.FlowBoxChild) => void
        onMoveCursor?: (
          step: Gtk.MovementStep,
          count: number,
          extend: boolean,
          modify: boolean
        ) => void
        onSelectAll?: () => void
        onSelectedChildrenChanged?: () => void
        onToggleCursorChild?: () => void
        onUnselectAll?: () => void
      }
      FlowBoxChild: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBoxChild>
        children?: React.ReactElement
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
      }
      FontButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontButton>
        modal?: boolean
        title?: string
        useFont?: boolean
        useSize?: boolean
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc: Pango.FontDescription
        fontFeatures?: string
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onActivate?: () => void
        onFontSet?: () => void
        onFontActivated?: (fontname: string) => void
      }
      FontChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.FontChooserDialog>
        title?: string
        parent?: Gtk.Window
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc: Pango.FontDescription
        fontFeatures?: string
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onFontActivated?: (fontname: string) => void
      }
      FontChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontChooserWidget>
        tweakAction: Gio.Action
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc: Pango.FontDescription
        fontFeatures?: string
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onFontActivated?: (fontname: string) => void
      }
      FontDialogButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontDialogButton>
        dialog?: Gtk.FontDialog
        fontDesc: Pango.FontDescription
        fontFeatures?: string
        language: Pango.Language
        level?: Gtk.FontLevel
        useFont?: boolean
        useSize?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Frame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Frame>
        children?: React.ReactElement
        label?: string
        labelWidget?: Gtk.Widget
        labelXalign?: number
        accessibleRole?: Gtk.AccessibleRole
      }
      GLArea: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.GLArea>
        autoRender?: boolean
        context: Gdk.GLContext
        hasDepthBuffer?: boolean
        hasStencilBuffer?: boolean
        useEs?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onCreateContext?: () => void
        onRender?: (context: Gdk.GLContext) => void
        onResize?: (width: number, height: number) => void
      }
      Grid: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Grid>
        baselineRow?: number
        columnHomogeneous?: boolean
        columnSpacing?: number
        rowHomogeneous?: boolean
        rowSpacing?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      GridView: JSX.IntrinsicElements["ListBase"] & {
        ref?: React.Ref<Gtk.GridView>
        model?: Gtk.SelectionModel
        factory?: Gtk.ListItemFactory
        enableRubberband?: boolean
        maxColumns?: number
        minColumns?: number
        singleClickActivate?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        hadjustment: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: (position: number) => void
      }
      HeaderBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.HeaderBar>
        decorationLayout?: string
        showTitleButtons?: boolean
        titleWidget?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
      }
      IconView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.IconView>
        activateOnSingleClick?: boolean
        cellArea: Gtk.CellArea
        columnSpacing?: number
        columns?: number
        itemOrientation?: Gtk.Orientation
        itemPadding?: number
        itemWidth?: number
        margin?: number
        markupColumn?: number
        model: Gtk.TreeModel
        pixbufColumn?: number
        reorderable?: boolean
        rowSpacing?: number
        selectionMode?: Gtk.SelectionMode
        spacing?: number
        textColumn?: number
        tooltipColumn?: number
        accessibleRole?: Gtk.AccessibleRole
        hadjustment: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivateCursorItem?: () => void
        onItemActivated?: (path: Gtk.TreePath) => void
        onMoveCursor?: (
          step: Gtk.MovementStep,
          count: number,
          extend: boolean,
          modify: boolean
        ) => void
        onSelectAll?: () => void
        onSelectCursorItem?: () => void
        onSelectionChanged?: () => void
        onToggleCursorItem?: () => void
        onUnselectAll?: () => void
      }
      Image: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Image>
        file?: string
        gicon: Gio.Icon
        iconName?: string
        iconSize?: Gtk.IconSize
        paintable: Gdk.Paintable
        pixelSize?: number
        resource?: string
        storageType?: Gtk.ImageType
        useFallback?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      InfoBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.InfoBar>
        messageType?: Gtk.MessageType
        revealed?: boolean
        showCloseButton?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onClose?: () => void
        onResponse?: (responseId: Gtk.ResponseType) => void
      }
      Inscription: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Inscription>
        text?: string
        attributes: Pango.AttrList
        markup?: string
        minChars?: number
        minLines?: number
        natChars?: number
        natLines?: number
        textOverflow?: Gtk.InscriptionOverflow
        wrapMode?: Pango.WrapMode
        xalign?: number
        yalign?: number
        accessibleRole?: Gtk.AccessibleRole
      }
      Label: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Label>
        str?: string
        attributes: Pango.AttrList
        ellipsize?: Pango.EllipsizeMode
        extraMenu: Gio.MenuModel
        justify?: Gtk.Justification
        label?: string
        lines?: number
        maxWidthChars?: number
        mnemonicKeyval?: number
        mnemonicWidget?: Gtk.Widget
        naturalWrapMode?: Gtk.NaturalWrapMode
        selectable?: boolean
        singleLineMode?: boolean
        tabs: Pango.TabArray
        useMarkup?: boolean
        useUnderline?: boolean
        widthChars?: number
        wrap?: boolean
        wrapMode?: Pango.WrapMode
        xalign?: number
        yalign?: number
        accessibleRole?: Gtk.AccessibleRole
        onActivateCurrentLink?: () => void
        onActivateLink?: (uri: string) => void
        onCopyClipboard?: () => void
        onMoveCursor?: (
          step: Gtk.MovementStep,
          count: number,
          extendSelection: boolean
        ) => void
      }
      LevelBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.LevelBar>
        inverted?: boolean
        maxValue?: number
        minValue?: number
        mode?: Gtk.LevelBarMode
        value?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onOffsetChanged?: (name: string) => void
      }
      LinkButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LinkButton>
        uri?: string
        visited?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivateLink?: () => void
      }
      ListBase: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBase>
        orientation?: Gtk.Orientation
        accessibleRole?: Gtk.AccessibleRole
        hadjustment: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
      }
      ListBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBox>
        acceptUnpairedRelease?: boolean
        activateOnSingleClick?: boolean
        selectionMode?: Gtk.SelectionMode
        showSeparators?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivateCursorRow?: () => void
        onMoveCursor?: (
          object: Gtk.MovementStep,
          p0: number,
          p1: boolean,
          p2: boolean
        ) => void
        onRowActivated?: (row: Gtk.ListBoxRow) => void
        onRowSelected?: (row?: Gtk.ListBoxRow) => void
        onSelectAll?: () => void
        onSelectedRowsChanged?: () => void
        onToggleCursorRow?: () => void
        onUnselectAll?: () => void
      }
      ListBoxRow: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBoxRow>
        children?: React.ReactElement
        activatable?: boolean
        selectable?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
      }
      ListView: JSX.IntrinsicElements["ListBase"] & {
        ref?: React.Ref<Gtk.ListView>
        model?: Gtk.SelectionModel
        factory?: Gtk.ListItemFactory
        enableRubberband?: boolean
        showSeparators?: boolean
        singleClickActivate?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        hadjustment: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: (position: number) => void
      }
      LockButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LockButton>
        permission?: Gio.Permission
        textLock?: string
        textUnlock?: string
        tooltipLock?: string
        tooltipNotAuthorized?: string
        tooltipUnlock?: string
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
      }
      MediaControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MediaControls>
        stream?: Gtk.MediaStream
        mediaStream: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
      }
      MenuButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MenuButton>
        children?: React.ReactElement
        active?: boolean
        alwaysShowArrow?: boolean
        direction?: Gtk.ArrowType
        hasFrame?: boolean
        iconName?: string
        label?: string
        menuModel: Gio.MenuModel
        popover: Gtk.Popover
        primary?: boolean
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
      }
      MessageDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.MessageDialog>
        parent?: Gtk.Window
        flags: Gtk.DialogFlags
        type?: Gtk.MessageType
        buttons?: Gtk.ButtonsType
        messageFormat?: string
        messageArea?: Gtk.Widget
        messageType?: Gtk.MessageType
        secondaryText?: string
        secondaryUseMarkup?: boolean
        text?: string
        useMarkup?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Notebook: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Notebook>
        enablePopup?: boolean
        groupName?: string
        page?: number
        pages: Gio.ListModel
        scrollable?: boolean
        showBorder?: boolean
        showTabs?: boolean
        tabPos?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        onChangeCurrentPage?: (object: number) => void
        onCreateWindow?: (page: Gtk.Widget) => void
        onFocusTab?: (object: Gtk.NotebookTab) => void
        onMoveFocusOut?: (object: Gtk.DirectionType) => void
        onPageAdded?: (child: Gtk.Widget, pageNum: number) => void
        onPageRemoved?: (child: Gtk.Widget, pageNum: number) => void
        onPageReordered?: (child: Gtk.Widget, pageNum: number) => void
        onReorderTab?: (object: Gtk.DirectionType, p0: boolean) => void
        onSelectPage?: (object: boolean) => void
        onSwitchPage?: (page: Gtk.Widget, pageNum: number) => void
      }
      Overlay: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Overlay>
        children?: React.ReactElement
        accessibleRole?: Gtk.AccessibleRole
        onGetChildPosition?: (
          widget: Gtk.Widget,
          allocation: Gdk.Rectangle
        ) => void
      }
      PageSetupUnixDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.PageSetupUnixDialog>
        title?: string
        parent?: Gtk.Window
        accessibleRole?: Gtk.AccessibleRole
      }
      Paned: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Paned>
        orientation?: Gtk.Orientation
        endChild?: Gtk.Widget
        maxPosition?: number
        minPosition?: number
        position?: number
        positionSet?: boolean
        resizeEndChild?: boolean
        resizeStartChild?: boolean
        shrinkEndChild?: boolean
        shrinkStartChild?: boolean
        startChild?: Gtk.Widget
        wideHandle?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onAcceptPosition?: () => void
        onCancelPosition?: () => void
        onCycleChildFocus?: (reversed: boolean) => void
        onCycleHandleFocus?: (reversed: boolean) => void
        onMoveHandle?: (scrollType: Gtk.ScrollType) => void
        onToggleHandleFocus?: () => void
      }
      PasswordEntry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PasswordEntry>
        activatesDefault?: boolean
        extraMenu: Gio.MenuModel
        placeholderText?: string
        showPeekIcon?: boolean
        accessibleRole?: Gtk.AccessibleRole
        cursorPosition?: number
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        selectionBound?: number
        text?: string
        widthChars?: number
        xalign?: number
        onActivate?: () => void
        onChanged?: () => void
        onDeleteText?: (startPos: number, endPos: number) => void
        onInsertText?: (text: string, length: number, position: number) => void
      }
      Picture: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Picture>
        alternativeText?: string
        canShrink?: boolean
        contentFit?: Gtk.ContentFit
        file: Gio.File
        keepAspectRatio?: boolean
        paintable: Gdk.Paintable
        accessibleRole?: Gtk.AccessibleRole
      }
      Popover: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Popover>
        children?: React.ReactElement
        autohide?: boolean
        cascadePopdown?: boolean
        defaultWidget?: Gtk.Widget
        hasArrow?: boolean
        mnemonicsVisible?: boolean
        pointingTo: Gdk.Rectangle
        position?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        onActivateDefault?: () => void
        onClosed?: () => void
      }
      PopoverMenu: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.PopoverMenu>
        model?: Gio.MenuModel
        menuModel: Gio.MenuModel
        visibleSubmenu?: string
        accessibleRole?: Gtk.AccessibleRole
      }
      PopoverMenuBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PopoverMenuBar>
        model?: Gio.MenuModel
        menuModel: Gio.MenuModel
        accessibleRole?: Gtk.AccessibleRole
      }
      PrintUnixDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.PrintUnixDialog>
        title?: string
        parent?: Gtk.Window
        currentPage?: number
        embedPageSetup?: boolean
        hasSelection?: boolean
        manualCapabilities?: Gtk.PrintCapabilities
        pageSetup: Gtk.PageSetup
        printSettings: Gtk.PrintSettings
        selectedPrinter: Gtk.Printer
        supportSelection?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      ProgressBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ProgressBar>
        ellipsize?: Pango.EllipsizeMode
        fraction?: number
        inverted?: boolean
        pulseStep?: number
        showText?: boolean
        text?: string
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      Range: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Range>
        adjustment: Gtk.Adjustment
        fillLevel?: number
        inverted?: boolean
        restrictToFillLevel?: boolean
        roundDigits?: number
        showFillLevel?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onAdjustBounds?: (value: number) => void
        onChangeValue?: (scroll: Gtk.ScrollType, value: number) => void
        onMoveSlider?: (step: Gtk.ScrollType) => void
        onValueChanged?: () => void
      }
      Revealer: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Revealer>
        children?: React.ReactElement
        childRevealed?: boolean
        revealChild?: boolean
        transitionDuration?: number
        transitionType?: Gtk.RevealerTransitionType
        accessibleRole?: Gtk.AccessibleRole
      }
      Scale: JSX.IntrinsicElements["Range"] & {
        ref?: React.Ref<Gtk.Scale>
        orientation?: Gtk.Orientation
        adjustment?: Gtk.Adjustment
        digits?: number
        drawValue?: boolean
        hasOrigin?: boolean
        valuePos?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
      }
      ScaleButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScaleButton>
        min?: number
        max?: number
        step?: number
        icons?: string[][]
        active?: boolean
        adjustment: Gtk.Adjustment
        value?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onPopdown?: () => void
        onPopup?: () => void
        onValueChanged?: (value: number) => void
      }
      Scrollbar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Scrollbar>
        orientation?: Gtk.Orientation
        adjustment?: Gtk.Adjustment
        accessibleRole?: Gtk.AccessibleRole
      }
      ScrolledWindow: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScrolledWindow>
        children?: React.ReactElement
        hadjustment: Gtk.Adjustment
        hasFrame?: boolean
        hscrollbarPolicy?: Gtk.PolicyType
        kineticScrolling?: boolean
        maxContentHeight?: number
        maxContentWidth?: number
        minContentHeight?: number
        minContentWidth?: number
        overlayScrolling?: boolean
        propagateNaturalHeight?: boolean
        propagateNaturalWidth?: boolean
        vadjustment: Gtk.Adjustment
        vscrollbarPolicy?: Gtk.PolicyType
        windowPlacement?: Gtk.CornerType
        accessibleRole?: Gtk.AccessibleRole
        onEdgeOvershot?: (pos: Gtk.PositionType) => void
        onEdgeReached?: (pos: Gtk.PositionType) => void
        onMoveFocusOut?: (directionType: Gtk.DirectionType) => void
        onScrollChild?: (scroll: Gtk.ScrollType, horizontal: boolean) => void
      }
      SearchBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchBar>
        children?: React.ReactElement
        keyCaptureWidget?: Gtk.Widget
        searchModeEnabled?: boolean
        showCloseButton?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      SearchEntry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchEntry>
        activatesDefault?: boolean
        placeholderText?: string
        searchDelay?: number
        accessibleRole?: Gtk.AccessibleRole
        cursorPosition?: number
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        selectionBound?: number
        text?: string
        widthChars?: number
        xalign?: number
        onActivate?: () => void
        onNextMatch?: () => void
        onPreviousMatch?: () => void
        onSearchChanged?: () => void
        onSearchStarted?: () => void
        onStopSearch?: () => void
        onChanged?: () => void
        onDeleteText?: (startPos: number, endPos: number) => void
        onInsertText?: (text: string, length: number, position: number) => void
      }
      Separator: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Separator>
        orientation?: Gtk.Orientation
        accessibleRole?: Gtk.AccessibleRole
      }
      ShortcutLabel: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutLabel>
        accelerator?: string
        disabledText?: string
        accessibleRole?: Gtk.AccessibleRole
      }
      ShortcutsGroup: JSX.IntrinsicElements["Box"] & {
        ref?: React.Ref<Gtk.ShortcutsGroup>
        accelSizeGroup: Gtk.SizeGroup
        height?: number
        title?: string
        titleSizeGroup: Gtk.SizeGroup
        view?: string
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      ShortcutsSection: JSX.IntrinsicElements["Box"] & {
        ref?: React.Ref<Gtk.ShortcutsSection>
        maxHeight?: number
        sectionName?: string
        title?: string
        viewName?: string
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onChangeCurrentPage?: (object: number) => void
      }
      ShortcutsShortcut: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutsShortcut>
        accelSizeGroup: Gtk.SizeGroup
        accelerator?: string
        actionName?: string
        direction?: Gtk.TextDirection
        icon: Gio.Icon
        iconSet?: boolean
        shortcutType?: Gtk.ShortcutType
        subtitle?: string
        subtitleSet?: boolean
        title?: string
        titleSizeGroup: Gtk.SizeGroup
        accessibleRole?: Gtk.AccessibleRole
      }
      ShortcutsWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ShortcutsWindow>
        sectionName?: string
        viewName?: string
        accessibleRole?: Gtk.AccessibleRole
        onClose?: () => void
        onSearch?: () => void
      }
      SpinButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SpinButton>
        adjustment?: Gtk.Adjustment
        climbRate?: number
        digits?: number
        numeric?: boolean
        snapToTicks?: boolean
        updatePolicy?: Gtk.SpinButtonUpdatePolicy
        value?: number
        wrap?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        cursorPosition?: number
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        selectionBound?: number
        text?: string
        widthChars?: number
        xalign?: number
        orientation?: Gtk.Orientation
        onChangeValue?: (scroll: Gtk.ScrollType) => void
        onInput?: (newValue: number) => void
        onOutput?: () => void
        onValueChanged?: () => void
        onWrapped?: () => void
        onEditingDone?: () => void
        onRemoveWidget?: () => void
        onChanged?: () => void
        onDeleteText?: (startPos: number, endPos: number) => void
        onInsertText?: (text: string, length: number, position: number) => void
      }
      Spinner: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Spinner>
        spinning?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Stack: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Stack>
        hhomogeneous?: boolean
        interpolateSize?: boolean
        pages: Gtk.SelectionModel
        transitionDuration?: number
        transitionRunning?: boolean
        transitionType?: Gtk.StackTransitionType
        vhomogeneous?: boolean
        visibleChild?: Gtk.Widget
        visibleChildName?: string
        accessibleRole?: Gtk.AccessibleRole
      }
      StackSidebar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSidebar>
        stack: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
      }
      StackSwitcher: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSwitcher>
        stack: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      Statusbar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Statusbar>
        accessibleRole?: Gtk.AccessibleRole
        onTextPopped?: (contextId: number, text: string) => void
        onTextPushed?: (contextId: number, text: string) => void
      }
      Switch: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Switch>
        active?: boolean
        state?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
        onStateSet?: (state: boolean) => void
      }
      Text: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Text>
        activatesDefault?: boolean
        attributes: Pango.AttrList
        buffer: Gtk.EntryBuffer
        enableEmojiCompletion?: boolean
        extraMenu: Gio.MenuModel
        imModule?: string
        inputHints?: Gtk.InputHints
        inputPurpose?: Gtk.InputPurpose
        invisibleChar?: number
        invisibleCharSet?: boolean
        maxLength?: number
        overwriteMode?: boolean
        placeholderText?: string
        propagateTextWidth?: boolean
        scrollOffset?: number
        tabs: Pango.TabArray
        truncateMultiline?: boolean
        visibility?: boolean
        accessibleRole?: Gtk.AccessibleRole
        cursorPosition?: number
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        selectionBound?: number
        text?: string
        widthChars?: number
        xalign?: number
        onActivate?: () => void
        onBackspace?: () => void
        onCopyClipboard?: () => void
        onCutClipboard?: () => void
        onDeleteFromCursor?: (type: Gtk.DeleteType, count: number) => void
        onInsertAtCursor?: (string: string) => void
        onInsertEmoji?: () => void
        onMoveCursor?: (
          step: Gtk.MovementStep,
          count: number,
          extend: boolean
        ) => void
        onPasteClipboard?: () => void
        onPreeditChanged?: (preedit: string) => void
        onToggleOverwrite?: () => void
        onChanged?: () => void
        onDeleteText?: (startPos: number, endPos: number) => void
        onInsertText?: (text: string, length: number, position: number) => void
      }
      TextView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TextView>
        acceptsTab?: boolean
        bottomMargin?: number
        buffer: Gtk.TextBuffer
        cursorVisible?: boolean
        editable?: boolean
        extraMenu: Gio.MenuModel
        imModule?: string
        indent?: number
        inputHints?: Gtk.InputHints
        inputPurpose?: Gtk.InputPurpose
        justification?: Gtk.Justification
        leftMargin?: number
        monospace?: boolean
        overwrite?: boolean
        pixelsAboveLines?: number
        pixelsBelowLines?: number
        pixelsInsideWrap?: number
        rightMargin?: number
        tabs: Pango.TabArray
        topMargin?: number
        wrapMode?: Gtk.WrapMode
        accessibleRole?: Gtk.AccessibleRole
        hadjustment: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onBackspace?: () => void
        onCopyClipboard?: () => void
        onCutClipboard?: () => void
        onDeleteFromCursor?: (type: Gtk.DeleteType, count: number) => void
        onExtendSelection?: (
          granularity: Gtk.TextExtendSelection,
          location: Gtk.TextIter,
          start: Gtk.TextIter,
          end: Gtk.TextIter
        ) => void
        onInsertAtCursor?: (string: string) => void
        onInsertEmoji?: () => void
        onMoveCursor?: (
          step: Gtk.MovementStep,
          count: number,
          extendSelection: boolean
        ) => void
        onMoveViewport?: (step: Gtk.ScrollStep, count: number) => void
        onPasteClipboard?: () => void
        onPreeditChanged?: (preedit: string) => void
        onSelectAll?: (select: boolean) => void
        onSetAnchor?: () => void
        onToggleCursorVisible?: () => void
        onToggleOverwrite?: () => void
      }
      ToggleButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.ToggleButton>
        active?: boolean
        group: Gtk.ToggleButton
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onToggled?: () => void
      }
      TreeExpander: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeExpander>
        children?: React.ReactElement
        hideExpander?: boolean
        indentForDepth?: boolean
        indentForIcon?: boolean
        item: any
        listRow: Gtk.TreeListRow
        accessibleRole?: Gtk.AccessibleRole
      }
      TreeView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeView>
        activateOnSingleClick?: boolean
        enableGridLines?: Gtk.TreeViewGridLines
        enableSearch?: boolean
        enableTreeLines?: boolean
        expanderColumn: Gtk.TreeViewColumn
        fixedHeightMode?: boolean
        headersClickable?: boolean
        headersVisible?: boolean
        hoverExpand?: boolean
        hoverSelection?: boolean
        levelIndentation?: number
        model: Gtk.TreeModel
        reorderable?: boolean
        rubberBanding?: boolean
        searchColumn?: number
        showExpanders?: boolean
        tooltipColumn?: number
        accessibleRole?: Gtk.AccessibleRole
        hadjustment: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onColumnsChanged?: () => void
        onCursorChanged?: () => void
        onExpandCollapseCursorRow?: (
          object: boolean,
          p0: boolean,
          p1: boolean
        ) => void
        onMoveCursor?: (
          step: Gtk.MovementStep,
          direction: number,
          extend: boolean,
          modify: boolean
        ) => void
        onRowActivated?: (
          path: Gtk.TreePath,
          column?: Gtk.TreeViewColumn
        ) => void
        onRowCollapsed?: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void
        onRowExpanded?: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void
        onSelectAll?: () => void
        onSelectCursorParent?: () => void
        onSelectCursorRow?: (object: boolean) => void
        onStartInteractiveSearch?: () => void
        onTestCollapseRow?: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void
        onTestExpandRow?: (iter: Gtk.TreeIter, path: Gtk.TreePath) => void
        onToggleCursorRow?: () => void
        onUnselectAll?: () => void
      }
      Video: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Video>
        autoplay?: boolean
        file: Gio.File
        loop?: boolean
        mediaStream: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
      }
      Viewport: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Viewport>
        children?: React.ReactElement
        hadjustment?: Gtk.Adjustment
        vadjustment?: Gtk.Adjustment
        scrollToFocus?: boolean
        accessibleRole?: Gtk.AccessibleRole
        hscrollPolicy?: Gtk.ScrollablePolicy
        vscrollPolicy?: Gtk.ScrollablePolicy
      }
      VolumeButton: JSX.IntrinsicElements["ScaleButton"] & {
        ref?: React.Ref<Gtk.VolumeButton>
        useSymbolic?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      Widget: {
        ref?: React.Ref<Gtk.Widget>
        canFocus?: boolean
        canTarget?: boolean
        cssClasses?: string[]
        cssName?: string
        cursor?: Gdk.Cursor
        focusOnClick?: boolean
        focusable?: boolean
        halign?: Gtk.Align
        hasDefault?: boolean
        hasFocus?: boolean
        hasTooltip?: boolean
        heightRequest?: number
        hexpand?: boolean
        hexpandSet?: boolean
        layoutManager?: Gtk.LayoutManager
        marginBottom?: number
        marginEnd?: number
        marginStart?: number
        marginTop?: number
        name?: string
        opacity?: number
        overflow?: Gtk.Overflow
        parent?: Gtk.Widget
        receivesDefault?: boolean
        root?: Gtk.Root
        scaleFactor?: number
        sensitive?: boolean
        tooltipMarkup?: string
        tooltipText?: string
        valign?: Gtk.Align
        vexpand?: boolean
        vexpandSet?: boolean
        visible?: boolean
        widthRequest?: number
        accessibleRole?: Gtk.AccessibleRole
        onDestroy?: () => void
        onDirectionChanged?: (previousDirection: Gtk.TextDirection) => void
        onHide?: () => void
        onKeynavFailed?: (direction: Gtk.DirectionType) => void
        onMap?: () => void
        onMnemonicActivate?: (groupCycling: boolean) => void
        onMoveFocus?: (direction: Gtk.DirectionType) => void
        onQueryTooltip?: (
          x: number,
          y: number,
          keyboardMode: boolean,
          tooltip: Gtk.Tooltip
        ) => void
        onRealize?: () => void
        onShow?: () => void
        onStateFlagsChanged?: (flags: Gtk.StateFlags) => void
        onUnmap?: () => void
        onUnrealize?: () => void
      }
      Window: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Window>
        children?: React.ReactElement
        application?: Gtk.Application
        decorated?: boolean
        defaultHeight?: number
        defaultWidget?: Gtk.Widget
        defaultWidth?: number
        deletable?: boolean
        destroyWithParent?: boolean
        display?: Gdk.Display
        focusVisible?: boolean
        focusWidget?: Gtk.Widget
        fullscreened?: boolean
        handleMenubarAccel?: boolean
        hideOnClose?: boolean
        iconName?: string
        isActive?: boolean
        maximized?: boolean
        mnemonicsVisible?: boolean
        modal?: boolean
        resizable?: boolean
        startupId?: string
        title?: string
        titlebar?: Gtk.Widget
        transientFor?: Gtk.Window
        accessibleRole?: Gtk.AccessibleRole
        onActivateDefault?: () => void
        onActivateFocus?: () => void
        onCloseRequest?: () => void
        onEnableDebugging?: (toggle: boolean) => void
        onKeysChanged?: () => void
      }
      WindowControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowControls>
        side?: Gtk.PackType
        decorationLayout?: string
        empty?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      WindowHandle: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowHandle>
        children?: React.ReactElement
        accessibleRole?: Gtk.AccessibleRole
      }
    }
  }
}
