declare namespace JSX {
  interface IntrinsicElements {
    AboutDialog: JSX.IntrinsicElements["Window"] & {
      ref?: React.Ref<any>
      artists?: string[]
      authors?: string[]
      comments?: string
      copyright?: string
      documenters?: string[]
      license?: string
      licenseType?: any
      logo?: any
      logoIconName?: string
      programName?: string
      systemInformation?: string
      translatorCredits?: string
      version?: string
      website?: string
      websiteLabel?: string
      wrapLicense?: boolean
      accessibleRole?: any
      onActivateLink?: () => void
    }
    ActionBar: {
      ref?: React.Ref<any>
      revealed?: boolean
      accessibleRole?: any
    }
    AppChooserButton: {
      ref?: React.Ref<any>
      heading?: string
      modal?: boolean
      showDefaultItem?: boolean
      showDialogItem?: boolean
      accessibleRole?: any
      contentType?: string
      onActivate?: () => void
      onChanged?: () => void
      onCustomItemActivated?: () => void
    }
    AppChooserDialog: JSX.IntrinsicElements["Dialog"] & {
      ref?: React.Ref<any>
      gfile?: any
      heading?: string
      accessibleRole?: any
      contentType?: string
    }
    AppChooserWidget: {
      ref?: React.Ref<any>
      defaultText?: string
      showAll?: boolean
      showDefault?: boolean
      showFallback?: boolean
      showOther?: boolean
      showRecommended?: boolean
      accessibleRole?: any
      contentType?: string
      onApplicationActivated?: () => void
      onApplicationSelected?: () => void
    }
    ApplicationWindow: JSX.IntrinsicElements["Window"] & {
      ref?: React.Ref<any>
      showMenubar?: boolean
      accessibleRole?: any
    }
    AspectFrame: {
      ref?: React.Ref<any>
      children?: JSX.Element
      obeyChild?: boolean
      ratio?: number
      xalign?: number
      yalign?: number
      accessibleRole?: any
    }
    Assistant: JSX.IntrinsicElements["Window"] & {
      ref?: React.Ref<any>
      pages?: any
      useHeaderBar?: number
      accessibleRole?: any
      onApply?: () => void
      onCancel?: () => void
      onClose?: () => void
      onEscape?: () => void
      onPrepare?: () => void
    }
    Box: {
      children?: React.ReactNode
      ref?: React.Ref<any>
      baselineChild?: number
      baselinePosition?: any
      homogeneous?: boolean
      spacing?: number
      accessibleRole?: any
      orientation?: any
    }
    Button: {
      ref?: React.Ref<any>
      children?: JSX.Element
      canShrink?: boolean
      hasFrame?: boolean
      iconName?: string
      label?: string
      useUnderline?: boolean
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onActivate?: () => void
      onClicked?: () => void
    }
    Calendar: {
      ref?: React.Ref<any>
      day?: number
      month?: number
      showDayNames?: boolean
      showHeading?: boolean
      showWeekNumbers?: boolean
      year?: number
      accessibleRole?: any
      onDaySelected?: () => void
      onNextMonth?: () => void
      onNextYear?: () => void
      onPrevMonth?: () => void
      onPrevYear?: () => void
    }
    CellView: {
      ref?: React.Ref<any>
      cellArea?: any
      cellAreaContext?: any
      drawSensitive?: boolean
      fitModel?: boolean
      model?: any
      accessibleRole?: any
      orientation?: any
    }
    CenterBox: {
      ref?: React.Ref<any>
      baselinePosition?: any
      centerWidget?: JSX.Element | null
      endWidget?: JSX.Element | null
      shrinkCenterLast?: boolean
      startWidget?: JSX.Element | null
      accessibleRole?: any
      orientation?: any
    }
    CheckButton: {
      ref?: React.Ref<any>
      children?: JSX.Element
      active?: boolean
      group?: any
      inconsistent?: boolean
      label?: string
      useUnderline?: boolean
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onActivate?: () => void
      onToggled?: () => void
    }
    ColorButton: {
      ref?: React.Ref<any>
      modal?: boolean
      showEditor?: boolean
      title?: string
      accessibleRole?: any
      rgba?: any
      useAlpha?: boolean
      onActivate?: () => void
      onColorSet?: () => void
      onColorActivated?: () => void
    }
    ColorChooserDialog: JSX.IntrinsicElements["Dialog"] & {
      ref?: React.Ref<any>
      showEditor?: boolean
      accessibleRole?: any
      rgba?: any
      useAlpha?: boolean
      onColorActivated?: () => void
    }
    ColorChooserWidget: {
      ref?: React.Ref<any>
      showEditor?: boolean
      accessibleRole?: any
      rgba?: any
      useAlpha?: boolean
      onColorActivated?: () => void
    }
    ColorDialogButton: {
      ref?: React.Ref<any>
      dialog?: any
      rgba?: any
      accessibleRole?: any
    }
    ColumnView: {
      ref?: React.Ref<any>
      columns?: any
      enableRubberband?: boolean
      headerFactory?: any
      model?: any
      reorderable?: boolean
      rowFactory?: any
      showColumnSeparators?: boolean
      showRowSeparators?: boolean
      singleClickActivate?: boolean
      sorter?: any
      tabBehavior?: any
      accessibleRole?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
      onActivate?: () => void
    }
    ComboBox: {
      ref?: React.Ref<any>
      children?: JSX.Element
      active?: number
      activeId?: string
      buttonSensitivity?: any
      entryTextColumn?: number
      hasEntry?: boolean
      hasFrame?: boolean
      idColumn?: number
      model?: any
      popupFixedWidth?: boolean
      popupShown?: boolean
      accessibleRole?: any
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
      ref?: React.Ref<any>
      accessibleRole?: any
      editingCanceled?: boolean
      onEditingDone?: () => void
      onRemoveWidget?: () => void
    }
    Dialog: JSX.IntrinsicElements["Window"] & {
      ref?: React.Ref<any>
      useHeaderBar?: number
      accessibleRole?: any
      onClose?: () => void
      onResponse?: () => void
    }
    DragIcon: {
      ref?: React.Ref<any>
      children?: JSX.Element
      accessibleRole?: any
    }
    DrawingArea: {
      ref?: React.Ref<any>
      contentHeight?: number
      contentWidth?: number
      accessibleRole?: any
      onResize?: () => void
    }
    DropDown: {
      ref?: React.Ref<any>
      enableSearch?: boolean
      expression?: any
      factory?: any
      headerFactory?: any
      listFactory?: any
      model?: any
      searchMatchMode?: any
      selected?: number
      selectedItem?: any
      showArrow?: boolean
      accessibleRole?: any
      onActivate?: () => void
    }
    EditableLabel: {
      ref?: React.Ref<any>
      editing?: boolean
      accessibleRole?: any
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
      ref?: React.Ref<any>
      accessibleRole?: any
      onEmojiPicked?: () => void
    }
    Entry: {
      ref?: React.Ref<any>
      activatesDefault?: boolean
      attributes?: any
      buffer?: any
      completion?: any
      enableEmojiCompletion?: boolean
      extraMenu?: any
      hasFrame?: boolean
      imModule?: string
      inputHints?: any
      inputPurpose?: any
      invisibleChar?: number
      invisibleCharSet?: boolean
      maxLength?: number
      overwriteMode?: boolean
      placeholderText?: string
      primaryIconActivatable?: boolean
      primaryIconGicon?: any
      primaryIconName?: string
      primaryIconPaintable?: any
      primaryIconSensitive?: boolean
      primaryIconStorageType?: any
      primaryIconTooltipMarkup?: string
      primaryIconTooltipText?: string
      progressFraction?: number
      progressPulseStep?: number
      scrollOffset?: number
      secondaryIconActivatable?: boolean
      secondaryIconGicon?: any
      secondaryIconName?: string
      secondaryIconPaintable?: any
      secondaryIconSensitive?: boolean
      secondaryIconStorageType?: any
      secondaryIconTooltipMarkup?: string
      secondaryIconTooltipText?: string
      showEmojiIcon?: boolean
      tabs?: any
      textLength?: number
      truncateMultiline?: boolean
      visibility?: boolean
      accessibleRole?: any
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
    Expander: {
      ref?: React.Ref<any>
      children?: JSX.Element
      expanded?: boolean
      label?: string
      labelWidget?: JSX.Element | null
      resizeToplevel?: boolean
      useMarkup?: boolean
      useUnderline?: boolean
      accessibleRole?: any
      onActivate?: () => void
    }
    FileChooserDialog: JSX.IntrinsicElements["Dialog"] & {
      ref?: React.Ref<any>
      accessibleRole?: any
      action?: any
      createFolders?: boolean
      filter?: any
      filters?: any
      selectMultiple?: boolean
      shortcutFolders?: any
    }
    FileChooserWidget: {
      ref?: React.Ref<any>
      searchMode?: boolean
      showTime?: boolean
      subtitle?: string
      accessibleRole?: any
      action?: any
      createFolders?: boolean
      filter?: any
      filters?: any
      selectMultiple?: boolean
      shortcutFolders?: any
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
    Fixed: {
      ref?: React.Ref<any>
      accessibleRole?: any
    }
    FlowBox: {
      ref?: React.Ref<any>
      acceptUnpairedRelease?: boolean
      activateOnSingleClick?: boolean
      columnSpacing?: number
      homogeneous?: boolean
      maxChildrenPerLine?: number
      minChildrenPerLine?: number
      rowSpacing?: number
      selectionMode?: any
      accessibleRole?: any
      orientation?: any
      onActivateCursorChild?: () => void
      onChildActivated?: () => void
      onMoveCursor?: () => void
      onSelectAll?: () => void
      onSelectedChildrenChanged?: () => void
      onToggleCursorChild?: () => void
      onUnselectAll?: () => void
    }
    FlowBoxChild: {
      ref?: React.Ref<any>
      children?: JSX.Element
      accessibleRole?: any
      onActivate?: () => void
    }
    FontButton: {
      ref?: React.Ref<any>
      modal?: boolean
      title?: string
      useFont?: boolean
      useSize?: boolean
      accessibleRole?: any
      font?: string
      fontDesc?: any
      fontFeatures?: string
      language?: string
      level?: any
      previewText?: string
      showPreviewEntry?: boolean
      onActivate?: () => void
      onFontSet?: () => void
      onFontActivated?: () => void
    }
    FontChooserDialog: JSX.IntrinsicElements["Dialog"] & {
      ref?: React.Ref<any>
      accessibleRole?: any
      font?: string
      fontDesc?: any
      fontFeatures?: string
      language?: string
      level?: any
      previewText?: string
      showPreviewEntry?: boolean
      onFontActivated?: () => void
    }
    FontChooserWidget: {
      ref?: React.Ref<any>
      tweakAction?: any
      accessibleRole?: any
      font?: string
      fontDesc?: any
      fontFeatures?: string
      language?: string
      level?: any
      previewText?: string
      showPreviewEntry?: boolean
      onFontActivated?: () => void
    }
    FontDialogButton: {
      ref?: React.Ref<any>
      dialog?: any
      fontDesc?: any
      fontFeatures?: string
      language?: any
      level?: any
      useFont?: boolean
      useSize?: boolean
      accessibleRole?: any
    }
    Frame: {
      ref?: React.Ref<any>
      children?: JSX.Element
      label?: string
      labelWidget?: JSX.Element | null
      labelXalign?: number
      accessibleRole?: any
    }
    GLArea: {
      ref?: React.Ref<any>
      allowedApis?: any
      api?: any
      autoRender?: boolean
      context?: any
      hasDepthBuffer?: boolean
      hasStencilBuffer?: boolean
      useEs?: boolean
      accessibleRole?: any
      onCreateContext?: () => void
      onRender?: () => void
      onResize?: () => void
    }
    Grid: {
      ref?: React.Ref<any>
      baselineRow?: number
      columnHomogeneous?: boolean
      columnSpacing?: number
      rowHomogeneous?: boolean
      rowSpacing?: number
      accessibleRole?: any
      orientation?: any
    }
    GridView: JSX.IntrinsicElements["ListBase"] & {
      ref?: React.Ref<any>
      enableRubberband?: boolean
      factory?: any
      maxColumns?: number
      minColumns?: number
      model?: any
      singleClickActivate?: boolean
      tabBehavior?: any
      accessibleRole?: any
      orientation?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
      onActivate?: () => void
    }
    HeaderBar: {
      ref?: React.Ref<any>
      decorationLayout?: string
      showTitleButtons?: boolean
      titleWidget?: JSX.Element | null
      accessibleRole?: any
    }
    IconView: {
      ref?: React.Ref<any>
      activateOnSingleClick?: boolean
      cellArea?: any
      columnSpacing?: number
      columns?: number
      itemOrientation?: any
      itemPadding?: number
      itemWidth?: number
      margin?: number
      markupColumn?: number
      model?: any
      pixbufColumn?: number
      reorderable?: boolean
      rowSpacing?: number
      selectionMode?: any
      spacing?: number
      textColumn?: number
      tooltipColumn?: number
      accessibleRole?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
      onActivateCursorItem?: () => void
      onItemActivated?: () => void
      onMoveCursor?: () => void
      onSelectAll?: () => void
      onSelectCursorItem?: () => void
      onSelectionChanged?: () => void
      onToggleCursorItem?: () => void
      onUnselectAll?: () => void
    }
    Image: {
      ref?: React.Ref<any>
      file?: string
      gicon?: any
      iconName?: string
      iconSize?: any
      paintable?: any
      pixelSize?: number
      resource?: string
      storageType?: any
      useFallback?: boolean
      accessibleRole?: any
    }
    InfoBar: {
      ref?: React.Ref<any>
      messageType?: any
      revealed?: boolean
      showCloseButton?: boolean
      accessibleRole?: any
      onClose?: () => void
      onResponse?: () => void
    }
    Inscription: {
      ref?: React.Ref<any>
      attributes?: any
      markup?: string
      minChars?: number
      minLines?: number
      natChars?: number
      natLines?: number
      text?: string
      textOverflow?: any
      wrapMode?: any
      xalign?: number
      yalign?: number
      accessibleRole?: any
    }
    Label: {
      ref?: React.Ref<any>
      attributes?: any
      ellipsize?: any
      extraMenu?: any
      justify?: any
      label?: string
      lines?: number
      maxWidthChars?: number
      mnemonicKeyval?: number
      mnemonicWidget?: JSX.Element | null
      naturalWrapMode?: any
      selectable?: boolean
      singleLineMode?: boolean
      tabs?: any
      useMarkup?: boolean
      useUnderline?: boolean
      widthChars?: number
      wrap?: boolean
      wrapMode?: any
      xalign?: number
      yalign?: number
      accessibleRole?: any
      onActivateCurrentLink?: () => void
      onActivateLink?: () => void
      onCopyClipboard?: () => void
      onMoveCursor?: () => void
    }
    LevelBar: {
      ref?: React.Ref<any>
      inverted?: boolean
      maxValue?: number
      minValue?: number
      mode?: any
      value?: number
      accessibleRole?: any
      orientation?: any
      onOffsetChanged?: () => void
    }
    LinkButton: JSX.IntrinsicElements["Button"] & {
      ref?: React.Ref<any>
      uri?: string
      visited?: boolean
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onActivateLink?: () => void
    }
    ListBase: {
      ref?: React.Ref<any>
      orientation?: any
      accessibleRole?: any
      orientation?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
    }
    ListBox: {
      ref?: React.Ref<any>
      acceptUnpairedRelease?: boolean
      activateOnSingleClick?: boolean
      selectionMode?: any
      showSeparators?: boolean
      accessibleRole?: any
      onActivateCursorRow?: () => void
      onMoveCursor?: () => void
      onRowActivated?: () => void
      onRowSelected?: () => void
      onSelectAll?: () => void
      onSelectedRowsChanged?: () => void
      onToggleCursorRow?: () => void
      onUnselectAll?: () => void
    }
    ListBoxRow: {
      ref?: React.Ref<any>
      children?: JSX.Element
      activatable?: boolean
      selectable?: boolean
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onActivate?: () => void
    }
    ListView: JSX.IntrinsicElements["ListBase"] & {
      ref?: React.Ref<any>
      enableRubberband?: boolean
      factory?: any
      headerFactory?: any
      model?: any
      showSeparators?: boolean
      singleClickActivate?: boolean
      tabBehavior?: any
      accessibleRole?: any
      orientation?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
      onActivate?: () => void
    }
    LockButton: JSX.IntrinsicElements["Button"] & {
      ref?: React.Ref<any>
      permission?: any
      textLock?: string
      textUnlock?: string
      tooltipLock?: string
      tooltipNotAuthorized?: string
      tooltipUnlock?: string
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
    }
    MediaControls: {
      ref?: React.Ref<any>
      mediaStream?: any
      accessibleRole?: any
    }
    MenuButton: {
      ref?: React.Ref<any>
      children?: JSX.Element
      active?: boolean
      alwaysShowArrow?: boolean
      canShrink?: boolean
      direction?: any
      hasFrame?: boolean
      iconName?: string
      label?: string
      menuModel?: any
      popover?: any
      primary?: boolean
      useUnderline?: boolean
      accessibleRole?: any
      onActivate?: () => void
    }
    MessageDialog: JSX.IntrinsicElements["Dialog"] & {
      ref?: React.Ref<any>
      buttons?: any
      messageArea?: JSX.Element | null
      messageType?: any
      secondaryText?: string
      secondaryUseMarkup?: boolean
      text?: string
      useMarkup?: boolean
      accessibleRole?: any
    }
    Notebook: {
      ref?: React.Ref<any>
      enablePopup?: boolean
      groupName?: string
      page?: number
      pages?: any
      scrollable?: boolean
      showBorder?: boolean
      showTabs?: boolean
      tabPos?: any
      accessibleRole?: any
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
    Overlay: {
      ref?: React.Ref<any>
      children?: JSX.Element
      accessibleRole?: any
      onGetChildPosition?: () => void
    }
    PageSetupUnixDialog: JSX.IntrinsicElements["Dialog"] & {
      ref?: React.Ref<any>
      accessibleRole?: any
    }
    Paned: {
      ref?: React.Ref<any>
      endChild?: JSX.Element | null
      maxPosition?: number
      minPosition?: number
      position?: number
      positionSet?: boolean
      resizeEndChild?: boolean
      resizeStartChild?: boolean
      shrinkEndChild?: boolean
      shrinkStartChild?: boolean
      startChild?: JSX.Element | null
      wideHandle?: boolean
      accessibleRole?: any
      orientation?: any
      onAcceptPosition?: () => void
      onCancelPosition?: () => void
      onCycleChildFocus?: () => void
      onCycleHandleFocus?: () => void
      onMoveHandle?: () => void
      onToggleHandleFocus?: () => void
    }
    PasswordEntry: {
      ref?: React.Ref<any>
      activatesDefault?: boolean
      extraMenu?: any
      placeholderText?: string
      showPeekIcon?: boolean
      accessibleRole?: any
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
    Picture: {
      ref?: React.Ref<any>
      alternativeText?: string
      canShrink?: boolean
      contentFit?: any
      file?: any
      keepAspectRatio?: boolean
      paintable?: any
      accessibleRole?: any
    }
    Popover: {
      ref?: React.Ref<any>
      children?: JSX.Element
      autohide?: boolean
      cascadePopdown?: boolean
      defaultWidget?: JSX.Element | null
      hasArrow?: boolean
      mnemonicsVisible?: boolean
      pointingTo?: any
      position?: any
      accessibleRole?: any
      onActivateDefault?: () => void
      onClosed?: () => void
    }
    PopoverMenu: JSX.IntrinsicElements["Popover"] & {
      ref?: React.Ref<any>
      menuModel?: any
      visibleSubmenu?: string
      accessibleRole?: any
    }
    PopoverMenuBar: {
      ref?: React.Ref<any>
      menuModel?: any
      accessibleRole?: any
    }
    PrintUnixDialog: JSX.IntrinsicElements["Dialog"] & {
      ref?: React.Ref<any>
      currentPage?: number
      embedPageSetup?: boolean
      hasSelection?: boolean
      manualCapabilities?: any
      pageSetup?: any
      printSettings?: any
      selectedPrinter?: any
      supportSelection?: boolean
      accessibleRole?: any
    }
    ProgressBar: {
      ref?: React.Ref<any>
      ellipsize?: any
      fraction?: number
      inverted?: boolean
      pulseStep?: number
      showText?: boolean
      text?: string
      accessibleRole?: any
      orientation?: any
    }
    Range: {
      ref?: React.Ref<any>
      adjustment?: any
      fillLevel?: number
      inverted?: boolean
      restrictToFillLevel?: boolean
      roundDigits?: number
      showFillLevel?: boolean
      accessibleRole?: any
      orientation?: any
      onAdjustBounds?: () => void
      onChangeValue?: () => void
      onMoveSlider?: () => void
      onValueChanged?: () => void
    }
    Revealer: {
      ref?: React.Ref<any>
      children?: JSX.Element
      childRevealed?: boolean
      revealChild?: boolean
      transitionDuration?: number
      transitionType?: any
      accessibleRole?: any
    }
    Scale: JSX.IntrinsicElements["Range"] & {
      ref?: React.Ref<any>
      digits?: number
      drawValue?: boolean
      hasOrigin?: boolean
      valuePos?: any
      accessibleRole?: any
      orientation?: any
    }
    ScaleButton: {
      ref?: React.Ref<any>
      active?: boolean
      adjustment?: any
      icons?: string[]
      value?: number
      accessibleRole?: any
      orientation?: any
      onPopdown?: () => void
      onPopup?: () => void
      onValueChanged?: () => void
    }
    Scrollbar: {
      ref?: React.Ref<any>
      adjustment?: any
      accessibleRole?: any
      orientation?: any
    }
    ScrolledWindow: {
      ref?: React.Ref<any>
      children?: JSX.Element
      hadjustment?: any
      hasFrame?: boolean
      hscrollbarPolicy?: any
      kineticScrolling?: boolean
      maxContentHeight?: number
      maxContentWidth?: number
      minContentHeight?: number
      minContentWidth?: number
      overlayScrolling?: boolean
      propagateNaturalHeight?: boolean
      propagateNaturalWidth?: boolean
      vadjustment?: any
      vscrollbarPolicy?: any
      windowPlacement?: any
      accessibleRole?: any
      onEdgeOvershot?: () => void
      onEdgeReached?: () => void
      onMoveFocusOut?: () => void
      onScrollChild?: () => void
    }
    SearchBar: {
      ref?: React.Ref<any>
      children?: JSX.Element
      keyCaptureWidget?: JSX.Element | null
      searchModeEnabled?: boolean
      showCloseButton?: boolean
      accessibleRole?: any
    }
    SearchEntry: {
      ref?: React.Ref<any>
      activatesDefault?: boolean
      placeholderText?: string
      searchDelay?: number
      accessibleRole?: any
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
    Separator: {
      ref?: React.Ref<any>
      accessibleRole?: any
      orientation?: any
    }
    ShortcutLabel: {
      ref?: React.Ref<any>
      accelerator?: string
      disabledText?: string
      accessibleRole?: any
    }
    ShortcutsGroup: JSX.IntrinsicElements["Box"] & {
      ref?: React.Ref<any>
      accelSizeGroup?: any
      height?: number
      title?: string
      titleSizeGroup?: any
      view?: string
      accessibleRole?: any
      orientation?: any
    }
    ShortcutsSection: JSX.IntrinsicElements["Box"] & {
      ref?: React.Ref<any>
      maxHeight?: number
      sectionName?: string
      title?: string
      viewName?: string
      accessibleRole?: any
      orientation?: any
      onChangeCurrentPage?: () => void
    }
    ShortcutsShortcut: {
      ref?: React.Ref<any>
      accelSizeGroup?: any
      accelerator?: string
      actionName?: string
      direction?: any
      icon?: any
      iconSet?: boolean
      shortcutType?: any
      subtitle?: string
      subtitleSet?: boolean
      title?: string
      titleSizeGroup?: any
      accessibleRole?: any
    }
    ShortcutsWindow: JSX.IntrinsicElements["Window"] & {
      ref?: React.Ref<any>
      sectionName?: string
      viewName?: string
      accessibleRole?: any
      onClose?: () => void
      onSearch?: () => void
    }
    SpinButton: {
      ref?: React.Ref<any>
      adjustment?: any
      climbRate?: number
      digits?: number
      numeric?: boolean
      snapToTicks?: boolean
      updatePolicy?: any
      value?: number
      wrap?: boolean
      accessibleRole?: any
      editingCanceled?: boolean
      cursorPosition?: number
      editable?: boolean
      enableUndo?: boolean
      maxWidthChars?: number
      selectionBound?: number
      text?: string
      widthChars?: number
      xalign?: number
      orientation?: any
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
    Spinner: {
      ref?: React.Ref<any>
      spinning?: boolean
      accessibleRole?: any
    }
    Stack: {
      ref?: React.Ref<any>
      hhomogeneous?: boolean
      interpolateSize?: boolean
      pages?: any
      transitionDuration?: number
      transitionRunning?: boolean
      transitionType?: any
      vhomogeneous?: boolean
      visibleChild?: JSX.Element | null
      visibleChildName?: string
      accessibleRole?: any
    }
    StackSidebar: {
      ref?: React.Ref<any>
      stack?: any
      accessibleRole?: any
    }
    StackSwitcher: {
      ref?: React.Ref<any>
      stack?: any
      accessibleRole?: any
      orientation?: any
    }
    Statusbar: {
      ref?: React.Ref<any>
      accessibleRole?: any
      onTextPopped?: () => void
      onTextPushed?: () => void
    }
    Switch: {
      ref?: React.Ref<any>
      active?: boolean
      state?: boolean
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onActivate?: () => void
      onStateSet?: () => void
    }
    Text: {
      ref?: React.Ref<any>
      activatesDefault?: boolean
      attributes?: any
      buffer?: any
      enableEmojiCompletion?: boolean
      extraMenu?: any
      imModule?: string
      inputHints?: any
      inputPurpose?: any
      invisibleChar?: number
      invisibleCharSet?: boolean
      maxLength?: number
      overwriteMode?: boolean
      placeholderText?: string
      propagateTextWidth?: boolean
      scrollOffset?: number
      tabs?: any
      truncateMultiline?: boolean
      visibility?: boolean
      accessibleRole?: any
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
    TextView: {
      ref?: React.Ref<any>
      acceptsTab?: boolean
      bottomMargin?: number
      buffer?: any
      cursorVisible?: boolean
      editable?: boolean
      extraMenu?: any
      imModule?: string
      indent?: number
      inputHints?: any
      inputPurpose?: any
      justification?: any
      leftMargin?: number
      monospace?: boolean
      overwrite?: boolean
      pixelsAboveLines?: number
      pixelsBelowLines?: number
      pixelsInsideWrap?: number
      rightMargin?: number
      tabs?: any
      topMargin?: number
      wrapMode?: any
      accessibleRole?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
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
      ref?: React.Ref<any>
      active?: boolean
      group?: any
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onToggled?: () => void
    }
    TreeExpander: {
      ref?: React.Ref<any>
      children?: JSX.Element
      hideExpander?: boolean
      indentForDepth?: boolean
      indentForIcon?: boolean
      item?: any
      listRow?: any
      accessibleRole?: any
    }
    TreeView: {
      ref?: React.Ref<any>
      activateOnSingleClick?: boolean
      enableGridLines?: any
      enableSearch?: boolean
      enableTreeLines?: boolean
      expanderColumn?: any
      fixedHeightMode?: boolean
      headersClickable?: boolean
      headersVisible?: boolean
      hoverExpand?: boolean
      hoverSelection?: boolean
      levelIndentation?: number
      model?: any
      reorderable?: boolean
      rubberBanding?: boolean
      searchColumn?: number
      showExpanders?: boolean
      tooltipColumn?: number
      accessibleRole?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
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
    Video: {
      ref?: React.Ref<any>
      autoplay?: boolean
      file?: any
      loop?: boolean
      mediaStream?: any
      accessibleRole?: any
    }
    Viewport: {
      ref?: React.Ref<any>
      children?: JSX.Element
      scrollToFocus?: boolean
      accessibleRole?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
    }
    VolumeButton: JSX.IntrinsicElements["ScaleButton"] & {
      ref?: React.Ref<any>
      useSymbolic?: boolean
      accessibleRole?: any
      orientation?: any
    }
    Window: {
      ref?: React.Ref<any>
      children?: JSX.Element
      application?: any
      decorated?: boolean
      defaultHeight?: number
      defaultWidget?: JSX.Element | null
      defaultWidth?: number
      deletable?: boolean
      destroyWithParent?: boolean
      display?: any
      focusVisible?: boolean
      focusWidget?: JSX.Element | null
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
      titlebar?: JSX.Element | null
      transientFor?: any
      accessibleRole?: any
      onActivateDefault?: () => void
      onActivateFocus?: () => void
      onCloseRequest?: () => void
      onEnableDebugging?: () => void
      onKeysChanged?: () => void
    }
    WindowControls: {
      ref?: React.Ref<any>
      decorationLayout?: string
      empty?: boolean
      side?: any
      accessibleRole?: any
    }
    WindowHandle: {
      ref?: React.Ref<any>
      children?: JSX.Element
      accessibleRole?: any
    }
  }
}
