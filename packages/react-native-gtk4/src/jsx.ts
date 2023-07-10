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
        ref?: React.Ref<Gtk.AboutDialog>
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
        onActivateLink?: () => void
      }
      ActionBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ActionBar>
        revealed?: boolean
      }
      AppChooserButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AppChooserButton>
        heading?: string
        modal?: boolean
        showDefaultItem?: boolean
        showDialogItem?: boolean
        onActivate?: () => void
        onChanged?: () => void
        onCustomItemActivated?: () => void
      }
      AppChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.AppChooserDialog>
        heading?: string
      }
      AppChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AppChooserWidget>
        defaultText?: string
        showAll?: boolean
        showDefault?: boolean
        showFallback?: boolean
        showOther?: boolean
        showRecommended?: boolean
        onApplicationActivated?: () => void
        onApplicationSelected?: () => void
      }
      ApplicationWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ApplicationWindow>
        showMenubar?: boolean
      }
      AspectFrame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AspectFrame>
        children?: React.ReactElement
        obeyChild?: boolean
        ratio?: number
        xalign?: number
        yalign?: number
      }
      Assistant: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.Assistant>
        onApply?: () => void
        onCancel?: () => void
        onClose?: () => void
        onEscape?: () => void
        onPrepare?: () => void
      }
      Box: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Box>
        children?: React.ReactNode
        baselinePosition?: Gtk.BaselinePosition
        homogeneous?: boolean
        spacing?: number
        orientation?: Gtk.Orientation
      }
      Button: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Button>
        children?: React.ReactElement
        hasFrame?: boolean
        iconName?: string
        label?: string
        useUnderline?: boolean
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
        onClicked?: () => void
      }
      Calendar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Calendar>
        showDayNames?: boolean
        showHeading?: boolean
        showWeekNumbers?: boolean
        onDaySelected?: () => void
        onNextMonth?: () => void
        onNextYear?: () => void
        onPrevMonth?: () => void
        onPrevYear?: () => void
      }
      CellView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CellView>
        drawSensitive?: boolean
        fitModel?: boolean
        model?: Gtk.TreeModel
        orientation?: Gtk.Orientation
      }
      CenterBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CenterBox>
        baselinePosition?: Gtk.BaselinePosition
        centerWidget?: Gtk.Widget
        endWidget?: Gtk.Widget
        startWidget?: Gtk.Widget
        orientation?: Gtk.Orientation
      }
      CheckButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CheckButton>
        children?: React.ReactElement
        active?: boolean
        group?: Gtk.CheckButton
        inconsistent?: boolean
        label?: string
        useUnderline?: boolean
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
        onToggled?: () => void
      }
      ColorButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorButton>
        modal?: boolean
        title?: string
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onActivate?: () => void
        onColorSet?: () => void
        onColorActivated?: () => void
      }
      ColorChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.ColorChooserDialog>
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onColorActivated?: () => void
      }
      ColorChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorChooserWidget>
        rgba?: Gdk.RGBA
        useAlpha?: boolean
        onColorActivated?: () => void
      }
      ColorDialogButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorDialogButton>
        dialog?: Gtk.ColorDialog
        rgba?: Gdk.RGBA
      }
      ColumnView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColumnView>
        enableRubberband?: boolean
        model?: Gtk.SelectionModel
        reorderable?: boolean
        showColumnSeparators?: boolean
        showRowSeparators?: boolean
        singleClickActivate?: boolean
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: () => void
      }
      ComboBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ComboBox>
        children?: React.ReactElement
        active?: number
        activeId?: string
        buttonSensitivity?: Gtk.SensitivityType
        entryTextColumn?: number
        idColumn?: number
        model?: Gtk.TreeModel
        popupFixedWidth?: boolean
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
        ref?: React.Ref<Gtk.ComboBoxText>
        onEditingDone?: () => void
        onRemoveWidget?: () => void
      }
      Dialog: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.Dialog>
        onClose?: () => void
        onResponse?: () => void
      }
      DragIcon: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DragIcon>
        children?: React.ReactElement
      }
      DrawingArea: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DrawingArea>
        contentHeight?: number
        contentWidth?: number
        onResize?: () => void
      }
      DropDown: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DropDown>
        enableSearch?: boolean
        expression?: Gtk.Expression
        factory?: Gtk.ListItemFactory
        listFactory?: Gtk.ListItemFactory
        model?: Gio.ListModel
        selected?: number
        showArrow?: boolean
        onActivate?: () => void
      }
      EditableLabel: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.EditableLabel>
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
        onChanged?: () => void
        onDeleteText?: () => void
        onInsertText?: () => void
      }
      EmojiChooser: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.EmojiChooser>
        onEmojiPicked?: () => void
      }
      Entry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Entry>
        activatesDefault?: boolean
        attributes?: Pango.AttrList
        buffer?: Gtk.EntryBuffer
        completion?: Gtk.EntryCompletion
        extraMenu?: Gio.MenuModel
        hasFrame?: boolean
        inputHints?: Gtk.InputHints
        inputPurpose?: Gtk.InputPurpose
        invisibleChar?: number
        maxLength?: number
        overwriteMode?: boolean
        placeholderText?: string
        progressFraction?: number
        progressPulseStep?: number
        tabs?: Pango.TabArray
        visibility?: boolean
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
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
        ref?: React.Ref<Gtk.Expander>
        children?: React.ReactElement
        expanded?: boolean
        label?: string
        labelWidget?: Gtk.Widget
        resizeToplevel?: boolean
        useMarkup?: boolean
        useUnderline?: boolean
        onActivate?: () => void
      }
      FileChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.FileChooserDialog>
        action?: Gtk.FileChooserAction
        createFolders?: boolean
        filter?: Gtk.FileFilter
        selectMultiple?: boolean
      }
      FileChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FileChooserWidget>
        action?: Gtk.FileChooserAction
        createFolders?: boolean
        filter?: Gtk.FileFilter
        selectMultiple?: boolean
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
        ref?: React.Ref<Gtk.Fixed>
      }
      FlowBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBox>
        activateOnSingleClick?: boolean
        columnSpacing?: number
        homogeneous?: boolean
        maxChildrenPerLine?: number
        minChildrenPerLine?: number
        rowSpacing?: number
        selectionMode?: Gtk.SelectionMode
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
        ref?: React.Ref<Gtk.FlowBoxChild>
        children?: React.ReactElement
        onActivate?: () => void
      }
      FontButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontButton>
        modal?: boolean
        title?: string
        useFont?: boolean
        useSize?: boolean
        font?: string
        fontDesc?: Pango.FontDescription
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onActivate?: () => void
        onFontSet?: () => void
        onFontActivated?: () => void
      }
      FontChooserDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.FontChooserDialog>
        font?: string
        fontDesc?: Pango.FontDescription
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onFontActivated?: () => void
      }
      FontChooserWidget: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontChooserWidget>
        font?: string
        fontDesc?: Pango.FontDescription
        language?: string
        level?: Gtk.FontChooserLevel
        previewText?: string
        showPreviewEntry?: boolean
        onFontActivated?: () => void
      }
      FontDialogButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontDialogButton>
        dialog?: Gtk.FontDialog
        fontDesc?: Pango.FontDescription
        fontFeatures?: string
        language?: Pango.Language
        level?: Gtk.FontLevel
        useFont?: boolean
        useSize?: boolean
      }
      Frame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Frame>
        children?: React.ReactElement
        label?: string
        labelWidget?: Gtk.Widget
      }
      GLArea: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.GLArea>
        autoRender?: boolean
        hasDepthBuffer?: boolean
        hasStencilBuffer?: boolean
        useEs?: boolean
        onCreateContext?: () => void
        onRender?: () => void
        onResize?: () => void
      }
      Grid: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Grid>
        baselineRow?: number
        columnHomogeneous?: boolean
        columnSpacing?: number
        rowHomogeneous?: boolean
        rowSpacing?: number
        orientation?: Gtk.Orientation
      }
      GridView: JSX.IntrinsicElements["ListBase"] & {
        ref?: React.Ref<Gtk.GridView>
        enableRubberband?: boolean
        factory?: Gtk.ListItemFactory
        maxColumns?: number
        minColumns?: number
        model?: Gtk.SelectionModel
        singleClickActivate?: boolean
        orientation?: Gtk.Orientation
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: () => void
      }
      HeaderBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.HeaderBar>
        decorationLayout?: string
        showTitleButtons?: boolean
        titleWidget?: Gtk.Widget
      }
      IconView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.IconView>
        activateOnSingleClick?: boolean
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
        ref?: React.Ref<Gtk.Image>
        iconSize?: Gtk.IconSize
        pixelSize?: number
      }
      InfoBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.InfoBar>
        messageType?: Gtk.MessageType
        revealed?: boolean
        showCloseButton?: boolean
        onClose?: () => void
        onResponse?: () => void
      }
      Inscription: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Inscription>
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
      }
      Label: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Label>
        attributes?: Pango.AttrList
        ellipsize?: Pango.EllipsizeMode
        extraMenu?: Gio.MenuModel
        justify?: Gtk.Justification
        label?: string
        lines?: number
        maxWidthChars?: number
        mnemonicWidget?: Gtk.Widget
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
        onActivateCurrentLink?: () => void
        onActivateLink?: () => void
        onCopyClipboard?: () => void
        onMoveCursor?: () => void
      }
      LevelBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.LevelBar>
        inverted?: boolean
        maxValue?: number
        minValue?: number
        mode?: Gtk.LevelBarMode
        value?: number
        orientation?: Gtk.Orientation
        onOffsetChanged?: () => void
      }
      LinkButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LinkButton>
        uri?: string
        visited?: boolean
        actionName?: string
        actionTarget?: GLib.Variant
        onActivateLink?: () => void
      }
      ListBase: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBase>
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
      }
      ListBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBox>
        activateOnSingleClick?: boolean
        selectionMode?: Gtk.SelectionMode
        showSeparators?: boolean
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
        ref?: React.Ref<Gtk.ListBoxRow>
        children?: React.ReactElement
        activatable?: boolean
        selectable?: boolean
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
      }
      ListView: JSX.IntrinsicElements["ListBase"] & {
        ref?: React.Ref<Gtk.ListView>
        enableRubberband?: boolean
        factory?: Gtk.ListItemFactory
        model?: Gtk.SelectionModel
        showSeparators?: boolean
        singleClickActivate?: boolean
        orientation?: Gtk.Orientation
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: () => void
      }
      LockButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LockButton>
        permission?: Gio.Permission
        actionName?: string
        actionTarget?: GLib.Variant
      }
      MediaControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MediaControls>
        mediaStream?: Gtk.MediaStream
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
        menuModel?: Gio.MenuModel
        popover?: Gtk.Popover
        primary?: boolean
        useUnderline?: boolean
        onActivate?: () => void
      }
      MessageDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.MessageDialog>
      }
      Notebook: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Notebook>
        groupName?: string
        scrollable?: boolean
        showBorder?: boolean
        showTabs?: boolean
        tabPos?: Gtk.PositionType
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
        ref?: React.Ref<Gtk.Overlay>
        children?: React.ReactElement
        onGetChildPosition?: () => void
      }
      PageSetupUnixDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.PageSetupUnixDialog>
      }
      Paned: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Paned>
        endChild?: Gtk.Widget
        position?: number
        resizeEndChild?: boolean
        resizeStartChild?: boolean
        shrinkEndChild?: boolean
        shrinkStartChild?: boolean
        startChild?: Gtk.Widget
        wideHandle?: boolean
        orientation?: Gtk.Orientation
        onAcceptPosition?: () => void
        onCancelPosition?: () => void
        onCycleChildFocus?: () => void
        onCycleHandleFocus?: () => void
        onMoveHandle?: () => void
        onToggleHandleFocus?: () => void
      }
      PasswordEntry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PasswordEntry>
        extraMenu?: Gio.MenuModel
        showPeekIcon?: boolean
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
        onActivate?: () => void
        onChanged?: () => void
        onDeleteText?: () => void
        onInsertText?: () => void
      }
      Picture: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Picture>
        alternativeText?: string
        canShrink?: boolean
        contentFit?: Gtk.ContentFit
        file?: Gio.File
        keepAspectRatio?: boolean
        paintable?: Gdk.Paintable
      }
      Popover: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Popover>
        children?: React.ReactElement
        autohide?: boolean
        cascadePopdown?: boolean
        defaultWidget?: Gtk.Widget
        hasArrow?: boolean
        mnemonicsVisible?: boolean
        pointingTo?: Gdk.Rectangle
        position?: Gtk.PositionType
        onActivateDefault?: () => void
        onClosed?: () => void
      }
      PopoverMenu: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.PopoverMenu>
        menuModel?: Gio.MenuModel
      }
      PopoverMenuBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PopoverMenuBar>
        menuModel?: Gio.MenuModel
      }
      PrintUnixDialog: JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.PrintUnixDialog>
        currentPage?: number
        embedPageSetup?: boolean
        hasSelection?: boolean
        manualCapabilities?: Gtk.PrintCapabilities
        pageSetup?: Gtk.PageSetup
        supportSelection?: boolean
      }
      ProgressBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ProgressBar>
        ellipsize?: Pango.EllipsizeMode
        fraction?: number
        inverted?: boolean
        pulseStep?: number
        showText?: boolean
        text?: string
        orientation?: Gtk.Orientation
      }
      Range: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Range>
        adjustment?: Gtk.Adjustment
        fillLevel?: number
        inverted?: boolean
        restrictToFillLevel?: boolean
        roundDigits?: number
        showFillLevel?: boolean
        orientation?: Gtk.Orientation
        onAdjustBounds?: () => void
        onChangeValue?: () => void
        onMoveSlider?: () => void
        onValueChanged?: () => void
      }
      Revealer: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Revealer>
        children?: React.ReactElement
        revealChild?: boolean
        transitionDuration?: number
        transitionType?: Gtk.RevealerTransitionType
      }
      Scale: JSX.IntrinsicElements["Range"] & {
        ref?: React.Ref<Gtk.Scale>
        digits?: number
        drawValue?: boolean
        hasOrigin?: boolean
        valuePos?: Gtk.PositionType
        orientation?: Gtk.Orientation
      }
      ScaleButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScaleButton>
        adjustment?: Gtk.Adjustment
        icons?: string[]
        value?: number
        orientation?: Gtk.Orientation
        onPopdown?: () => void
        onPopup?: () => void
        onValueChanged?: () => void
      }
      Scrollbar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Scrollbar>
        adjustment?: Gtk.Adjustment
        orientation?: Gtk.Orientation
      }
      ScrolledWindow: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScrolledWindow>
        children?: React.ReactElement
        hadjustment?: Gtk.Adjustment
        hasFrame?: boolean
        kineticScrolling?: boolean
        maxContentHeight?: number
        maxContentWidth?: number
        minContentHeight?: number
        minContentWidth?: number
        overlayScrolling?: boolean
        propagateNaturalHeight?: boolean
        propagateNaturalWidth?: boolean
        vadjustment?: Gtk.Adjustment
        onEdgeOvershot?: () => void
        onEdgeReached?: () => void
        onMoveFocusOut?: () => void
        onScrollChild?: () => void
      }
      SearchBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchBar>
        children?: React.ReactElement
        keyCaptureWidget?: Gtk.Widget
        showCloseButton?: boolean
      }
      SearchEntry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchEntry>
        placeholderText?: string
        searchDelay?: number
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
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
        ref?: React.Ref<Gtk.Separator>
        orientation?: Gtk.Orientation
      }
      ShortcutLabel: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutLabel>
        accelerator?: string
        disabledText?: string
      }
      ShortcutsGroup: JSX.IntrinsicElements["Box"] & {
        ref?: React.Ref<Gtk.ShortcutsGroup>
        orientation?: Gtk.Orientation
      }
      ShortcutsSection: JSX.IntrinsicElements["Box"] & {
        ref?: React.Ref<Gtk.ShortcutsSection>
        orientation?: Gtk.Orientation
        onChangeCurrentPage?: () => void
      }
      ShortcutsShortcut: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutsShortcut>
      }
      ShortcutsWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ShortcutsWindow>
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
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
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
        ref?: React.Ref<Gtk.Spinner>
        spinning?: boolean
      }
      Stack: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Stack>
        hhomogeneous?: boolean
        interpolateSize?: boolean
        transitionDuration?: number
        transitionType?: Gtk.StackTransitionType
        vhomogeneous?: boolean
        visibleChild?: Gtk.Widget
        visibleChildName?: string
      }
      StackSidebar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSidebar>
        stack?: Gtk.Stack
      }
      StackSwitcher: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSwitcher>
        stack?: Gtk.Stack
        orientation?: Gtk.Orientation
      }
      Statusbar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Statusbar>
        onTextPopped?: () => void
        onTextPushed?: () => void
      }
      Switch: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Switch>
        active?: boolean
        state?: boolean
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: () => void
        onStateSet?: () => void
      }
      Text: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Text>
        activatesDefault?: boolean
        attributes?: Pango.AttrList
        buffer?: Gtk.EntryBuffer
        enableEmojiCompletion?: boolean
        extraMenu?: Gio.MenuModel
        inputHints?: Gtk.InputHints
        inputPurpose?: Gtk.InputPurpose
        invisibleChar?: number
        maxLength?: number
        overwriteMode?: boolean
        placeholderText?: string
        propagateTextWidth?: boolean
        tabs?: Pango.TabArray
        truncateMultiline?: boolean
        visibility?: boolean
        editable?: boolean
        enableUndo?: boolean
        maxWidthChars?: number
        text?: string
        widthChars?: number
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
        ref?: React.Ref<Gtk.TextView>
        acceptsTab?: boolean
        bottomMargin?: number
        buffer?: Gtk.TextBuffer
        cursorVisible?: boolean
        editable?: boolean
        extraMenu?: Gio.MenuModel
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
        ref?: React.Ref<Gtk.ToggleButton>
        active?: boolean
        group?: Gtk.ToggleButton
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
        listRow?: Gtk.TreeListRow
      }
      TreeView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeView>
        activateOnSingleClick?: boolean
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
        ref?: React.Ref<Gtk.Video>
        autoplay?: boolean
        file?: Gio.File
        loop?: boolean
        mediaStream?: Gtk.MediaStream
      }
      Viewport: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Viewport>
        children?: React.ReactElement
        scrollToFocus?: boolean
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
      }
      VolumeButton: JSX.IntrinsicElements["ScaleButton"] & {
        ref?: React.Ref<Gtk.VolumeButton>
        orientation?: Gtk.Orientation
      }
      Widget: {
        ref?: React.Ref<Gtk.Widget>
        canFocus?: boolean
        canTarget?: boolean
        cssClasses?: string[]
        cursor?: Gdk.Cursor
        focusOnClick?: boolean
        focusable?: boolean
        halign?: Gtk.Align
        hasTooltip?: boolean
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
        receivesDefault?: boolean
        sensitive?: boolean
        tooltipMarkup?: string
        tooltipText?: string
        valign?: Gtk.Align
        vexpand?: boolean
        vexpandSet?: boolean
        visible?: boolean
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
        ref?: React.Ref<Gtk.Window>
        children?: React.ReactElement
        application?: Gtk.Application
        decorated?: boolean
        defaultWidget?: Gtk.Widget
        deletable?: boolean
        destroyWithParent?: boolean
        display?: Gdk.Display
        focusVisible?: boolean
        handleMenubarAccel?: boolean
        hideOnClose?: boolean
        iconName?: string
        mnemonicsVisible?: boolean
        modal?: boolean
        resizable?: boolean
        startupId?: string
        title?: string
        titlebar?: Gtk.Widget
        transientFor?: Gtk.Window
        onActivateDefault?: () => void
        onActivateFocus?: () => void
        onCloseRequest?: () => void
        onEnableDebugging?: () => void
        onKeysChanged?: () => void
      }
      WindowControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowControls>
        decorationLayout?: string
        side?: Gtk.PackType
      }
      WindowHandle: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowHandle>
        children?: React.ReactElement
      }
    }
  }
}
