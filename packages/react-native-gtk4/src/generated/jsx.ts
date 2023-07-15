import { Gtk, Gdk, GLib, Gio, Pango } from "../index.js"
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
        accessibleRole?: Gtk.AccessibleRole
        onActivateLink?: (node: Gtk.AboutDialog, uri: string) => boolean
      }
      ActionBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ActionBar>
        revealed?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      ApplicationWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ApplicationWindow>
        application?: Gtk.Application
        showMenubar?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      AspectFrame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AspectFrame>
        xalign?: number
        yalign?: number
        ratio?: number
        obeyChild?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Box: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Box>
        orientation?: Gtk.Orientation
        spacing?: number
        baselinePosition?: Gtk.BaselinePosition
        homogeneous?: boolean
        accessibleRole?: Gtk.AccessibleRole
      }
      Button: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Button>
        hasFrame?: boolean
        iconName?: string
        label?: string
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.Button) => boolean
        onClicked?: (node: Gtk.Button) => boolean
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
        onDaySelected?: (node: Gtk.Calendar) => boolean
        onNextMonth?: (node: Gtk.Calendar) => boolean
        onNextYear?: (node: Gtk.Calendar) => boolean
        onPrevMonth?: (node: Gtk.Calendar) => boolean
        onPrevYear?: (node: Gtk.Calendar) => boolean
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
        active?: boolean
        group?: Gtk.CheckButton
        inconsistent?: boolean
        label?: string
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.CheckButton) => boolean
        onToggled?: (node: Gtk.CheckButton) => boolean
      }
      ColorDialogButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorDialogButton>
        dialog?: Gtk.ColorDialog
        rgba?: Gdk.RGBA
        accessibleRole?: Gtk.AccessibleRole
      }
      ColumnView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColumnView>
        model?: Gtk.SelectionModel
        columns?: Gio.ListModel
        enableRubberband?: boolean
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
        onActivate?: (node: Gtk.ColumnView, position: number) => boolean
      }
      DragIcon: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DragIcon>
        accessibleRole?: Gtk.AccessibleRole
      }
      DrawingArea: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DrawingArea>
        contentHeight?: number
        contentWidth?: number
        accessibleRole?: Gtk.AccessibleRole
        onResize?: (
          node: Gtk.DrawingArea,
          width: number,
          height: number
        ) => boolean
      }
      DropDown: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DropDown>
        model?: Gio.ListModel
        expression?: Gtk.Expression
        enableSearch?: boolean
        factory?: Gtk.ListItemFactory
        listFactory?: Gtk.ListItemFactory
        selected?: number
        selectedItem?: any
        showArrow?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: (node: Gtk.DropDown) => boolean
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
        onChanged?: (node: Gtk.EditableLabel) => boolean
        onDeleteText?: (
          node: Gtk.EditableLabel,
          startPos: number,
          endPos: number
        ) => boolean
        onInsertText?: (
          node: Gtk.EditableLabel,
          text: string,
          length: number,
          position: number
        ) => boolean
      }
      EmojiChooser: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.EmojiChooser>
        accessibleRole?: Gtk.AccessibleRole
        onEmojiPicked?: (node: Gtk.EmojiChooser, text: string) => boolean
      }
      Entry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Entry>
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
        onActivate?: (node: Gtk.Entry) => boolean
        onIconPress?: (
          node: Gtk.Entry,
          iconPos: Gtk.EntryIconPosition
        ) => boolean
        onIconRelease?: (
          node: Gtk.Entry,
          iconPos: Gtk.EntryIconPosition
        ) => boolean
        onEditingDone?: (node: Gtk.Entry) => boolean
        onRemoveWidget?: (node: Gtk.Entry) => boolean
        onChanged?: (node: Gtk.Entry) => boolean
        onDeleteText?: (
          node: Gtk.Entry,
          startPos: number,
          endPos: number
        ) => boolean
        onInsertText?: (
          node: Gtk.Entry,
          text: string,
          length: number,
          position: number
        ) => boolean
      }
      Expander: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Expander>
        label?: string
        expanded?: boolean
        labelWidget?: Gtk.Widget
        resizeToplevel?: boolean
        useMarkup?: boolean
        useUnderline?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: (node: Gtk.Expander) => boolean
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
        onActivateCursorChild?: (node: Gtk.FlowBox) => boolean
        onChildActivated?: (
          node: Gtk.FlowBox,
          child: Gtk.FlowBoxChild
        ) => boolean
        onMoveCursor?: (
          node: Gtk.FlowBox,
          step: Gtk.MovementStep,
          count: number,
          extend: boolean,
          modify: boolean
        ) => boolean
        onSelectAll?: (node: Gtk.FlowBox) => boolean
        onSelectedChildrenChanged?: (node: Gtk.FlowBox) => boolean
        onToggleCursorChild?: (node: Gtk.FlowBox) => boolean
        onUnselectAll?: (node: Gtk.FlowBox) => boolean
      }
      FlowBoxChild: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBoxChild>
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: (node: Gtk.FlowBoxChild) => boolean
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
        accessibleRole?: Gtk.AccessibleRole
      }
      Frame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Frame>
        label?: string
        labelWidget?: Gtk.Widget
        labelXalign?: number
        accessibleRole?: Gtk.AccessibleRole
      }
      GLArea: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.GLArea>
        autoRender?: boolean
        context?: Gdk.GLContext
        hasDepthBuffer?: boolean
        hasStencilBuffer?: boolean
        useEs?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onCreateContext?: (node: Gtk.GLArea) => boolean
        onRender?: (node: Gtk.GLArea, context: Gdk.GLContext) => boolean
        onResize?: (node: Gtk.GLArea, width: number, height: number) => boolean
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
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: (node: Gtk.GridView, position: number) => boolean
      }
      HeaderBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.HeaderBar>
        decorationLayout?: string
        showTitleButtons?: boolean
        titleWidget?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
      }
      Image: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Image>
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
      Inscription: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Inscription>
        text?: string
        attributes?: Pango.AttrList
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
        attributes?: Pango.AttrList
        ellipsize?: Pango.EllipsizeMode
        extraMenu?: Gio.MenuModel
        justify?: Gtk.Justification
        label?: string
        lines?: number
        maxWidthChars?: number
        mnemonicKeyval?: number
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
        accessibleRole?: Gtk.AccessibleRole
        onActivateCurrentLink?: (node: Gtk.Label) => boolean
        onActivateLink?: (node: Gtk.Label, uri: string) => boolean
        onCopyClipboard?: (node: Gtk.Label) => boolean
        onMoveCursor?: (
          node: Gtk.Label,
          step: Gtk.MovementStep,
          count: number,
          extendSelection: boolean
        ) => boolean
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
        onOffsetChanged?: (node: Gtk.LevelBar, name: string) => boolean
      }
      LinkButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LinkButton>
        uri?: string
        visited?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivateLink?: (node: Gtk.LinkButton) => boolean
      }
      ListBase: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBase>
        orientation?: Gtk.Orientation
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
      }
      ListBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBox>
        acceptUnpairedRelease?: boolean
        activateOnSingleClick?: boolean
        selectionMode?: Gtk.SelectionMode
        showSeparators?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onActivateCursorRow?: (node: Gtk.ListBox) => boolean
        onMoveCursor?: (
          node: Gtk.ListBox,
          object: Gtk.MovementStep,
          p0: number,
          p1: boolean,
          p2: boolean
        ) => boolean
        onRowActivated?: (node: Gtk.ListBox, row: Gtk.ListBoxRow) => boolean
        onRowSelected?: (node: Gtk.ListBox, row?: Gtk.ListBoxRow) => boolean
        onSelectAll?: (node: Gtk.ListBox) => boolean
        onSelectedRowsChanged?: (node: Gtk.ListBox) => boolean
        onToggleCursorRow?: (node: Gtk.ListBox) => boolean
        onUnselectAll?: (node: Gtk.ListBox) => boolean
      }
      ListBoxRow: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBoxRow>
        activatable?: boolean
        selectable?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.ListBoxRow) => boolean
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
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onActivate?: (node: Gtk.ListView, position: number) => boolean
      }
      MediaControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MediaControls>
        stream?: Gtk.MediaStream
        mediaStream?: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
      }
      MenuButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MenuButton>
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
        onActivate?: (node: Gtk.MenuButton) => boolean
      }
      Notebook: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Notebook>
        enablePopup?: boolean
        groupName?: string
        page?: number
        pages?: Gio.ListModel
        scrollable?: boolean
        showBorder?: boolean
        showTabs?: boolean
        tabPos?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        onChangeCurrentPage?: (node: Gtk.Notebook, object: number) => boolean
        onCreateWindow?: (node: Gtk.Notebook, page: Gtk.Widget) => boolean
        onFocusTab?: (node: Gtk.Notebook, object: Gtk.NotebookTab) => boolean
        onMoveFocusOut?: (
          node: Gtk.Notebook,
          object: Gtk.DirectionType
        ) => boolean
        onPageAdded?: (
          node: Gtk.Notebook,
          child: Gtk.Widget,
          pageNum: number
        ) => boolean
        onPageRemoved?: (
          node: Gtk.Notebook,
          child: Gtk.Widget,
          pageNum: number
        ) => boolean
        onPageReordered?: (
          node: Gtk.Notebook,
          child: Gtk.Widget,
          pageNum: number
        ) => boolean
        onReorderTab?: (
          node: Gtk.Notebook,
          object: Gtk.DirectionType,
          p0: boolean
        ) => boolean
        onSelectPage?: (node: Gtk.Notebook, object: boolean) => boolean
        onSwitchPage?: (
          node: Gtk.Notebook,
          page: Gtk.Widget,
          pageNum: number
        ) => boolean
      }
      Overlay: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Overlay>
        accessibleRole?: Gtk.AccessibleRole
        onGetChildPosition?: (
          node: Gtk.Overlay,
          widget: Gtk.Widget,
          allocation: Gdk.Rectangle
        ) => boolean
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
        onAcceptPosition?: (node: Gtk.Paned) => boolean
        onCancelPosition?: (node: Gtk.Paned) => boolean
        onCycleChildFocus?: (node: Gtk.Paned, reversed: boolean) => boolean
        onCycleHandleFocus?: (node: Gtk.Paned, reversed: boolean) => boolean
        onMoveHandle?: (node: Gtk.Paned, scrollType: Gtk.ScrollType) => boolean
        onToggleHandleFocus?: (node: Gtk.Paned) => boolean
      }
      PasswordEntry: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PasswordEntry>
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
        onActivate?: (node: Gtk.PasswordEntry) => boolean
        onChanged?: (node: Gtk.PasswordEntry) => boolean
        onDeleteText?: (
          node: Gtk.PasswordEntry,
          startPos: number,
          endPos: number
        ) => boolean
        onInsertText?: (
          node: Gtk.PasswordEntry,
          text: string,
          length: number,
          position: number
        ) => boolean
      }
      Picture: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Picture>
        alternativeText?: string
        canShrink?: boolean
        contentFit?: Gtk.ContentFit
        file?: Gio.File
        keepAspectRatio?: boolean
        paintable?: Gdk.Paintable
        accessibleRole?: Gtk.AccessibleRole
      }
      Popover: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Popover>
        autohide?: boolean
        cascadePopdown?: boolean
        defaultWidget?: Gtk.Widget
        hasArrow?: boolean
        mnemonicsVisible?: boolean
        pointingTo?: Gdk.Rectangle
        position?: Gtk.PositionType
        accessibleRole?: Gtk.AccessibleRole
        onActivateDefault?: (node: Gtk.Popover) => boolean
        onClosed?: (node: Gtk.Popover) => boolean
      }
      PopoverMenu: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.PopoverMenu>
        model?: Gio.MenuModel
        menuModel?: Gio.MenuModel
        visibleSubmenu?: string
        accessibleRole?: Gtk.AccessibleRole
      }
      PopoverMenuBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PopoverMenuBar>
        model?: Gio.MenuModel
        menuModel?: Gio.MenuModel
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
        adjustment?: Gtk.Adjustment
        fillLevel?: number
        inverted?: boolean
        restrictToFillLevel?: boolean
        roundDigits?: number
        showFillLevel?: boolean
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onAdjustBounds?: (node: Gtk.Range, value: number) => boolean
        onChangeValue?: (
          node: Gtk.Range,
          scroll: Gtk.ScrollType,
          value: number
        ) => boolean
        onMoveSlider?: (node: Gtk.Range, step: Gtk.ScrollType) => boolean
        onValueChanged?: (node: Gtk.Range) => boolean
      }
      Revealer: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Revealer>
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
        adjustment?: Gtk.Adjustment
        value?: number
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onPopdown?: (node: Gtk.ScaleButton) => boolean
        onPopup?: (node: Gtk.ScaleButton) => boolean
        onValueChanged?: (node: Gtk.ScaleButton, value: number) => boolean
      }
      Scrollbar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Scrollbar>
        orientation?: Gtk.Orientation
        adjustment?: Gtk.Adjustment
        accessibleRole?: Gtk.AccessibleRole
      }
      ScrolledWindow: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScrolledWindow>
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
        onEdgeOvershot?: (
          node: Gtk.ScrolledWindow,
          pos: Gtk.PositionType
        ) => boolean
        onEdgeReached?: (
          node: Gtk.ScrolledWindow,
          pos: Gtk.PositionType
        ) => boolean
        onMoveFocusOut?: (
          node: Gtk.ScrolledWindow,
          directionType: Gtk.DirectionType
        ) => boolean
        onScrollChild?: (
          node: Gtk.ScrolledWindow,
          scroll: Gtk.ScrollType,
          horizontal: boolean
        ) => boolean
      }
      SearchBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchBar>
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
        onActivate?: (node: Gtk.SearchEntry) => boolean
        onNextMatch?: (node: Gtk.SearchEntry) => boolean
        onPreviousMatch?: (node: Gtk.SearchEntry) => boolean
        onSearchChanged?: (node: Gtk.SearchEntry) => boolean
        onSearchStarted?: (node: Gtk.SearchEntry) => boolean
        onStopSearch?: (node: Gtk.SearchEntry) => boolean
        onChanged?: (node: Gtk.SearchEntry) => boolean
        onDeleteText?: (
          node: Gtk.SearchEntry,
          startPos: number,
          endPos: number
        ) => boolean
        onInsertText?: (
          node: Gtk.SearchEntry,
          text: string,
          length: number,
          position: number
        ) => boolean
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
        accelSizeGroup?: Gtk.SizeGroup
        height?: number
        title?: string
        titleSizeGroup?: Gtk.SizeGroup
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
        onChangeCurrentPage?: (
          node: Gtk.ShortcutsSection,
          object: number
        ) => boolean
      }
      ShortcutsShortcut: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutsShortcut>
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
        ref?: React.Ref<Gtk.ShortcutsWindow>
        sectionName?: string
        viewName?: string
        accessibleRole?: Gtk.AccessibleRole
        onClose?: (node: Gtk.ShortcutsWindow) => boolean
        onSearch?: (node: Gtk.ShortcutsWindow) => boolean
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
        onChangeValue?: (
          node: Gtk.SpinButton,
          scroll: Gtk.ScrollType
        ) => boolean
        onInput?: (node: Gtk.SpinButton, newValue: number) => boolean
        onOutput?: (node: Gtk.SpinButton) => boolean
        onValueChanged?: (node: Gtk.SpinButton) => boolean
        onWrapped?: (node: Gtk.SpinButton) => boolean
        onEditingDone?: (node: Gtk.SpinButton) => boolean
        onRemoveWidget?: (node: Gtk.SpinButton) => boolean
        onChanged?: (node: Gtk.SpinButton) => boolean
        onDeleteText?: (
          node: Gtk.SpinButton,
          startPos: number,
          endPos: number
        ) => boolean
        onInsertText?: (
          node: Gtk.SpinButton,
          text: string,
          length: number,
          position: number
        ) => boolean
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
        pages?: Gtk.SelectionModel
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
        stack?: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
      }
      StackSwitcher: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSwitcher>
        stack?: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
      }
      Switch: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Switch>
        active?: boolean
        state?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.Switch) => boolean
        onStateSet?: (node: Gtk.Switch, state: boolean) => boolean
      }
      Text: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Text>
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
        onActivate?: (node: Gtk.Text) => boolean
        onBackspace?: (node: Gtk.Text) => boolean
        onCopyClipboard?: (node: Gtk.Text) => boolean
        onCutClipboard?: (node: Gtk.Text) => boolean
        onDeleteFromCursor?: (
          node: Gtk.Text,
          type: Gtk.DeleteType,
          count: number
        ) => boolean
        onInsertAtCursor?: (node: Gtk.Text, string: string) => boolean
        onInsertEmoji?: (node: Gtk.Text) => boolean
        onMoveCursor?: (
          node: Gtk.Text,
          step: Gtk.MovementStep,
          count: number,
          extend: boolean
        ) => boolean
        onPasteClipboard?: (node: Gtk.Text) => boolean
        onPreeditChanged?: (node: Gtk.Text, preedit: string) => boolean
        onToggleOverwrite?: (node: Gtk.Text) => boolean
        onChanged?: (node: Gtk.Text) => boolean
        onDeleteText?: (
          node: Gtk.Text,
          startPos: number,
          endPos: number
        ) => boolean
        onInsertText?: (
          node: Gtk.Text,
          text: string,
          length: number,
          position: number
        ) => boolean
      }
      TextView: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TextView>
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
        onBackspace?: (node: Gtk.TextView) => boolean
        onCopyClipboard?: (node: Gtk.TextView) => boolean
        onCutClipboard?: (node: Gtk.TextView) => boolean
        onDeleteFromCursor?: (
          node: Gtk.TextView,
          type: Gtk.DeleteType,
          count: number
        ) => boolean
        onExtendSelection?: (
          node: Gtk.TextView,
          granularity: Gtk.TextExtendSelection,
          location: Gtk.TextIter,
          start: Gtk.TextIter,
          end: Gtk.TextIter
        ) => boolean
        onInsertAtCursor?: (node: Gtk.TextView, string: string) => boolean
        onInsertEmoji?: (node: Gtk.TextView) => boolean
        onMoveCursor?: (
          node: Gtk.TextView,
          step: Gtk.MovementStep,
          count: number,
          extendSelection: boolean
        ) => boolean
        onMoveViewport?: (
          node: Gtk.TextView,
          step: Gtk.ScrollStep,
          count: number
        ) => boolean
        onPasteClipboard?: (node: Gtk.TextView) => boolean
        onPreeditChanged?: (node: Gtk.TextView, preedit: string) => boolean
        onSelectAll?: (node: Gtk.TextView, select: boolean) => boolean
        onSetAnchor?: (node: Gtk.TextView) => boolean
        onToggleCursorVisible?: (node: Gtk.TextView) => boolean
        onToggleOverwrite?: (node: Gtk.TextView) => boolean
      }
      ToggleButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.ToggleButton>
        active?: boolean
        group?: Gtk.ToggleButton
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onToggled?: (node: Gtk.ToggleButton) => boolean
      }
      TreeExpander: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeExpander>
        hideExpander?: boolean
        indentForDepth?: boolean
        indentForIcon?: boolean
        item?: any
        listRow?: Gtk.TreeListRow
        accessibleRole?: Gtk.AccessibleRole
      }
      Video: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Video>
        autoplay?: boolean
        file?: Gio.File
        loop?: boolean
        mediaStream?: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
      }
      Viewport: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Viewport>
        hadjustment?: Gtk.Adjustment
        vadjustment?: Gtk.Adjustment
        scrollToFocus?: boolean
        accessibleRole?: Gtk.AccessibleRole
        hscrollPolicy?: Gtk.ScrollablePolicy
        vscrollPolicy?: Gtk.ScrollablePolicy
      }
      Widget: {
        ref?: React.Ref<Gtk.Widget>
        children?: React.ReactNode
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
        onDestroy?: (node: Gtk.Widget) => boolean
        onDirectionChanged?: (
          node: Gtk.Widget,
          previousDirection: Gtk.TextDirection
        ) => boolean
        onHide?: (node: Gtk.Widget) => boolean
        onKeynavFailed?: (
          node: Gtk.Widget,
          direction: Gtk.DirectionType
        ) => boolean
        onMap?: (node: Gtk.Widget) => boolean
        onMnemonicActivate?: (
          node: Gtk.Widget,
          groupCycling: boolean
        ) => boolean
        onMoveFocus?: (
          node: Gtk.Widget,
          direction: Gtk.DirectionType
        ) => boolean
        onQueryTooltip?: (
          node: Gtk.Widget,
          x: number,
          y: number,
          keyboardMode: boolean,
          tooltip: Gtk.Tooltip
        ) => boolean
        onRealize?: (node: Gtk.Widget) => boolean
        onShow?: (node: Gtk.Widget) => boolean
        onStateFlagsChanged?: (
          node: Gtk.Widget,
          flags: Gtk.StateFlags
        ) => boolean
        onUnmap?: (node: Gtk.Widget) => boolean
        onUnrealize?: (node: Gtk.Widget) => boolean
      }
      Window: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Window>
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
        onActivateDefault?: (node: Gtk.Window) => boolean
        onActivateFocus?: (node: Gtk.Window) => boolean
        onCloseRequest?: (node: Gtk.Window) => boolean
        onEnableDebugging?: (node: Gtk.Window, toggle: boolean) => boolean
        onKeysChanged?: (node: Gtk.Window) => boolean
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
        accessibleRole?: Gtk.AccessibleRole
      }
    }
  }
}
