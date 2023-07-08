import { Gtk } from "@girs/node-gtk-4.0"
import { Gdk } from "@girs/node-gdk-4.0"
import { Gio } from "@girs/node-gio-2.0"
import { GLib } from "@girs/node-glib-2.0"
import { GObject } from "@girs/node-gobject-2.0"
import { Pango } from "@girs/node-pango-1.0"
import React from "react"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      AboutDialog: JSX.IntrinsicElements["Window"] & {
        artists?: string[]
        authors?: string[]
        comments?: string
        copyright?: string
        documenters?: string[]
        license?: string
        licenseType?: Gtk.License
        logo?: Gdk.Paintable
        logoIconName?: string
        programName?: string
        systemInformation?: string
        translatorCredits?: string
        version?: string
        website?: string
        websiteLabel?: string
        wrapLicense?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivateLink?: () => void
      }
      ActionBar: JSX.IntrinsicElements["Widget"] & {
        revealed?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      AppChooserButton: JSX.IntrinsicElements["Widget"] & {
        heading?: string
        modal?: boolean
        showDefaultItem?: boolean
        showDialogItem?: boolean
        accessibleRole?: Gtk.AccessibleRole
        contentType?: string
        onActivate?: () => void
        onChanged?: () => void
        onCustomItemActivated?: () => void
      }
      AppChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        gfile?: Gio.File
        heading?: string
        accessibleRole?: Gtk.AccessibleRole
        contentType?: string
      }
      AppChooserWidget: JSX.IntrinsicElements["Widget"] & {
        defaultText?: string
        showAll?: boolean
        showDefault?: boolean
        showFallback?: boolean
        showOther?: boolean
        showRecommended?: boolean
        accessibleRole?: Gtk.AccessibleRole
        contentType?: string
        onApplicationActivated?: () => void
        onApplicationSelected?: () => void
      }
      ApplicationWindow: JSX.IntrinsicElements["Window"] & {
        showMenubar?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      AspectFrame: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        obeyChild?: boolean
        ratio?: number
        xalign?: number
        yalign?: number
        accessibleRole?: Gtk.AccessibleRole
      }
      Assistant: JSX.IntrinsicElements["Window"] & {
        pages?: Gio.ListModel
        useHeaderBar?: number
        accessibleRole?: Gtk.AccessibleRole
        onApply?: () => void
        onCancel?: () => void
        onClose?: () => void
        onEscape?: () => void
        onPrepare?: () => void
      }
      Box: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactNode
        baselinePosition?: Gtk.BaselinePosition
        homogeneous?: boolean
        spacing?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      Button: JSX.IntrinsicElements["Widget"] & {
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
        cellArea?: Gtk.CellArea
        cellAreaContext?: Gtk.CellAreaContext
        drawSensitive?: boolean
        fitModel?: boolean
        model?: Gtk.TreeModel
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      CenterBox: JSX.IntrinsicElements["Widget"] & {
        baselinePosition?: Gtk.BaselinePosition
        centerWidget?: React.ReactElement | null
        endWidget?: React.ReactElement | null
        startWidget?: React.ReactElement | null
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      CheckButton: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        active?: boolean
        group?: Gtk.CheckButton
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
        modal?: boolean
        showEditor?: boolean
        title?: string
        accessibleRole?: Gtk.AccessibleRole
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onActivate?: () => void
        onColorSet?: () => void
        onColorActivated?: () => void
      }
      ColorChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        showEditor?: boolean
        accessibleRole?: Gtk.AccessibleRole
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onColorActivated?: () => void
      }
      ColorChooserWidget: JSX.IntrinsicElements["Widget"] & {
        showEditor?: boolean
        accessibleRole?: Gtk.AccessibleRole
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onColorActivated?: () => void
      }
      ColorDialogButton: JSX.IntrinsicElements["Widget"] & {
        dialog?: Gtk.ColorDialog
        rgba?: Gdk.RGBA
        accessibleRole?: Gtk.AccessibleRole
      }
      ColumnView: JSX.IntrinsicElements["Widget"] & {
        columns?: Gio.ListModel
        enableRubberband?: boolean
        model?: Gtk.SelectionModel
        reorderable?: boolean
        showColumnSeparators?: boolean
        showRowSeparators?: boolean
        singleClickActivate?: boolean
        sorter?: Gtk.Sorter
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: () => void
      }
      ComboBox: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        active?: number
        activeId?: string
        buttonSensitivity?: Gtk.SensitivityType
        entryTextColumn?: number
        hasEntry?: boolean
        hasFrame?: boolean
        idColumn?: number
        model?: Gtk.TreeModel
        popupFixedWidth?: boolean
        popupShown?: boolean
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        onActivate?: () => void
        onChanged?: () => void
        onFormatEntryText?: () => void
        onMoveActive?: () => void
        onPopdown?: () => void
        onPopup?: () => void
        onEditingDone?: () => void
        onRemoveWidget?: () => void
      }
      ComboBoxText: JSX.IntrinsicElements["ComboBox"] & {
        accessibleRole?: Gtk.AccessibleRole
        editingCanceled?: boolean
        onEditingDone?: () => void
        onRemoveWidget?: () => void
      }
      Dialog: JSX.IntrinsicElements["Window"] & {
        useHeaderBar?: number
        accessibleRole?: Gtk.AccessibleRole
        onClose?: () => void
        onResponse?: () => void
      }
      DragIcon: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        accessibleRole?: Gtk.AccessibleRole
      }
      DrawingArea: JSX.IntrinsicElements["Widget"] & {
        contentHeight?: number
        contentWidth?: number
        accessibleRole?: Gtk.AccessibleRole
        onResize?: () => void
      }
      DropDown: JSX.IntrinsicElements["Widget"] & {
        enableSearch?: boolean
        expression?: Gtk.Expression
        factory?: Gtk.ListItemFactory
        listFactory?: Gtk.ListItemFactory
        model?: Gio.ListModel
        selected?: number
        selectedItem?: GObject.Object
        showArrow?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
      }
      EditableLabel: JSX.IntrinsicElements["Widget"] & {
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
        onDeleteText?: () => void
        onInsertText?: () => void
      }
      EmojiChooser: JSX.IntrinsicElements["Popover"] & {
        accessibleRole?: Gtk.AccessibleRole
        onEmojiPicked?: () => void
      }
      Entry: JSX.IntrinsicElements["Widget"] & {
        activatesDefault?: boolean
        attributes?: Pango.AttrList
        buffer?: Gtk.EntryBuffer
        completion?: Gtk.EntryCompletion
        enableEmojiCompletion?: boolean
        extraMenu?: Gio.MenuModel
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
        primaryIconGicon?: Gio.Icon
        primaryIconName?: string
        primaryIconPaintable?: Gdk.Paintable
        primaryIconSensitive?: boolean
        primaryIconStorageType?: Gtk.ImageType
        primaryIconTooltipMarkup?: string
        primaryIconTooltipText?: string
        progressFraction?: number
        progressPulseStep?: number
        scrollOffset?: number
        secondaryIconActivatable?: boolean
        secondaryIconGicon?: Gio.Icon
        secondaryIconName?: string
        secondaryIconPaintable?: Gdk.Paintable
        secondaryIconSensitive?: boolean
        secondaryIconStorageType?: Gtk.ImageType
        secondaryIconTooltipMarkup?: string
        secondaryIconTooltipText?: string
        showEmojiIcon?: boolean
        tabs?: Pango.TabArray
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
        onIconPress?: () => void
        onIconRelease?: () => void
        onEditingDone?: () => void
        onRemoveWidget?: () => void
        onChanged?: () => void
        onDeleteText?: () => void
        onInsertText?: () => void
      }
      Expander: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        expanded?: boolean
        label?: string
        labelWidget?: React.ReactElement | null
        resizeToplevel?: boolean
        useMarkup?: boolean
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
      }
      FileChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        accessibleRole?: Gtk.AccessibleRole
        action?: Gtk.FileChooserAction
        createFolders?: boolean
        filter?: Gtk.FileFilter
        filters?: Gio.ListModel
        selectMultiple?: boolean
        shortcutFolders?: Gio.ListModel
      }
      FileChooserWidget: JSX.IntrinsicElements["Widget"] & {
        searchMode?: boolean
        showTime?: boolean
        subtitle?: string
        accessibleRole?: Gtk.AccessibleRole
        action?: Gtk.FileChooserAction
        createFolders?: boolean
        filter?: Gtk.FileFilter
        filters?: Gio.ListModel
        selectMultiple?: boolean
        shortcutFolders?: Gio.ListModel
        onDesktopFolder?: () => void
        onDownFolder?: () => void
        onHomeFolder?: () => void
        onLocationPopup?: () => void
        onLocationPopupOnPaste?: () => void
        onLocationTogglePopup?: () => void
        onPlacesShortcut?: () => void
        onQuickBookmark?: () => void
        onRecentShortcut?: () => void
        onSearchShortcut?: () => void
        onShowHidden?: () => void
        onUpFolder?: () => void
      }
      Fixed: JSX.IntrinsicElements["Widget"] & {
        accessibleRole?: Gtk.AccessibleRole
      }
      FlowBox: JSX.IntrinsicElements["Widget"] & {
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
        onChildActivated?: () => void
        onMoveCursor?: () => void
        onSelectAll?: () => void
        onSelectedChildrenChanged?: () => void
        onToggleCursorChild?: () => void
        onUnselectAll?: () => void
      }
      FlowBoxChild: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
      }
      FontButton: JSX.IntrinsicElements["Widget"] & {
        modal?: boolean
        title?: string
        useFont?: boolean
        useSize?: boolean
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc?: Pango.FontDescription
        fontFeatures?: string
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onActivate?: () => void
        onFontSet?: () => void
        onFontActivated?: () => void
      }
      FontChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc?: Pango.FontDescription
        fontFeatures?: string
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onFontActivated?: () => void
      }
      FontChooserWidget: JSX.IntrinsicElements["Widget"] & {
        tweakAction?: Gio.Action
        accessibleRole?: Gtk.AccessibleRole
        font?: string
        fontDesc?: Pango.FontDescription
        fontFeatures?: string
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onFontActivated?: () => void
      }
      FontDialogButton: JSX.IntrinsicElements["Widget"] & {
        dialog?: Gtk.FontDialog
        fontDesc?: Pango.FontDescription
        fontFeatures?: string
        language?: Pango.Language
        level?: Gtk.FontLevel
        useFont?: boolean
        useSize?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Frame: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        label?: string
        labelWidget?: React.ReactElement | null
        labelXalign?: number
        accessibleRole?: Gtk.AccessibleRole
      }
      GLArea: JSX.IntrinsicElements["Widget"] & {
        autoRender?: boolean
        context?: Gdk.GLContext
        hasDepthBuffer?: boolean
        hasStencilBuffer?: boolean
        useEs?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onCreateContext?: () => void
        onRender?: () => void
        onResize?: () => void
      }
      Grid: JSX.IntrinsicElements["Widget"] & {
        baselineRow?: number
        columnHomogeneous?: boolean
        columnSpacing?: number
        rowHomogeneous?: boolean
        rowSpacing?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      GridView: JSX.IntrinsicElements["ListBase"] & {
        enableRubberband?: boolean
        factory?: Gtk.ListItemFactory
        maxColumns?: number
        minColumns?: number
        model?: Gtk.SelectionModel
        singleClickActivate?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: () => void
      }
      HeaderBar: JSX.IntrinsicElements["Widget"] & {
        decorationLayout?: string
        showTitleButtons?: boolean
        titleWidget?: React.ReactElement | null
        accessibleRole?: Gtk.AccessibleRole
      }
      IconView: JSX.IntrinsicElements["Widget"] & {
        activateOnSingleClick?: boolean
        cellArea?: Gtk.CellArea
        columnSpacing?: number
        columns?: number
        itemOrientation?: Gtk.Orientation
        itemPadding?: number
        itemWidth?: number
        margin?: number
        markupColumn?: number
        model?: Gtk.TreeModel
        pixbufColumn?: number
        reorderable?: boolean
        rowSpacing?: number
        selectionMode?: Gtk.SelectionMode
        spacing?: number
        textColumn?: number
        tooltipColumn?: number
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivateCursorItem?: () => void
        onItemActivated?: () => void
        onMoveCursor?: () => void
        onSelectAll?: () => void
        onSelectCursorItem?: () => void
        onSelectionChanged?: () => void
        onToggleCursorItem?: () => void
        onUnselectAll?: () => void
      }
      Image: JSX.IntrinsicElements["Widget"] & {
        file?: string
        gicon?: Gio.Icon
        iconName?: string
        iconSize?: Gtk.IconSize
        paintable?: Gdk.Paintable
        pixelSize?: number
        resource?: string
        storageType?: Gtk.ImageType
        useFallback?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      InfoBar: JSX.IntrinsicElements["Widget"] & {
        messageType?: Gtk.MessageType
        revealed?: boolean
        showCloseButton?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onClose?: () => void
        onResponse?: () => void
      }
      Inscription: JSX.IntrinsicElements["Widget"] & {
        attributes?: Pango.AttrList
        markup?: string
        minChars?: number
        minLines?: number
        natChars?: number
        natLines?: number
        text?: string
        textOverflow?: Gtk.InscriptionOverflow
        wrapMode?: Pango.WrapMode
        xalign?: number
        yalign?: number
        accessibleRole?: Gtk.AccessibleRole
      }
      Label: JSX.IntrinsicElements["Widget"] & {
        attributes?: Pango.AttrList
        ellipsize?: Pango.EllipsizeMode
        extraMenu?: Gio.MenuModel
        justify?: Gtk.Justification
        label?: string
        lines?: number
        maxWidthChars?: number
        mnemonicKeyval?: number
        mnemonicWidget?: React.ReactElement | null
        naturalWrapMode?: Gtk.NaturalWrapMode
        selectable?: boolean
        singleLineMode?: boolean
        tabs?: Pango.TabArray
        useMarkup?: boolean
        useUnderline?: boolean
        widthChars?: number
        wrap?: boolean
        wrapMode?: Pango.WrapMode
        xalign?: number
        yalign?: number
        accessibleRole?: Gtk.AccessibleRole
        onActivateCurrentLink?: () => void
        onActivateLink?: () => void
        onCopyClipboard?: () => void
        onMoveCursor?: () => void
      }
      LevelBar: JSX.IntrinsicElements["Widget"] & {
        inverted?: boolean
        maxValue?: number
        minValue?: number
        mode?: Gtk.LevelBarMode
        value?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onOffsetChanged?: () => void
      }
      LinkButton: JSX.IntrinsicElements["Button"] & {
        uri?: string
        visited?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivateLink?: () => void
      }
      ListBase: JSX.IntrinsicElements["Widget"] & {
        orientation?: Gtk.Orientation
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
      }
      ListBox: JSX.IntrinsicElements["Widget"] & {
        acceptUnpairedRelease?: boolean
        activateOnSingleClick?: boolean
        selectionMode?: Gtk.SelectionMode
        showSeparators?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivateCursorRow?: () => void
        onMoveCursor?: () => void
        onRowActivated?: () => void
        onRowSelected?: () => void
        onSelectAll?: () => void
        onSelectedRowsChanged?: () => void
        onToggleCursorRow?: () => void
        onUnselectAll?: () => void
      }
      ListBoxRow: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        activatable?: boolean
        selectable?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
      }
      ListView: JSX.IntrinsicElements["ListBase"] & {
        enableRubberband?: boolean
        factory?: Gtk.ListItemFactory
        model?: Gtk.SelectionModel
        showSeparators?: boolean
        singleClickActivate?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: () => void
      }
      LockButton: JSX.IntrinsicElements["Button"] & {
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
        mediaStream?: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
      }
      MenuButton: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        active?: boolean
        alwaysShowArrow?: boolean
        direction?: Gtk.ArrowType
        hasFrame?: boolean
        iconName?: string
        label?: string
        menuModel?: Gio.MenuModel
        popover?: Gtk.Popover
        primary?: boolean
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: () => void
      }
      MessageDialog: JSX.IntrinsicElements["Dialog"] & {
        buttons?: Gtk.ButtonsType
        messageArea?: React.ReactElement | null
        messageType?: Gtk.MessageType
        secondaryText?: string
        secondaryUseMarkup?: boolean
        text?: string
        useMarkup?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Notebook: JSX.IntrinsicElements["Widget"] & {
        enablePopup?: boolean
        groupName?: string
        page?: number
        pages?: Gio.ListModel
        scrollable?: boolean
        showBorder?: boolean
        showTabs?: boolean
        tabPos?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        onChangeCurrentPage?: () => void
        onCreateWindow?: () => void
        onFocusTab?: () => void
        onMoveFocusOut?: () => void
        onPageAdded?: () => void
        onPageRemoved?: () => void
        onPageReordered?: () => void
        onReorderTab?: () => void
        onSelectPage?: () => void
        onSwitchPage?: () => void
      }
      Overlay: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        accessibleRole?: Gtk.AccessibleRole
        onGetChildPosition?: () => void
      }
      PageSetupUnixDialog: JSX.IntrinsicElements["Dialog"] & {
        accessibleRole?: Gtk.AccessibleRole
      }
      Paned: JSX.IntrinsicElements["Widget"] & {
        endChild?: React.ReactElement | null
        maxPosition?: number
        minPosition?: number
        position?: number
        positionSet?: boolean
        resizeEndChild?: boolean
        resizeStartChild?: boolean
        shrinkEndChild?: boolean
        shrinkStartChild?: boolean
        startChild?: React.ReactElement | null
        wideHandle?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onAcceptPosition?: () => void
        onCancelPosition?: () => void
        onCycleChildFocus?: () => void
        onCycleHandleFocus?: () => void
        onMoveHandle?: () => void
        onToggleHandleFocus?: () => void
      }
      PasswordEntry: JSX.IntrinsicElements["Widget"] & {
        activatesDefault?: boolean
        extraMenu?: Gio.MenuModel
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
        onDeleteText?: () => void
        onInsertText?: () => void
      }
      Picture: JSX.IntrinsicElements["Widget"] & {
        alternativeText?: string
        canShrink?: boolean
        contentFit?: Gtk.ContentFit
        file?: Gio.File
        keepAspectRatio?: boolean
        paintable?: Gdk.Paintable
        accessibleRole?: Gtk.AccessibleRole
      }
      Popover: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        autohide?: boolean
        cascadePopdown?: boolean
        defaultWidget?: React.ReactElement | null
        hasArrow?: boolean
        mnemonicsVisible?: boolean
        pointingTo?: Gdk.Rectangle
        position?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        onActivateDefault?: () => void
        onClosed?: () => void
      }
      PopoverMenu: JSX.IntrinsicElements["Popover"] & {
        menuModel?: Gio.MenuModel
        visibleSubmenu?: string
        accessibleRole?: Gtk.AccessibleRole
      }
      PopoverMenuBar: JSX.IntrinsicElements["Widget"] & {
        menuModel?: Gio.MenuModel
        accessibleRole?: Gtk.AccessibleRole
      }
      PrintUnixDialog: JSX.IntrinsicElements["Dialog"] & {
        currentPage?: number
        embedPageSetup?: boolean
        hasSelection?: boolean
        manualCapabilities?: Gtk.PrintCapabilities
        pageSetup?: Gtk.PageSetup
        printSettings?: Gtk.PrintSettings
        selectedPrinter?: Gtk.Printer
        supportSelection?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      ProgressBar: JSX.IntrinsicElements["Widget"] & {
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
        adjustment?: Gtk.Adjustment
        fillLevel?: number
        inverted?: boolean
        restrictToFillLevel?: boolean
        roundDigits?: number
        showFillLevel?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onAdjustBounds?: () => void
        onChangeValue?: () => void
        onMoveSlider?: () => void
        onValueChanged?: () => void
      }
      Revealer: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        childRevealed?: boolean
        revealChild?: boolean
        transitionDuration?: number
        transitionType?: Gtk.RevealerTransitionType
        accessibleRole?: Gtk.AccessibleRole
      }
      Scale: JSX.IntrinsicElements["Range"] & {
        digits?: number
        drawValue?: boolean
        hasOrigin?: boolean
        valuePos?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      ScaleButton: JSX.IntrinsicElements["Widget"] & {
        active?: boolean
        adjustment?: Gtk.Adjustment
        icons?: string[]
        value?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onPopdown?: () => void
        onPopup?: () => void
        onValueChanged?: () => void
      }
      Scrollbar: JSX.IntrinsicElements["Widget"] & {
        adjustment?: Gtk.Adjustment
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      ScrolledWindow: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        hadjustment?: Gtk.Adjustment
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
        vadjustment?: Gtk.Adjustment
        vscrollbarPolicy?: Gtk.PolicyType
        windowPlacement?: Gtk.CornerType
        accessibleRole?: Gtk.AccessibleRole
        onEdgeOvershot?: () => void
        onEdgeReached?: () => void
        onMoveFocusOut?: () => void
        onScrollChild?: () => void
      }
      SearchBar: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        keyCaptureWidget?: React.ReactElement | null
        searchModeEnabled?: boolean
        showCloseButton?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      SearchEntry: JSX.IntrinsicElements["Widget"] & {
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
        onDeleteText?: () => void
        onInsertText?: () => void
      }
      Separator: JSX.IntrinsicElements["Widget"] & {
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      ShortcutLabel: JSX.IntrinsicElements["Widget"] & {
        accelerator?: string
        disabledText?: string
        accessibleRole?: Gtk.AccessibleRole
      }
      ShortcutsGroup: JSX.IntrinsicElements["Box"] & {
        accelSizeGroup?: Gtk.SizeGroup
        height?: number
        title?: string
        titleSizeGroup?: Gtk.SizeGroup
        view?: string
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      ShortcutsSection: JSX.IntrinsicElements["Box"] & {
        maxHeight?: number
        sectionName?: string
        title?: string
        viewName?: string
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onChangeCurrentPage?: () => void
      }
      ShortcutsShortcut: JSX.IntrinsicElements["Widget"] & {
        accelSizeGroup?: Gtk.SizeGroup
        accelerator?: string
        actionName?: string
        direction?: Gtk.TextDirection
        icon?: Gio.Icon
        iconSet?: boolean
        shortcutType?: Gtk.ShortcutType
        subtitle?: string
        subtitleSet?: boolean
        title?: string
        titleSizeGroup?: Gtk.SizeGroup
        accessibleRole?: Gtk.AccessibleRole
      }
      ShortcutsWindow: JSX.IntrinsicElements["Window"] & {
        sectionName?: string
        viewName?: string
        accessibleRole?: Gtk.AccessibleRole
        onClose?: () => void
        onSearch?: () => void
      }
      SpinButton: JSX.IntrinsicElements["Widget"] & {
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
        onChangeValue?: () => void
        onInput?: () => void
        onOutput?: () => void
        onValueChanged?: () => void
        onWrapped?: () => void
        onEditingDone?: () => void
        onRemoveWidget?: () => void
        onChanged?: () => void
        onDeleteText?: () => void
        onInsertText?: () => void
      }
      Spinner: JSX.IntrinsicElements["Widget"] & {
        spinning?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Stack: JSX.IntrinsicElements["Widget"] & {
        hhomogeneous?: boolean
        interpolateSize?: boolean
        pages?: Gtk.SelectionModel
        transitionDuration?: number
        transitionRunning?: boolean
        transitionType?: Gtk.StackTransitionType
        vhomogeneous?: boolean
        visibleChild?: React.ReactElement | null
        visibleChildName?: string
        accessibleRole?: Gtk.AccessibleRole
      }
      StackSidebar: JSX.IntrinsicElements["Widget"] & {
        stack?: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
      }
      StackSwitcher: JSX.IntrinsicElements["Widget"] & {
        stack?: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      Statusbar: JSX.IntrinsicElements["Widget"] & {
        accessibleRole?: Gtk.AccessibleRole
        onTextPopped?: () => void
        onTextPushed?: () => void
      }
      Switch: JSX.IntrinsicElements["Widget"] & {
        active?: boolean
        state?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
        onStateSet?: () => void
      }
      Text: JSX.IntrinsicElements["Widget"] & {
        activatesDefault?: boolean
        attributes?: Pango.AttrList
        buffer?: Gtk.EntryBuffer
        enableEmojiCompletion?: boolean
        extraMenu?: Gio.MenuModel
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
        tabs?: Pango.TabArray
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
        onDeleteFromCursor?: () => void
        onInsertAtCursor?: () => void
        onInsertEmoji?: () => void
        onMoveCursor?: () => void
        onPasteClipboard?: () => void
        onPreeditChanged?: () => void
        onToggleOverwrite?: () => void
        onChanged?: () => void
        onDeleteText?: () => void
        onInsertText?: () => void
      }
      TextView: JSX.IntrinsicElements["Widget"] & {
        acceptsTab?: boolean
        bottomMargin?: number
        buffer?: Gtk.TextBuffer
        cursorVisible?: boolean
        editable?: boolean
        extraMenu?: Gio.MenuModel
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
        tabs?: Pango.TabArray
        topMargin?: number
        wrapMode?: Gtk.WrapMode
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onBackspace?: () => void
        onCopyClipboard?: () => void
        onCutClipboard?: () => void
        onDeleteFromCursor?: () => void
        onExtendSelection?: () => void
        onInsertAtCursor?: () => void
        onInsertEmoji?: () => void
        onMoveCursor?: () => void
        onMoveViewport?: () => void
        onPasteClipboard?: () => void
        onPreeditChanged?: () => void
        onSelectAll?: () => void
        onSetAnchor?: () => void
        onToggleCursorVisible?: () => void
        onToggleOverwrite?: () => void
      }
      ToggleButton: JSX.IntrinsicElements["Button"] & {
        active?: boolean
        group?: Gtk.ToggleButton
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onToggled?: () => void
      }
      TreeExpander: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        hideExpander?: boolean
        indentForDepth?: boolean
        indentForIcon?: boolean
        item?: GObject.Object
        listRow?: Gtk.TreeListRow
        accessibleRole?: Gtk.AccessibleRole
      }
      TreeView: JSX.IntrinsicElements["Widget"] & {
        activateOnSingleClick?: boolean
        enableGridLines?: Gtk.TreeViewGridLines
        enableSearch?: boolean
        enableTreeLines?: boolean
        expanderColumn?: Gtk.TreeViewColumn
        fixedHeightMode?: boolean
        headersClickable?: boolean
        headersVisible?: boolean
        hoverExpand?: boolean
        hoverSelection?: boolean
        levelIndentation?: number
        model?: Gtk.TreeModel
        reorderable?: boolean
        rubberBanding?: boolean
        searchColumn?: number
        showExpanders?: boolean
        tooltipColumn?: number
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onColumnsChanged?: () => void
        onCursorChanged?: () => void
        onExpandCollapseCursorRow?: () => void
        onMoveCursor?: () => void
        onRowActivated?: () => void
        onRowCollapsed?: () => void
        onRowExpanded?: () => void
        onSelectAll?: () => void
        onSelectCursorParent?: () => void
        onSelectCursorRow?: () => void
        onStartInteractiveSearch?: () => void
        onTestCollapseRow?: () => void
        onTestExpandRow?: () => void
        onToggleCursorRow?: () => void
        onUnselectAll?: () => void
      }
      Video: JSX.IntrinsicElements["Widget"] & {
        autoplay?: boolean
        file?: Gio.File
        loop?: boolean
        mediaStream?: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
      }
      Viewport: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        scrollToFocus?: boolean
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
      }
      VolumeButton: JSX.IntrinsicElements["ScaleButton"] & {
        useSymbolic?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      Widget: {
        ref?: React.Ref<any>
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
        parent?: React.ReactElement | null
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
        onDirectionChanged?: () => void
        onHide?: () => void
        onKeynavFailed?: () => void
        onMap?: () => void
        onMnemonicActivate?: () => void
        onMoveFocus?: () => void
        onQueryTooltip?: () => void
        onRealize?: () => void
        onShow?: () => void
        onStateFlagsChanged?: () => void
        onUnmap?: () => void
        onUnrealize?: () => void
      }
      Window: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        application?: Gtk.Application
        decorated?: boolean
        defaultHeight?: number
        defaultWidget?: React.ReactElement | null
        defaultWidth?: number
        deletable?: boolean
        destroyWithParent?: boolean
        display?: Gdk.Display
        focusVisible?: boolean
        focusWidget?: React.ReactElement | null
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
        titlebar?: React.ReactElement | null
        transientFor?: Gtk.Window
        accessibleRole?: Gtk.AccessibleRole
        onActivateDefault?: () => void
        onActivateFocus?: () => void
        onCloseRequest?: () => void
        onEnableDebugging?: () => void
        onKeysChanged?: () => void
      }
      WindowControls: JSX.IntrinsicElements["Widget"] & {
        decorationLayout?: string
        empty?: boolean
        side?: Gtk.PackType
        accessibleRole?: Gtk.AccessibleRole
      }
      WindowHandle: JSX.IntrinsicElements["Widget"] & {
        children?: React.ReactElement
        accessibleRole?: Gtk.AccessibleRole
      }
    }
  }
}
