declare namespace JSX {
  interface IntrinsicElements {
    AboutDialog: JSX.IntrinsicElements["Window"] & {
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
    ActionBar: JSX.IntrinsicElements["Widget"] & {
      revealed?: boolean
      accessibleRole?: any
    }
    AppChooserButton: JSX.IntrinsicElements["Widget"] & {
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
      gfile?: any
      heading?: string
      accessibleRole?: any
      contentType?: string
    }
    AppChooserWidget: JSX.IntrinsicElements["Widget"] & {
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
      showMenubar?: boolean
      accessibleRole?: any
    }
    AspectFrame: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      obeyChild?: boolean
      ratio?: number
      xalign?: number
      yalign?: number
      accessibleRole?: any
    }
    Assistant: JSX.IntrinsicElements["Window"] & {
      pages?: any
      useHeaderBar?: number
      accessibleRole?: any
      onApply?: () => void
      onCancel?: () => void
      onClose?: () => void
      onEscape?: () => void
      onPrepare?: () => void
    }
    Box: JSX.IntrinsicElements["Widget"] & {
      children?: React.ReactNode
      baselineChild?: number
      baselinePosition?: any
      homogeneous?: boolean
      spacing?: number
      accessibleRole?: any
      orientation?: any
    }
    Button: JSX.IntrinsicElements["Widget"] & {
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
    Calendar: JSX.IntrinsicElements["Widget"] & {
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
    CellView: JSX.IntrinsicElements["Widget"] & {
      cellArea?: any
      cellAreaContext?: any
      drawSensitive?: boolean
      fitModel?: boolean
      model?: any
      accessibleRole?: any
      orientation?: any
    }
    CenterBox: JSX.IntrinsicElements["Widget"] & {
      baselinePosition?: any
      centerWidget?: JSX.Element | null
      endWidget?: JSX.Element | null
      shrinkCenterLast?: boolean
      startWidget?: JSX.Element | null
      accessibleRole?: any
      orientation?: any
    }
    CheckButton: JSX.IntrinsicElements["Widget"] & {
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
    ColorButton: JSX.IntrinsicElements["Widget"] & {
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
      showEditor?: boolean
      accessibleRole?: any
      rgba?: any
      useAlpha?: boolean
      onColorActivated?: () => void
    }
    ColorChooserWidget: JSX.IntrinsicElements["Widget"] & {
      showEditor?: boolean
      accessibleRole?: any
      rgba?: any
      useAlpha?: boolean
      onColorActivated?: () => void
    }
    ColorDialogButton: JSX.IntrinsicElements["Widget"] & {
      dialog?: any
      rgba?: any
      accessibleRole?: any
    }
    ColumnView: JSX.IntrinsicElements["Widget"] & {
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
    ComboBox: JSX.IntrinsicElements["Widget"] & {
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
      accessibleRole?: any
      editingCanceled?: boolean
      onEditingDone?: () => void
      onRemoveWidget?: () => void
    }
    Dialog: JSX.IntrinsicElements["Window"] & {
      useHeaderBar?: number
      accessibleRole?: any
      onClose?: () => void
      onResponse?: () => void
    }
    DragIcon: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      accessibleRole?: any
    }
    DrawingArea: JSX.IntrinsicElements["Widget"] & {
      contentHeight?: number
      contentWidth?: number
      accessibleRole?: any
      onResize?: () => void
    }
    DropDown: JSX.IntrinsicElements["Widget"] & {
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
    EditableLabel: JSX.IntrinsicElements["Widget"] & {
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
      accessibleRole?: any
      onEmojiPicked?: () => void
    }
    Entry: JSX.IntrinsicElements["Widget"] & {
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
    Expander: JSX.IntrinsicElements["Widget"] & {
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
      accessibleRole?: any
      action?: any
      createFolders?: boolean
      filter?: any
      filters?: any
      selectMultiple?: boolean
      shortcutFolders?: any
    }
    FileChooserWidget: JSX.IntrinsicElements["Widget"] & {
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
    Fixed: JSX.IntrinsicElements["Widget"] & {
      accessibleRole?: any
    }
    FlowBox: JSX.IntrinsicElements["Widget"] & {
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
    FlowBoxChild: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      accessibleRole?: any
      onActivate?: () => void
    }
    FontButton: JSX.IntrinsicElements["Widget"] & {
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
    FontChooserWidget: JSX.IntrinsicElements["Widget"] & {
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
    FontDialogButton: JSX.IntrinsicElements["Widget"] & {
      dialog?: any
      fontDesc?: any
      fontFeatures?: string
      language?: any
      level?: any
      useFont?: boolean
      useSize?: boolean
      accessibleRole?: any
    }
    Frame: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      label?: string
      labelWidget?: JSX.Element | null
      labelXalign?: number
      accessibleRole?: any
    }
    GLArea: JSX.IntrinsicElements["Widget"] & {
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
    Grid: JSX.IntrinsicElements["Widget"] & {
      baselineRow?: number
      columnHomogeneous?: boolean
      columnSpacing?: number
      rowHomogeneous?: boolean
      rowSpacing?: number
      accessibleRole?: any
      orientation?: any
    }
    GridView: JSX.IntrinsicElements["ListBase"] & {
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
    HeaderBar: JSX.IntrinsicElements["Widget"] & {
      decorationLayout?: string
      showTitleButtons?: boolean
      titleWidget?: JSX.Element | null
      accessibleRole?: any
    }
    IconView: JSX.IntrinsicElements["Widget"] & {
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
    Image: JSX.IntrinsicElements["Widget"] & {
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
    InfoBar: JSX.IntrinsicElements["Widget"] & {
      messageType?: any
      revealed?: boolean
      showCloseButton?: boolean
      accessibleRole?: any
      onClose?: () => void
      onResponse?: () => void
    }
    Inscription: JSX.IntrinsicElements["Widget"] & {
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
    Label: JSX.IntrinsicElements["Widget"] & {
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
    LevelBar: JSX.IntrinsicElements["Widget"] & {
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
      uri?: string
      visited?: boolean
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onActivateLink?: () => void
    }
    ListBase: JSX.IntrinsicElements["Widget"] & {
      orientation?: any
      accessibleRole?: any
      orientation?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
    }
    ListBox: JSX.IntrinsicElements["Widget"] & {
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
    ListBoxRow: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      activatable?: boolean
      selectable?: boolean
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onActivate?: () => void
    }
    ListView: JSX.IntrinsicElements["ListBase"] & {
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
    MediaControls: JSX.IntrinsicElements["Widget"] & {
      mediaStream?: any
      accessibleRole?: any
    }
    MenuButton: JSX.IntrinsicElements["Widget"] & {
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
      buttons?: any
      messageArea?: JSX.Element | null
      messageType?: any
      secondaryText?: string
      secondaryUseMarkup?: boolean
      text?: string
      useMarkup?: boolean
      accessibleRole?: any
    }
    Notebook: JSX.IntrinsicElements["Widget"] & {
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
    Overlay: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      accessibleRole?: any
      onGetChildPosition?: () => void
    }
    PageSetupUnixDialog: JSX.IntrinsicElements["Dialog"] & {
      accessibleRole?: any
    }
    Paned: JSX.IntrinsicElements["Widget"] & {
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
    PasswordEntry: JSX.IntrinsicElements["Widget"] & {
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
    Picture: JSX.IntrinsicElements["Widget"] & {
      alternativeText?: string
      canShrink?: boolean
      contentFit?: any
      file?: any
      keepAspectRatio?: boolean
      paintable?: any
      accessibleRole?: any
    }
    Popover: JSX.IntrinsicElements["Widget"] & {
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
      menuModel?: any
      visibleSubmenu?: string
      accessibleRole?: any
    }
    PopoverMenuBar: JSX.IntrinsicElements["Widget"] & {
      menuModel?: any
      accessibleRole?: any
    }
    PrintUnixDialog: JSX.IntrinsicElements["Dialog"] & {
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
    ProgressBar: JSX.IntrinsicElements["Widget"] & {
      ellipsize?: any
      fraction?: number
      inverted?: boolean
      pulseStep?: number
      showText?: boolean
      text?: string
      accessibleRole?: any
      orientation?: any
    }
    Range: JSX.IntrinsicElements["Widget"] & {
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
    Revealer: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      childRevealed?: boolean
      revealChild?: boolean
      transitionDuration?: number
      transitionType?: any
      accessibleRole?: any
    }
    Scale: JSX.IntrinsicElements["Range"] & {
      digits?: number
      drawValue?: boolean
      hasOrigin?: boolean
      valuePos?: any
      accessibleRole?: any
      orientation?: any
    }
    ScaleButton: JSX.IntrinsicElements["Widget"] & {
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
    Scrollbar: JSX.IntrinsicElements["Widget"] & {
      adjustment?: any
      accessibleRole?: any
      orientation?: any
    }
    ScrolledWindow: JSX.IntrinsicElements["Widget"] & {
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
    SearchBar: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      keyCaptureWidget?: JSX.Element | null
      searchModeEnabled?: boolean
      showCloseButton?: boolean
      accessibleRole?: any
    }
    SearchEntry: JSX.IntrinsicElements["Widget"] & {
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
    Separator: JSX.IntrinsicElements["Widget"] & {
      accessibleRole?: any
      orientation?: any
    }
    ShortcutLabel: JSX.IntrinsicElements["Widget"] & {
      accelerator?: string
      disabledText?: string
      accessibleRole?: any
    }
    ShortcutsGroup: JSX.IntrinsicElements["Box"] & {
      accelSizeGroup?: any
      height?: number
      title?: string
      titleSizeGroup?: any
      view?: string
      accessibleRole?: any
      orientation?: any
    }
    ShortcutsSection: JSX.IntrinsicElements["Box"] & {
      maxHeight?: number
      sectionName?: string
      title?: string
      viewName?: string
      accessibleRole?: any
      orientation?: any
      onChangeCurrentPage?: () => void
    }
    ShortcutsShortcut: JSX.IntrinsicElements["Widget"] & {
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
      sectionName?: string
      viewName?: string
      accessibleRole?: any
      onClose?: () => void
      onSearch?: () => void
    }
    SpinButton: JSX.IntrinsicElements["Widget"] & {
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
    Spinner: JSX.IntrinsicElements["Widget"] & {
      spinning?: boolean
      accessibleRole?: any
    }
    Stack: JSX.IntrinsicElements["Widget"] & {
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
    StackSidebar: JSX.IntrinsicElements["Widget"] & {
      stack?: any
      accessibleRole?: any
    }
    StackSwitcher: JSX.IntrinsicElements["Widget"] & {
      stack?: any
      accessibleRole?: any
      orientation?: any
    }
    Statusbar: JSX.IntrinsicElements["Widget"] & {
      accessibleRole?: any
      onTextPopped?: () => void
      onTextPushed?: () => void
    }
    Switch: JSX.IntrinsicElements["Widget"] & {
      active?: boolean
      state?: boolean
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onActivate?: () => void
      onStateSet?: () => void
    }
    Text: JSX.IntrinsicElements["Widget"] & {
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
    TextView: JSX.IntrinsicElements["Widget"] & {
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
      active?: boolean
      group?: any
      accessibleRole?: any
      actionName?: string
      actionTarget?: any
      onToggled?: () => void
    }
    TreeExpander: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      hideExpander?: boolean
      indentForDepth?: boolean
      indentForIcon?: boolean
      item?: any
      listRow?: any
      accessibleRole?: any
    }
    TreeView: JSX.IntrinsicElements["Widget"] & {
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
    Video: JSX.IntrinsicElements["Widget"] & {
      autoplay?: boolean
      file?: any
      loop?: boolean
      mediaStream?: any
      accessibleRole?: any
    }
    Viewport: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      scrollToFocus?: boolean
      accessibleRole?: any
      hadjustment?: any
      hscrollPolicy?: any
      vadjustment?: any
      vscrollPolicy?: any
    }
    VolumeButton: JSX.IntrinsicElements["ScaleButton"] & {
      useSymbolic?: boolean
      accessibleRole?: any
      orientation?: any
    }
    Widget: {
      ref?: React.Ref<any>
      canFocus?: boolean
      canTarget?: boolean
      cssClasses?: string[]
      cssName?: string
      cursor?: any
      focusOnClick?: boolean
      focusable?: boolean
      halign?: any
      hasDefault?: boolean
      hasFocus?: boolean
      hasTooltip?: boolean
      heightRequest?: number
      hexpand?: boolean
      hexpandSet?: boolean
      layoutManager?: any
      marginBottom?: number
      marginEnd?: number
      marginStart?: number
      marginTop?: number
      name?: string
      opacity?: number
      overflow?: any
      parent?: JSX.Element | null
      receivesDefault?: boolean
      root?: any
      scaleFactor?: number
      sensitive?: boolean
      tooltipMarkup?: string
      tooltipText?: string
      valign?: any
      vexpand?: boolean
      vexpandSet?: boolean
      visible?: boolean
      widthRequest?: number
      accessibleRole?: any
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
    WindowControls: JSX.IntrinsicElements["Widget"] & {
      decorationLayout?: string
      empty?: boolean
      side?: any
      accessibleRole?: any
    }
    WindowHandle: JSX.IntrinsicElements["Widget"] & {
      children?: JSX.Element
      accessibleRole?: any
    }
  }
}
