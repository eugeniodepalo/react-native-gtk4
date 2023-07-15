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
        onNotifyArtists?: (node: Gtk.AboutDialog, artists: string[]) => void
        onNotifyAuthors?: (node: Gtk.AboutDialog, authors: string[]) => void
        onNotifyComments?: (node: Gtk.AboutDialog, comments: string) => void
        onNotifyCopyright?: (node: Gtk.AboutDialog, copyright: string) => void
        onNotifyDocumenters?: (
          node: Gtk.AboutDialog,
          documenters: string[]
        ) => void
        onNotifyLicense?: (node: Gtk.AboutDialog, license: string) => void
        onNotifyLicenseType?: (
          node: Gtk.AboutDialog,
          licenseType: Gtk.License
        ) => void
        onNotifyLogo?: (node: Gtk.AboutDialog, logo: Gdk.Paintable) => void
        onNotifyLogoIconName?: (
          node: Gtk.AboutDialog,
          logoIconName: string
        ) => void
        onNotifyProgramName?: (
          node: Gtk.AboutDialog,
          programName: string
        ) => void
        onNotifySystemInformation?: (
          node: Gtk.AboutDialog,
          systemInformation: string
        ) => void
        onNotifyTranslatorCredits?: (
          node: Gtk.AboutDialog,
          translatorCredits: string
        ) => void
        onNotifyVersion?: (node: Gtk.AboutDialog, version: string) => void
        onNotifyWebsite?: (node: Gtk.AboutDialog, website: string) => void
        onNotifyWebsiteLabel?: (
          node: Gtk.AboutDialog,
          websiteLabel: string
        ) => void
        onNotifyWrapLicense?: (
          node: Gtk.AboutDialog,
          wrapLicense: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.AboutDialog,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      ActionBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ActionBar>
        revealed?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyRevealed?: (node: Gtk.ActionBar, revealed: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ActionBar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      ApplicationWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ApplicationWindow>
        application?: Gtk.Application
        showMenubar?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyShowMenubar?: (
          node: Gtk.ApplicationWindow,
          showMenubar: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ApplicationWindow,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      AspectFrame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AspectFrame>
        xalign?: number
        yalign?: number
        ratio?: number
        obeyChild?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyObeyChild?: (node: Gtk.AspectFrame, obeyChild: boolean) => void
        onNotifyRatio?: (node: Gtk.AspectFrame, ratio: number) => void
        onNotifyXalign?: (node: Gtk.AspectFrame, xalign: number) => void
        onNotifyYalign?: (node: Gtk.AspectFrame, yalign: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.AspectFrame,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      Box: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Box>
        orientation?: Gtk.Orientation
        spacing?: number
        baselinePosition?: Gtk.BaselinePosition
        homogeneous?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyBaselinePosition?: (
          node: Gtk.Box,
          baselinePosition: Gtk.BaselinePosition
        ) => void
        onNotifyHomogeneous?: (node: Gtk.Box, homogeneous: boolean) => void
        onNotifySpacing?: (node: Gtk.Box, spacing: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Box,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.Box,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyHasFrame?: (node: Gtk.Button, hasFrame: boolean) => void
        onNotifyIconName?: (node: Gtk.Button, iconName: string) => void
        onNotifyLabel?: (node: Gtk.Button, label: string) => void
        onNotifyUseUnderline?: (node: Gtk.Button, useUnderline: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Button,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyActionName?: (node: Gtk.Button, actionName: string) => void
        onNotifyActionTarget?: (
          node: Gtk.Button,
          actionTarget: GLib.Variant
        ) => void
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
        onNotifyDay?: (node: Gtk.Calendar, day: number) => void
        onNotifyMonth?: (node: Gtk.Calendar, month: number) => void
        onNotifyShowDayNames?: (
          node: Gtk.Calendar,
          showDayNames: boolean
        ) => void
        onNotifyShowHeading?: (node: Gtk.Calendar, showHeading: boolean) => void
        onNotifyShowWeekNumbers?: (
          node: Gtk.Calendar,
          showWeekNumbers: boolean
        ) => void
        onNotifyYear?: (node: Gtk.Calendar, year: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Calendar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      CenterBox: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CenterBox>
        baselinePosition?: Gtk.BaselinePosition
        centerWidget?: Gtk.Widget
        endWidget?: Gtk.Widget
        startWidget?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyBaselinePosition?: (
          node: Gtk.CenterBox,
          baselinePosition: Gtk.BaselinePosition
        ) => void
        onNotifyCenterWidget?: (
          node: Gtk.CenterBox,
          centerWidget: Gtk.Widget
        ) => void
        onNotifyEndWidget?: (node: Gtk.CenterBox, endWidget: Gtk.Widget) => void
        onNotifyStartWidget?: (
          node: Gtk.CenterBox,
          startWidget: Gtk.Widget
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.CenterBox,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.CenterBox,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyActive?: (node: Gtk.CheckButton, active: boolean) => void
        onNotifyGroup?: (node: Gtk.CheckButton, group: Gtk.CheckButton) => void
        onNotifyInconsistent?: (
          node: Gtk.CheckButton,
          inconsistent: boolean
        ) => void
        onNotifyLabel?: (node: Gtk.CheckButton, label: string) => void
        onNotifyUseUnderline?: (
          node: Gtk.CheckButton,
          useUnderline: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.CheckButton,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyActionName?: (node: Gtk.CheckButton, actionName: string) => void
        onNotifyActionTarget?: (
          node: Gtk.CheckButton,
          actionTarget: GLib.Variant
        ) => void
      }
      ColorDialogButton: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorDialogButton>
        dialog?: Gtk.ColorDialog
        rgba?: Gdk.RGBA
        accessibleRole?: Gtk.AccessibleRole
        onNotifyDialog?: (
          node: Gtk.ColorDialogButton,
          dialog: Gtk.ColorDialog
        ) => void
        onNotifyRgba?: (node: Gtk.ColorDialogButton, rgba: Gdk.RGBA) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ColorDialogButton,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyColumns?: (node: Gtk.ColumnView, columns: Gio.ListModel) => void
        onNotifyEnableRubberband?: (
          node: Gtk.ColumnView,
          enableRubberband: boolean
        ) => void
        onNotifyModel?: (
          node: Gtk.ColumnView,
          model: Gtk.SelectionModel
        ) => void
        onNotifyReorderable?: (
          node: Gtk.ColumnView,
          reorderable: boolean
        ) => void
        onNotifyShowColumnSeparators?: (
          node: Gtk.ColumnView,
          showColumnSeparators: boolean
        ) => void
        onNotifyShowRowSeparators?: (
          node: Gtk.ColumnView,
          showRowSeparators: boolean
        ) => void
        onNotifySingleClickActivate?: (
          node: Gtk.ColumnView,
          singleClickActivate: boolean
        ) => void
        onNotifySorter?: (node: Gtk.ColumnView, sorter: Gtk.Sorter) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ColumnView,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyHadjustment?: (
          node: Gtk.ColumnView,
          hadjustment: Gtk.Adjustment
        ) => void
        onNotifyHscrollPolicy?: (
          node: Gtk.ColumnView,
          hscrollPolicy: Gtk.ScrollablePolicy
        ) => void
        onNotifyVadjustment?: (
          node: Gtk.ColumnView,
          vadjustment: Gtk.Adjustment
        ) => void
        onNotifyVscrollPolicy?: (
          node: Gtk.ColumnView,
          vscrollPolicy: Gtk.ScrollablePolicy
        ) => void
      }
      DragIcon: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DragIcon>
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccessibleRole?: (
          node: Gtk.DragIcon,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyContentHeight?: (
          node: Gtk.DrawingArea,
          contentHeight: number
        ) => void
        onNotifyContentWidth?: (
          node: Gtk.DrawingArea,
          contentWidth: number
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.DrawingArea,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyEnableSearch?: (
          node: Gtk.DropDown,
          enableSearch: boolean
        ) => void
        onNotifyExpression?: (
          node: Gtk.DropDown,
          expression: Gtk.Expression
        ) => void
        onNotifyFactory?: (
          node: Gtk.DropDown,
          factory: Gtk.ListItemFactory
        ) => void
        onNotifyListFactory?: (
          node: Gtk.DropDown,
          listFactory: Gtk.ListItemFactory
        ) => void
        onNotifyModel?: (node: Gtk.DropDown, model: Gio.ListModel) => void
        onNotifySelected?: (node: Gtk.DropDown, selected: number) => void
        onNotifySelectedItem?: (node: Gtk.DropDown, selectedItem: any) => void
        onNotifyShowArrow?: (node: Gtk.DropDown, showArrow: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.DropDown,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyEditing?: (node: Gtk.EditableLabel, editing: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.EditableLabel,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyCursorPosition?: (
          node: Gtk.EditableLabel,
          cursorPosition: number
        ) => void
        onNotifyEditable?: (node: Gtk.EditableLabel, editable: boolean) => void
        onNotifyEnableUndo?: (
          node: Gtk.EditableLabel,
          enableUndo: boolean
        ) => void
        onNotifyMaxWidthChars?: (
          node: Gtk.EditableLabel,
          maxWidthChars: number
        ) => void
        onNotifySelectionBound?: (
          node: Gtk.EditableLabel,
          selectionBound: number
        ) => void
        onNotifyText?: (node: Gtk.EditableLabel, text: string) => void
        onNotifyWidthChars?: (
          node: Gtk.EditableLabel,
          widthChars: number
        ) => void
        onNotifyXalign?: (node: Gtk.EditableLabel, xalign: number) => void
      }
      EmojiChooser: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.EmojiChooser>
        accessibleRole?: Gtk.AccessibleRole
        onEmojiPicked?: (node: Gtk.EmojiChooser, text: string) => boolean
        onNotifyAccessibleRole?: (
          node: Gtk.EmojiChooser,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyActivatesDefault?: (
          node: Gtk.Entry,
          activatesDefault: boolean
        ) => void
        onNotifyAttributes?: (
          node: Gtk.Entry,
          attributes: Pango.AttrList
        ) => void
        onNotifyBuffer?: (node: Gtk.Entry, buffer: Gtk.EntryBuffer) => void
        onNotifyCompletion?: (
          node: Gtk.Entry,
          completion: Gtk.EntryCompletion
        ) => void
        onNotifyEnableEmojiCompletion?: (
          node: Gtk.Entry,
          enableEmojiCompletion: boolean
        ) => void
        onNotifyExtraMenu?: (node: Gtk.Entry, extraMenu: Gio.MenuModel) => void
        onNotifyHasFrame?: (node: Gtk.Entry, hasFrame: boolean) => void
        onNotifyImModule?: (node: Gtk.Entry, imModule: string) => void
        onNotifyInputHints?: (
          node: Gtk.Entry,
          inputHints: Gtk.InputHints
        ) => void
        onNotifyInputPurpose?: (
          node: Gtk.Entry,
          inputPurpose: Gtk.InputPurpose
        ) => void
        onNotifyInvisibleChar?: (node: Gtk.Entry, invisibleChar: number) => void
        onNotifyInvisibleCharSet?: (
          node: Gtk.Entry,
          invisibleCharSet: boolean
        ) => void
        onNotifyMaxLength?: (node: Gtk.Entry, maxLength: number) => void
        onNotifyOverwriteMode?: (
          node: Gtk.Entry,
          overwriteMode: boolean
        ) => void
        onNotifyPlaceholderText?: (
          node: Gtk.Entry,
          placeholderText: string
        ) => void
        onNotifyPrimaryIconActivatable?: (
          node: Gtk.Entry,
          primaryIconActivatable: boolean
        ) => void
        onNotifyPrimaryIconGicon?: (
          node: Gtk.Entry,
          primaryIconGicon: Gio.Icon
        ) => void
        onNotifyPrimaryIconName?: (
          node: Gtk.Entry,
          primaryIconName: string
        ) => void
        onNotifyPrimaryIconPaintable?: (
          node: Gtk.Entry,
          primaryIconPaintable: Gdk.Paintable
        ) => void
        onNotifyPrimaryIconSensitive?: (
          node: Gtk.Entry,
          primaryIconSensitive: boolean
        ) => void
        onNotifyPrimaryIconStorageType?: (
          node: Gtk.Entry,
          primaryIconStorageType: Gtk.ImageType
        ) => void
        onNotifyPrimaryIconTooltipMarkup?: (
          node: Gtk.Entry,
          primaryIconTooltipMarkup: string
        ) => void
        onNotifyPrimaryIconTooltipText?: (
          node: Gtk.Entry,
          primaryIconTooltipText: string
        ) => void
        onNotifyProgressFraction?: (
          node: Gtk.Entry,
          progressFraction: number
        ) => void
        onNotifyProgressPulseStep?: (
          node: Gtk.Entry,
          progressPulseStep: number
        ) => void
        onNotifyScrollOffset?: (node: Gtk.Entry, scrollOffset: number) => void
        onNotifySecondaryIconActivatable?: (
          node: Gtk.Entry,
          secondaryIconActivatable: boolean
        ) => void
        onNotifySecondaryIconGicon?: (
          node: Gtk.Entry,
          secondaryIconGicon: Gio.Icon
        ) => void
        onNotifySecondaryIconName?: (
          node: Gtk.Entry,
          secondaryIconName: string
        ) => void
        onNotifySecondaryIconPaintable?: (
          node: Gtk.Entry,
          secondaryIconPaintable: Gdk.Paintable
        ) => void
        onNotifySecondaryIconSensitive?: (
          node: Gtk.Entry,
          secondaryIconSensitive: boolean
        ) => void
        onNotifySecondaryIconStorageType?: (
          node: Gtk.Entry,
          secondaryIconStorageType: Gtk.ImageType
        ) => void
        onNotifySecondaryIconTooltipMarkup?: (
          node: Gtk.Entry,
          secondaryIconTooltipMarkup: string
        ) => void
        onNotifySecondaryIconTooltipText?: (
          node: Gtk.Entry,
          secondaryIconTooltipText: string
        ) => void
        onNotifyShowEmojiIcon?: (
          node: Gtk.Entry,
          showEmojiIcon: boolean
        ) => void
        onNotifyTabs?: (node: Gtk.Entry, tabs: Pango.TabArray) => void
        onNotifyTextLength?: (node: Gtk.Entry, textLength: number) => void
        onNotifyTruncateMultiline?: (
          node: Gtk.Entry,
          truncateMultiline: boolean
        ) => void
        onNotifyVisibility?: (node: Gtk.Entry, visibility: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Entry,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyEditingCanceled?: (
          node: Gtk.Entry,
          editingCanceled: boolean
        ) => void
        onNotifyCursorPosition?: (
          node: Gtk.Entry,
          cursorPosition: number
        ) => void
        onNotifyEditable?: (node: Gtk.Entry, editable: boolean) => void
        onNotifyEnableUndo?: (node: Gtk.Entry, enableUndo: boolean) => void
        onNotifyMaxWidthChars?: (node: Gtk.Entry, maxWidthChars: number) => void
        onNotifySelectionBound?: (
          node: Gtk.Entry,
          selectionBound: number
        ) => void
        onNotifyText?: (node: Gtk.Entry, text: string) => void
        onNotifyWidthChars?: (node: Gtk.Entry, widthChars: number) => void
        onNotifyXalign?: (node: Gtk.Entry, xalign: number) => void
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
        onNotifyExpanded?: (node: Gtk.Expander, expanded: boolean) => void
        onNotifyLabel?: (node: Gtk.Expander, label: string) => void
        onNotifyLabelWidget?: (
          node: Gtk.Expander,
          labelWidget: Gtk.Widget
        ) => void
        onNotifyResizeToplevel?: (
          node: Gtk.Expander,
          resizeToplevel: boolean
        ) => void
        onNotifyUseMarkup?: (node: Gtk.Expander, useMarkup: boolean) => void
        onNotifyUseUnderline?: (
          node: Gtk.Expander,
          useUnderline: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Expander,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      Fixed: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Fixed>
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccessibleRole?: (
          node: Gtk.Fixed,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyAcceptUnpairedRelease?: (
          node: Gtk.FlowBox,
          acceptUnpairedRelease: boolean
        ) => void
        onNotifyActivateOnSingleClick?: (
          node: Gtk.FlowBox,
          activateOnSingleClick: boolean
        ) => void
        onNotifyColumnSpacing?: (
          node: Gtk.FlowBox,
          columnSpacing: number
        ) => void
        onNotifyHomogeneous?: (node: Gtk.FlowBox, homogeneous: boolean) => void
        onNotifyMaxChildrenPerLine?: (
          node: Gtk.FlowBox,
          maxChildrenPerLine: number
        ) => void
        onNotifyMinChildrenPerLine?: (
          node: Gtk.FlowBox,
          minChildrenPerLine: number
        ) => void
        onNotifyRowSpacing?: (node: Gtk.FlowBox, rowSpacing: number) => void
        onNotifySelectionMode?: (
          node: Gtk.FlowBox,
          selectionMode: Gtk.SelectionMode
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.FlowBox,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.FlowBox,
          orientation: Gtk.Orientation
        ) => void
      }
      FlowBoxChild: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBoxChild>
        accessibleRole?: Gtk.AccessibleRole
        onActivate?: (node: Gtk.FlowBoxChild) => boolean
        onNotifyAccessibleRole?: (
          node: Gtk.FlowBoxChild,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyDialog?: (
          node: Gtk.FontDialogButton,
          dialog: Gtk.FontDialog
        ) => void
        onNotifyFontDesc?: (
          node: Gtk.FontDialogButton,
          fontDesc: Pango.FontDescription
        ) => void
        onNotifyFontFeatures?: (
          node: Gtk.FontDialogButton,
          fontFeatures: string
        ) => void
        onNotifyLanguage?: (
          node: Gtk.FontDialogButton,
          language: Pango.Language
        ) => void
        onNotifyLevel?: (
          node: Gtk.FontDialogButton,
          level: Gtk.FontLevel
        ) => void
        onNotifyUseFont?: (node: Gtk.FontDialogButton, useFont: boolean) => void
        onNotifyUseSize?: (node: Gtk.FontDialogButton, useSize: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.FontDialogButton,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      Frame: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Frame>
        label?: string
        labelWidget?: Gtk.Widget
        labelXalign?: number
        accessibleRole?: Gtk.AccessibleRole
        onNotifyLabel?: (node: Gtk.Frame, label: string) => void
        onNotifyLabelWidget?: (node: Gtk.Frame, labelWidget: Gtk.Widget) => void
        onNotifyLabelXalign?: (node: Gtk.Frame, labelXalign: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Frame,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyAutoRender?: (node: Gtk.GLArea, autoRender: boolean) => void
        onNotifyContext?: (node: Gtk.GLArea, context: Gdk.GLContext) => void
        onNotifyHasDepthBuffer?: (
          node: Gtk.GLArea,
          hasDepthBuffer: boolean
        ) => void
        onNotifyHasStencilBuffer?: (
          node: Gtk.GLArea,
          hasStencilBuffer: boolean
        ) => void
        onNotifyUseEs?: (node: Gtk.GLArea, useEs: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.GLArea,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyBaselineRow?: (node: Gtk.Grid, baselineRow: number) => void
        onNotifyColumnHomogeneous?: (
          node: Gtk.Grid,
          columnHomogeneous: boolean
        ) => void
        onNotifyColumnSpacing?: (node: Gtk.Grid, columnSpacing: number) => void
        onNotifyRowHomogeneous?: (
          node: Gtk.Grid,
          rowHomogeneous: boolean
        ) => void
        onNotifyRowSpacing?: (node: Gtk.Grid, rowSpacing: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Grid,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.Grid,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyEnableRubberband?: (
          node: Gtk.GridView,
          enableRubberband: boolean
        ) => void
        onNotifyFactory?: (
          node: Gtk.GridView,
          factory: Gtk.ListItemFactory
        ) => void
        onNotifyMaxColumns?: (node: Gtk.GridView, maxColumns: number) => void
        onNotifyMinColumns?: (node: Gtk.GridView, minColumns: number) => void
        onNotifyModel?: (node: Gtk.GridView, model: Gtk.SelectionModel) => void
        onNotifySingleClickActivate?: (
          node: Gtk.GridView,
          singleClickActivate: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.GridView,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.GridView,
          orientation: Gtk.Orientation
        ) => void
        onNotifyHadjustment?: (
          node: Gtk.GridView,
          hadjustment: Gtk.Adjustment
        ) => void
        onNotifyHscrollPolicy?: (
          node: Gtk.GridView,
          hscrollPolicy: Gtk.ScrollablePolicy
        ) => void
        onNotifyVadjustment?: (
          node: Gtk.GridView,
          vadjustment: Gtk.Adjustment
        ) => void
        onNotifyVscrollPolicy?: (
          node: Gtk.GridView,
          vscrollPolicy: Gtk.ScrollablePolicy
        ) => void
      }
      HeaderBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.HeaderBar>
        decorationLayout?: string
        showTitleButtons?: boolean
        titleWidget?: Gtk.Widget
        accessibleRole?: Gtk.AccessibleRole
        onNotifyDecorationLayout?: (
          node: Gtk.HeaderBar,
          decorationLayout: string
        ) => void
        onNotifyShowTitleButtons?: (
          node: Gtk.HeaderBar,
          showTitleButtons: boolean
        ) => void
        onNotifyTitleWidget?: (
          node: Gtk.HeaderBar,
          titleWidget: Gtk.Widget
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.HeaderBar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyFile?: (node: Gtk.Image, file: string) => void
        onNotifyGicon?: (node: Gtk.Image, gicon: Gio.Icon) => void
        onNotifyIconName?: (node: Gtk.Image, iconName: string) => void
        onNotifyIconSize?: (node: Gtk.Image, iconSize: Gtk.IconSize) => void
        onNotifyPaintable?: (node: Gtk.Image, paintable: Gdk.Paintable) => void
        onNotifyPixelSize?: (node: Gtk.Image, pixelSize: number) => void
        onNotifyResource?: (node: Gtk.Image, resource: string) => void
        onNotifyStorageType?: (
          node: Gtk.Image,
          storageType: Gtk.ImageType
        ) => void
        onNotifyUseFallback?: (node: Gtk.Image, useFallback: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Image,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyAttributes?: (
          node: Gtk.Inscription,
          attributes: Pango.AttrList
        ) => void
        onNotifyMarkup?: (node: Gtk.Inscription, markup: string) => void
        onNotifyMinChars?: (node: Gtk.Inscription, minChars: number) => void
        onNotifyMinLines?: (node: Gtk.Inscription, minLines: number) => void
        onNotifyNatChars?: (node: Gtk.Inscription, natChars: number) => void
        onNotifyNatLines?: (node: Gtk.Inscription, natLines: number) => void
        onNotifyText?: (node: Gtk.Inscription, text: string) => void
        onNotifyTextOverflow?: (
          node: Gtk.Inscription,
          textOverflow: Gtk.InscriptionOverflow
        ) => void
        onNotifyWrapMode?: (
          node: Gtk.Inscription,
          wrapMode: Pango.WrapMode
        ) => void
        onNotifyXalign?: (node: Gtk.Inscription, xalign: number) => void
        onNotifyYalign?: (node: Gtk.Inscription, yalign: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Inscription,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyAttributes?: (
          node: Gtk.Label,
          attributes: Pango.AttrList
        ) => void
        onNotifyEllipsize?: (
          node: Gtk.Label,
          ellipsize: Pango.EllipsizeMode
        ) => void
        onNotifyExtraMenu?: (node: Gtk.Label, extraMenu: Gio.MenuModel) => void
        onNotifyJustify?: (node: Gtk.Label, justify: Gtk.Justification) => void
        onNotifyLabel?: (node: Gtk.Label, label: string) => void
        onNotifyLines?: (node: Gtk.Label, lines: number) => void
        onNotifyMaxWidthChars?: (node: Gtk.Label, maxWidthChars: number) => void
        onNotifyMnemonicKeyval?: (
          node: Gtk.Label,
          mnemonicKeyval: number
        ) => void
        onNotifyMnemonicWidget?: (
          node: Gtk.Label,
          mnemonicWidget: Gtk.Widget
        ) => void
        onNotifyNaturalWrapMode?: (
          node: Gtk.Label,
          naturalWrapMode: Gtk.NaturalWrapMode
        ) => void
        onNotifySelectable?: (node: Gtk.Label, selectable: boolean) => void
        onNotifySingleLineMode?: (
          node: Gtk.Label,
          singleLineMode: boolean
        ) => void
        onNotifyTabs?: (node: Gtk.Label, tabs: Pango.TabArray) => void
        onNotifyUseMarkup?: (node: Gtk.Label, useMarkup: boolean) => void
        onNotifyUseUnderline?: (node: Gtk.Label, useUnderline: boolean) => void
        onNotifyWidthChars?: (node: Gtk.Label, widthChars: number) => void
        onNotifyWrap?: (node: Gtk.Label, wrap: boolean) => void
        onNotifyWrapMode?: (node: Gtk.Label, wrapMode: Pango.WrapMode) => void
        onNotifyXalign?: (node: Gtk.Label, xalign: number) => void
        onNotifyYalign?: (node: Gtk.Label, yalign: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Label,
          accessibleRole: Gtk.AccessibleRole
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
        onOffsetChanged?: (node: Gtk.LevelBar, name: string) => boolean
        onNotifyInverted?: (node: Gtk.LevelBar, inverted: boolean) => void
        onNotifyMaxValue?: (node: Gtk.LevelBar, maxValue: number) => void
        onNotifyMinValue?: (node: Gtk.LevelBar, minValue: number) => void
        onNotifyMode?: (node: Gtk.LevelBar, mode: Gtk.LevelBarMode) => void
        onNotifyValue?: (node: Gtk.LevelBar, value: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.LevelBar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.LevelBar,
          orientation: Gtk.Orientation
        ) => void
      }
      LinkButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LinkButton>
        uri?: string
        visited?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivateLink?: (node: Gtk.LinkButton) => boolean
        onNotifyUri?: (node: Gtk.LinkButton, uri: string) => void
        onNotifyVisited?: (node: Gtk.LinkButton, visited: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.LinkButton,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyActionName?: (node: Gtk.LinkButton, actionName: string) => void
        onNotifyActionTarget?: (
          node: Gtk.LinkButton,
          actionTarget: GLib.Variant
        ) => void
      }
      ListBase: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBase>
        orientation?: Gtk.Orientation
        accessibleRole?: Gtk.AccessibleRole
        hadjustment?: Gtk.Adjustment
        hscrollPolicy?: Gtk.ScrollablePolicy
        vadjustment?: Gtk.Adjustment
        vscrollPolicy?: Gtk.ScrollablePolicy
        onNotifyOrientation?: (
          node: Gtk.ListBase,
          orientation: Gtk.Orientation
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ListBase,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyHadjustment?: (
          node: Gtk.ListBase,
          hadjustment: Gtk.Adjustment
        ) => void
        onNotifyHscrollPolicy?: (
          node: Gtk.ListBase,
          hscrollPolicy: Gtk.ScrollablePolicy
        ) => void
        onNotifyVadjustment?: (
          node: Gtk.ListBase,
          vadjustment: Gtk.Adjustment
        ) => void
        onNotifyVscrollPolicy?: (
          node: Gtk.ListBase,
          vscrollPolicy: Gtk.ScrollablePolicy
        ) => void
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
        onNotifyAcceptUnpairedRelease?: (
          node: Gtk.ListBox,
          acceptUnpairedRelease: boolean
        ) => void
        onNotifyActivateOnSingleClick?: (
          node: Gtk.ListBox,
          activateOnSingleClick: boolean
        ) => void
        onNotifySelectionMode?: (
          node: Gtk.ListBox,
          selectionMode: Gtk.SelectionMode
        ) => void
        onNotifyShowSeparators?: (
          node: Gtk.ListBox,
          showSeparators: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ListBox,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      ListBoxRow: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBoxRow>
        activatable?: boolean
        selectable?: boolean
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onActivate?: (node: Gtk.ListBoxRow) => boolean
        onNotifyActivatable?: (
          node: Gtk.ListBoxRow,
          activatable: boolean
        ) => void
        onNotifySelectable?: (node: Gtk.ListBoxRow, selectable: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ListBoxRow,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyActionName?: (node: Gtk.ListBoxRow, actionName: string) => void
        onNotifyActionTarget?: (
          node: Gtk.ListBoxRow,
          actionTarget: GLib.Variant
        ) => void
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
        onNotifyEnableRubberband?: (
          node: Gtk.ListView,
          enableRubberband: boolean
        ) => void
        onNotifyFactory?: (
          node: Gtk.ListView,
          factory: Gtk.ListItemFactory
        ) => void
        onNotifyModel?: (node: Gtk.ListView, model: Gtk.SelectionModel) => void
        onNotifyShowSeparators?: (
          node: Gtk.ListView,
          showSeparators: boolean
        ) => void
        onNotifySingleClickActivate?: (
          node: Gtk.ListView,
          singleClickActivate: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ListView,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.ListView,
          orientation: Gtk.Orientation
        ) => void
        onNotifyHadjustment?: (
          node: Gtk.ListView,
          hadjustment: Gtk.Adjustment
        ) => void
        onNotifyHscrollPolicy?: (
          node: Gtk.ListView,
          hscrollPolicy: Gtk.ScrollablePolicy
        ) => void
        onNotifyVadjustment?: (
          node: Gtk.ListView,
          vadjustment: Gtk.Adjustment
        ) => void
        onNotifyVscrollPolicy?: (
          node: Gtk.ListView,
          vscrollPolicy: Gtk.ScrollablePolicy
        ) => void
      }
      MediaControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MediaControls>
        stream?: Gtk.MediaStream
        mediaStream?: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
        onNotifyMediaStream?: (
          node: Gtk.MediaControls,
          mediaStream: Gtk.MediaStream
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.MediaControls,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyActive?: (node: Gtk.MenuButton, active: boolean) => void
        onNotifyAlwaysShowArrow?: (
          node: Gtk.MenuButton,
          alwaysShowArrow: boolean
        ) => void
        onNotifyDirection?: (
          node: Gtk.MenuButton,
          direction: Gtk.ArrowType
        ) => void
        onNotifyHasFrame?: (node: Gtk.MenuButton, hasFrame: boolean) => void
        onNotifyIconName?: (node: Gtk.MenuButton, iconName: string) => void
        onNotifyLabel?: (node: Gtk.MenuButton, label: string) => void
        onNotifyMenuModel?: (
          node: Gtk.MenuButton,
          menuModel: Gio.MenuModel
        ) => void
        onNotifyPopover?: (node: Gtk.MenuButton, popover: Gtk.Popover) => void
        onNotifyPrimary?: (node: Gtk.MenuButton, primary: boolean) => void
        onNotifyUseUnderline?: (
          node: Gtk.MenuButton,
          useUnderline: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.MenuButton,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyEnablePopup?: (node: Gtk.Notebook, enablePopup: boolean) => void
        onNotifyGroupName?: (node: Gtk.Notebook, groupName: string) => void
        onNotifyPage?: (node: Gtk.Notebook, page: number) => void
        onNotifyPages?: (node: Gtk.Notebook, pages: Gio.ListModel) => void
        onNotifyScrollable?: (node: Gtk.Notebook, scrollable: boolean) => void
        onNotifyShowBorder?: (node: Gtk.Notebook, showBorder: boolean) => void
        onNotifyShowTabs?: (node: Gtk.Notebook, showTabs: boolean) => void
        onNotifyTabPos?: (node: Gtk.Notebook, tabPos: Gtk.PositionType) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Notebook,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      Overlay: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Overlay>
        accessibleRole?: Gtk.AccessibleRole
        onGetChildPosition?: (
          node: Gtk.Overlay,
          widget: Gtk.Widget,
          allocation: Gdk.Rectangle
        ) => boolean
        onNotifyAccessibleRole?: (
          node: Gtk.Overlay,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyEndChild?: (node: Gtk.Paned, endChild: Gtk.Widget) => void
        onNotifyMaxPosition?: (node: Gtk.Paned, maxPosition: number) => void
        onNotifyMinPosition?: (node: Gtk.Paned, minPosition: number) => void
        onNotifyPosition?: (node: Gtk.Paned, position: number) => void
        onNotifyPositionSet?: (node: Gtk.Paned, positionSet: boolean) => void
        onNotifyResizeEndChild?: (
          node: Gtk.Paned,
          resizeEndChild: boolean
        ) => void
        onNotifyResizeStartChild?: (
          node: Gtk.Paned,
          resizeStartChild: boolean
        ) => void
        onNotifyShrinkEndChild?: (
          node: Gtk.Paned,
          shrinkEndChild: boolean
        ) => void
        onNotifyShrinkStartChild?: (
          node: Gtk.Paned,
          shrinkStartChild: boolean
        ) => void
        onNotifyStartChild?: (node: Gtk.Paned, startChild: Gtk.Widget) => void
        onNotifyWideHandle?: (node: Gtk.Paned, wideHandle: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Paned,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.Paned,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyActivatesDefault?: (
          node: Gtk.PasswordEntry,
          activatesDefault: boolean
        ) => void
        onNotifyExtraMenu?: (
          node: Gtk.PasswordEntry,
          extraMenu: Gio.MenuModel
        ) => void
        onNotifyPlaceholderText?: (
          node: Gtk.PasswordEntry,
          placeholderText: string
        ) => void
        onNotifyShowPeekIcon?: (
          node: Gtk.PasswordEntry,
          showPeekIcon: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.PasswordEntry,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyCursorPosition?: (
          node: Gtk.PasswordEntry,
          cursorPosition: number
        ) => void
        onNotifyEditable?: (node: Gtk.PasswordEntry, editable: boolean) => void
        onNotifyEnableUndo?: (
          node: Gtk.PasswordEntry,
          enableUndo: boolean
        ) => void
        onNotifyMaxWidthChars?: (
          node: Gtk.PasswordEntry,
          maxWidthChars: number
        ) => void
        onNotifySelectionBound?: (
          node: Gtk.PasswordEntry,
          selectionBound: number
        ) => void
        onNotifyText?: (node: Gtk.PasswordEntry, text: string) => void
        onNotifyWidthChars?: (
          node: Gtk.PasswordEntry,
          widthChars: number
        ) => void
        onNotifyXalign?: (node: Gtk.PasswordEntry, xalign: number) => void
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
        onNotifyAlternativeText?: (
          node: Gtk.Picture,
          alternativeText: string
        ) => void
        onNotifyCanShrink?: (node: Gtk.Picture, canShrink: boolean) => void
        onNotifyContentFit?: (
          node: Gtk.Picture,
          contentFit: Gtk.ContentFit
        ) => void
        onNotifyFile?: (node: Gtk.Picture, file: Gio.File) => void
        onNotifyKeepAspectRatio?: (
          node: Gtk.Picture,
          keepAspectRatio: boolean
        ) => void
        onNotifyPaintable?: (
          node: Gtk.Picture,
          paintable: Gdk.Paintable
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Picture,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyAutohide?: (node: Gtk.Popover, autohide: boolean) => void
        onNotifyCascadePopdown?: (
          node: Gtk.Popover,
          cascadePopdown: boolean
        ) => void
        onNotifyDefaultWidget?: (
          node: Gtk.Popover,
          defaultWidget: Gtk.Widget
        ) => void
        onNotifyHasArrow?: (node: Gtk.Popover, hasArrow: boolean) => void
        onNotifyMnemonicsVisible?: (
          node: Gtk.Popover,
          mnemonicsVisible: boolean
        ) => void
        onNotifyPointingTo?: (
          node: Gtk.Popover,
          pointingTo: Gdk.Rectangle
        ) => void
        onNotifyPosition?: (
          node: Gtk.Popover,
          position: Gtk.PositionType
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Popover,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      PopoverMenu: JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.PopoverMenu>
        model?: Gio.MenuModel
        menuModel?: Gio.MenuModel
        visibleSubmenu?: string
        accessibleRole?: Gtk.AccessibleRole
        onNotifyMenuModel?: (
          node: Gtk.PopoverMenu,
          menuModel: Gio.MenuModel
        ) => void
        onNotifyVisibleSubmenu?: (
          node: Gtk.PopoverMenu,
          visibleSubmenu: string
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.PopoverMenu,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      PopoverMenuBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PopoverMenuBar>
        model?: Gio.MenuModel
        menuModel?: Gio.MenuModel
        accessibleRole?: Gtk.AccessibleRole
        onNotifyMenuModel?: (
          node: Gtk.PopoverMenuBar,
          menuModel: Gio.MenuModel
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.PopoverMenuBar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyEllipsize?: (
          node: Gtk.ProgressBar,
          ellipsize: Pango.EllipsizeMode
        ) => void
        onNotifyFraction?: (node: Gtk.ProgressBar, fraction: number) => void
        onNotifyInverted?: (node: Gtk.ProgressBar, inverted: boolean) => void
        onNotifyPulseStep?: (node: Gtk.ProgressBar, pulseStep: number) => void
        onNotifyShowText?: (node: Gtk.ProgressBar, showText: boolean) => void
        onNotifyText?: (node: Gtk.ProgressBar, text: string) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ProgressBar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.ProgressBar,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyAdjustment?: (
          node: Gtk.Range,
          adjustment: Gtk.Adjustment
        ) => void
        onNotifyFillLevel?: (node: Gtk.Range, fillLevel: number) => void
        onNotifyInverted?: (node: Gtk.Range, inverted: boolean) => void
        onNotifyRestrictToFillLevel?: (
          node: Gtk.Range,
          restrictToFillLevel: boolean
        ) => void
        onNotifyRoundDigits?: (node: Gtk.Range, roundDigits: number) => void
        onNotifyShowFillLevel?: (
          node: Gtk.Range,
          showFillLevel: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Range,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.Range,
          orientation: Gtk.Orientation
        ) => void
      }
      Revealer: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Revealer>
        childRevealed?: boolean
        revealChild?: boolean
        transitionDuration?: number
        transitionType?: Gtk.RevealerTransitionType
        accessibleRole?: Gtk.AccessibleRole
        onNotifyChildRevealed?: (
          node: Gtk.Revealer,
          childRevealed: boolean
        ) => void
        onNotifyRevealChild?: (node: Gtk.Revealer, revealChild: boolean) => void
        onNotifyTransitionDuration?: (
          node: Gtk.Revealer,
          transitionDuration: number
        ) => void
        onNotifyTransitionType?: (
          node: Gtk.Revealer,
          transitionType: Gtk.RevealerTransitionType
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Revealer,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyDigits?: (node: Gtk.Scale, digits: number) => void
        onNotifyDrawValue?: (node: Gtk.Scale, drawValue: boolean) => void
        onNotifyHasOrigin?: (node: Gtk.Scale, hasOrigin: boolean) => void
        onNotifyValuePos?: (node: Gtk.Scale, valuePos: Gtk.PositionType) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Scale,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.Scale,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyActive?: (node: Gtk.ScaleButton, active: boolean) => void
        onNotifyAdjustment?: (
          node: Gtk.ScaleButton,
          adjustment: Gtk.Adjustment
        ) => void
        onNotifyIcons?: (node: Gtk.ScaleButton, icons: string[]) => void
        onNotifyValue?: (node: Gtk.ScaleButton, value: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ScaleButton,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.ScaleButton,
          orientation: Gtk.Orientation
        ) => void
      }
      Scrollbar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Scrollbar>
        orientation?: Gtk.Orientation
        adjustment?: Gtk.Adjustment
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAdjustment?: (
          node: Gtk.Scrollbar,
          adjustment: Gtk.Adjustment
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Scrollbar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.Scrollbar,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyHadjustment?: (
          node: Gtk.ScrolledWindow,
          hadjustment: Gtk.Adjustment
        ) => void
        onNotifyHasFrame?: (node: Gtk.ScrolledWindow, hasFrame: boolean) => void
        onNotifyHscrollbarPolicy?: (
          node: Gtk.ScrolledWindow,
          hscrollbarPolicy: Gtk.PolicyType
        ) => void
        onNotifyKineticScrolling?: (
          node: Gtk.ScrolledWindow,
          kineticScrolling: boolean
        ) => void
        onNotifyMaxContentHeight?: (
          node: Gtk.ScrolledWindow,
          maxContentHeight: number
        ) => void
        onNotifyMaxContentWidth?: (
          node: Gtk.ScrolledWindow,
          maxContentWidth: number
        ) => void
        onNotifyMinContentHeight?: (
          node: Gtk.ScrolledWindow,
          minContentHeight: number
        ) => void
        onNotifyMinContentWidth?: (
          node: Gtk.ScrolledWindow,
          minContentWidth: number
        ) => void
        onNotifyOverlayScrolling?: (
          node: Gtk.ScrolledWindow,
          overlayScrolling: boolean
        ) => void
        onNotifyPropagateNaturalHeight?: (
          node: Gtk.ScrolledWindow,
          propagateNaturalHeight: boolean
        ) => void
        onNotifyPropagateNaturalWidth?: (
          node: Gtk.ScrolledWindow,
          propagateNaturalWidth: boolean
        ) => void
        onNotifyVadjustment?: (
          node: Gtk.ScrolledWindow,
          vadjustment: Gtk.Adjustment
        ) => void
        onNotifyVscrollbarPolicy?: (
          node: Gtk.ScrolledWindow,
          vscrollbarPolicy: Gtk.PolicyType
        ) => void
        onNotifyWindowPlacement?: (
          node: Gtk.ScrolledWindow,
          windowPlacement: Gtk.CornerType
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ScrolledWindow,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      SearchBar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchBar>
        keyCaptureWidget?: Gtk.Widget
        searchModeEnabled?: boolean
        showCloseButton?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyKeyCaptureWidget?: (
          node: Gtk.SearchBar,
          keyCaptureWidget: Gtk.Widget
        ) => void
        onNotifySearchModeEnabled?: (
          node: Gtk.SearchBar,
          searchModeEnabled: boolean
        ) => void
        onNotifyShowCloseButton?: (
          node: Gtk.SearchBar,
          showCloseButton: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.SearchBar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyActivatesDefault?: (
          node: Gtk.SearchEntry,
          activatesDefault: boolean
        ) => void
        onNotifyPlaceholderText?: (
          node: Gtk.SearchEntry,
          placeholderText: string
        ) => void
        onNotifySearchDelay?: (
          node: Gtk.SearchEntry,
          searchDelay: number
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.SearchEntry,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyCursorPosition?: (
          node: Gtk.SearchEntry,
          cursorPosition: number
        ) => void
        onNotifyEditable?: (node: Gtk.SearchEntry, editable: boolean) => void
        onNotifyEnableUndo?: (
          node: Gtk.SearchEntry,
          enableUndo: boolean
        ) => void
        onNotifyMaxWidthChars?: (
          node: Gtk.SearchEntry,
          maxWidthChars: number
        ) => void
        onNotifySelectionBound?: (
          node: Gtk.SearchEntry,
          selectionBound: number
        ) => void
        onNotifyText?: (node: Gtk.SearchEntry, text: string) => void
        onNotifyWidthChars?: (node: Gtk.SearchEntry, widthChars: number) => void
        onNotifyXalign?: (node: Gtk.SearchEntry, xalign: number) => void
      }
      Separator: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Separator>
        orientation?: Gtk.Orientation
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccessibleRole?: (
          node: Gtk.Separator,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.Separator,
          orientation: Gtk.Orientation
        ) => void
      }
      ShortcutLabel: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutLabel>
        accelerator?: string
        disabledText?: string
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccelerator?: (
          node: Gtk.ShortcutLabel,
          accelerator: string
        ) => void
        onNotifyDisabledText?: (
          node: Gtk.ShortcutLabel,
          disabledText: string
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ShortcutLabel,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyAccelSizeGroup?: (
          node: Gtk.ShortcutsGroup,
          accelSizeGroup: Gtk.SizeGroup
        ) => void
        onNotifyHeight?: (node: Gtk.ShortcutsGroup, height: number) => void
        onNotifyTitle?: (node: Gtk.ShortcutsGroup, title: string) => void
        onNotifyTitleSizeGroup?: (
          node: Gtk.ShortcutsGroup,
          titleSizeGroup: Gtk.SizeGroup
        ) => void
        onNotifyView?: (node: Gtk.ShortcutsGroup, view: string) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ShortcutsGroup,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.ShortcutsGroup,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyMaxHeight?: (
          node: Gtk.ShortcutsSection,
          maxHeight: number
        ) => void
        onNotifySectionName?: (
          node: Gtk.ShortcutsSection,
          sectionName: string
        ) => void
        onNotifyTitle?: (node: Gtk.ShortcutsSection, title: string) => void
        onNotifyViewName?: (
          node: Gtk.ShortcutsSection,
          viewName: string
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ShortcutsSection,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.ShortcutsSection,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyAccelSizeGroup?: (
          node: Gtk.ShortcutsShortcut,
          accelSizeGroup: Gtk.SizeGroup
        ) => void
        onNotifyAccelerator?: (
          node: Gtk.ShortcutsShortcut,
          accelerator: string
        ) => void
        onNotifyActionName?: (
          node: Gtk.ShortcutsShortcut,
          actionName: string
        ) => void
        onNotifyDirection?: (
          node: Gtk.ShortcutsShortcut,
          direction: Gtk.TextDirection
        ) => void
        onNotifyIcon?: (node: Gtk.ShortcutsShortcut, icon: Gio.Icon) => void
        onNotifyIconSet?: (
          node: Gtk.ShortcutsShortcut,
          iconSet: boolean
        ) => void
        onNotifyShortcutType?: (
          node: Gtk.ShortcutsShortcut,
          shortcutType: Gtk.ShortcutType
        ) => void
        onNotifySubtitle?: (
          node: Gtk.ShortcutsShortcut,
          subtitle: string
        ) => void
        onNotifySubtitleSet?: (
          node: Gtk.ShortcutsShortcut,
          subtitleSet: boolean
        ) => void
        onNotifyTitle?: (node: Gtk.ShortcutsShortcut, title: string) => void
        onNotifyTitleSizeGroup?: (
          node: Gtk.ShortcutsShortcut,
          titleSizeGroup: Gtk.SizeGroup
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ShortcutsShortcut,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      ShortcutsWindow: JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ShortcutsWindow>
        sectionName?: string
        viewName?: string
        accessibleRole?: Gtk.AccessibleRole
        onClose?: (node: Gtk.ShortcutsWindow) => boolean
        onSearch?: (node: Gtk.ShortcutsWindow) => boolean
        onNotifySectionName?: (
          node: Gtk.ShortcutsWindow,
          sectionName: string
        ) => void
        onNotifyViewName?: (node: Gtk.ShortcutsWindow, viewName: string) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ShortcutsWindow,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyAdjustment?: (
          node: Gtk.SpinButton,
          adjustment: Gtk.Adjustment
        ) => void
        onNotifyClimbRate?: (node: Gtk.SpinButton, climbRate: number) => void
        onNotifyDigits?: (node: Gtk.SpinButton, digits: number) => void
        onNotifyNumeric?: (node: Gtk.SpinButton, numeric: boolean) => void
        onNotifySnapToTicks?: (
          node: Gtk.SpinButton,
          snapToTicks: boolean
        ) => void
        onNotifyUpdatePolicy?: (
          node: Gtk.SpinButton,
          updatePolicy: Gtk.SpinButtonUpdatePolicy
        ) => void
        onNotifyValue?: (node: Gtk.SpinButton, value: number) => void
        onNotifyWrap?: (node: Gtk.SpinButton, wrap: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.SpinButton,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyEditingCanceled?: (
          node: Gtk.SpinButton,
          editingCanceled: boolean
        ) => void
        onNotifyCursorPosition?: (
          node: Gtk.SpinButton,
          cursorPosition: number
        ) => void
        onNotifyEditable?: (node: Gtk.SpinButton, editable: boolean) => void
        onNotifyEnableUndo?: (node: Gtk.SpinButton, enableUndo: boolean) => void
        onNotifyMaxWidthChars?: (
          node: Gtk.SpinButton,
          maxWidthChars: number
        ) => void
        onNotifySelectionBound?: (
          node: Gtk.SpinButton,
          selectionBound: number
        ) => void
        onNotifyText?: (node: Gtk.SpinButton, text: string) => void
        onNotifyWidthChars?: (node: Gtk.SpinButton, widthChars: number) => void
        onNotifyXalign?: (node: Gtk.SpinButton, xalign: number) => void
        onNotifyOrientation?: (
          node: Gtk.SpinButton,
          orientation: Gtk.Orientation
        ) => void
      }
      Spinner: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Spinner>
        spinning?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifySpinning?: (node: Gtk.Spinner, spinning: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Spinner,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyHhomogeneous?: (node: Gtk.Stack, hhomogeneous: boolean) => void
        onNotifyInterpolateSize?: (
          node: Gtk.Stack,
          interpolateSize: boolean
        ) => void
        onNotifyPages?: (node: Gtk.Stack, pages: Gtk.SelectionModel) => void
        onNotifyTransitionDuration?: (
          node: Gtk.Stack,
          transitionDuration: number
        ) => void
        onNotifyTransitionRunning?: (
          node: Gtk.Stack,
          transitionRunning: boolean
        ) => void
        onNotifyTransitionType?: (
          node: Gtk.Stack,
          transitionType: Gtk.StackTransitionType
        ) => void
        onNotifyVhomogeneous?: (node: Gtk.Stack, vhomogeneous: boolean) => void
        onNotifyVisibleChild?: (
          node: Gtk.Stack,
          visibleChild: Gtk.Widget
        ) => void
        onNotifyVisibleChildName?: (
          node: Gtk.Stack,
          visibleChildName: string
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Stack,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      StackSidebar: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSidebar>
        stack?: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
        onNotifyStack?: (node: Gtk.StackSidebar, stack: Gtk.Stack) => void
        onNotifyAccessibleRole?: (
          node: Gtk.StackSidebar,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      StackSwitcher: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSwitcher>
        stack?: Gtk.Stack
        accessibleRole?: Gtk.AccessibleRole
        orientation?: Gtk.Orientation
        onNotifyStack?: (node: Gtk.StackSwitcher, stack: Gtk.Stack) => void
        onNotifyAccessibleRole?: (
          node: Gtk.StackSwitcher,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyOrientation?: (
          node: Gtk.StackSwitcher,
          orientation: Gtk.Orientation
        ) => void
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
        onNotifyActive?: (node: Gtk.Switch, active: boolean) => void
        onNotifyState?: (node: Gtk.Switch, state: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Switch,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyActionName?: (node: Gtk.Switch, actionName: string) => void
        onNotifyActionTarget?: (
          node: Gtk.Switch,
          actionTarget: GLib.Variant
        ) => void
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
        onNotifyActivatesDefault?: (
          node: Gtk.Text,
          activatesDefault: boolean
        ) => void
        onNotifyAttributes?: (
          node: Gtk.Text,
          attributes: Pango.AttrList
        ) => void
        onNotifyBuffer?: (node: Gtk.Text, buffer: Gtk.EntryBuffer) => void
        onNotifyEnableEmojiCompletion?: (
          node: Gtk.Text,
          enableEmojiCompletion: boolean
        ) => void
        onNotifyExtraMenu?: (node: Gtk.Text, extraMenu: Gio.MenuModel) => void
        onNotifyImModule?: (node: Gtk.Text, imModule: string) => void
        onNotifyInputHints?: (
          node: Gtk.Text,
          inputHints: Gtk.InputHints
        ) => void
        onNotifyInputPurpose?: (
          node: Gtk.Text,
          inputPurpose: Gtk.InputPurpose
        ) => void
        onNotifyInvisibleChar?: (node: Gtk.Text, invisibleChar: number) => void
        onNotifyInvisibleCharSet?: (
          node: Gtk.Text,
          invisibleCharSet: boolean
        ) => void
        onNotifyMaxLength?: (node: Gtk.Text, maxLength: number) => void
        onNotifyOverwriteMode?: (node: Gtk.Text, overwriteMode: boolean) => void
        onNotifyPlaceholderText?: (
          node: Gtk.Text,
          placeholderText: string
        ) => void
        onNotifyPropagateTextWidth?: (
          node: Gtk.Text,
          propagateTextWidth: boolean
        ) => void
        onNotifyScrollOffset?: (node: Gtk.Text, scrollOffset: number) => void
        onNotifyTabs?: (node: Gtk.Text, tabs: Pango.TabArray) => void
        onNotifyTruncateMultiline?: (
          node: Gtk.Text,
          truncateMultiline: boolean
        ) => void
        onNotifyVisibility?: (node: Gtk.Text, visibility: boolean) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Text,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyCursorPosition?: (
          node: Gtk.Text,
          cursorPosition: number
        ) => void
        onNotifyEditable?: (node: Gtk.Text, editable: boolean) => void
        onNotifyEnableUndo?: (node: Gtk.Text, enableUndo: boolean) => void
        onNotifyMaxWidthChars?: (node: Gtk.Text, maxWidthChars: number) => void
        onNotifySelectionBound?: (
          node: Gtk.Text,
          selectionBound: number
        ) => void
        onNotifyText?: (node: Gtk.Text, text: string) => void
        onNotifyWidthChars?: (node: Gtk.Text, widthChars: number) => void
        onNotifyXalign?: (node: Gtk.Text, xalign: number) => void
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
        onNotifyAcceptsTab?: (node: Gtk.TextView, acceptsTab: boolean) => void
        onNotifyBottomMargin?: (
          node: Gtk.TextView,
          bottomMargin: number
        ) => void
        onNotifyBuffer?: (node: Gtk.TextView, buffer: Gtk.TextBuffer) => void
        onNotifyCursorVisible?: (
          node: Gtk.TextView,
          cursorVisible: boolean
        ) => void
        onNotifyEditable?: (node: Gtk.TextView, editable: boolean) => void
        onNotifyExtraMenu?: (
          node: Gtk.TextView,
          extraMenu: Gio.MenuModel
        ) => void
        onNotifyImModule?: (node: Gtk.TextView, imModule: string) => void
        onNotifyIndent?: (node: Gtk.TextView, indent: number) => void
        onNotifyInputHints?: (
          node: Gtk.TextView,
          inputHints: Gtk.InputHints
        ) => void
        onNotifyInputPurpose?: (
          node: Gtk.TextView,
          inputPurpose: Gtk.InputPurpose
        ) => void
        onNotifyJustification?: (
          node: Gtk.TextView,
          justification: Gtk.Justification
        ) => void
        onNotifyLeftMargin?: (node: Gtk.TextView, leftMargin: number) => void
        onNotifyMonospace?: (node: Gtk.TextView, monospace: boolean) => void
        onNotifyOverwrite?: (node: Gtk.TextView, overwrite: boolean) => void
        onNotifyPixelsAboveLines?: (
          node: Gtk.TextView,
          pixelsAboveLines: number
        ) => void
        onNotifyPixelsBelowLines?: (
          node: Gtk.TextView,
          pixelsBelowLines: number
        ) => void
        onNotifyPixelsInsideWrap?: (
          node: Gtk.TextView,
          pixelsInsideWrap: number
        ) => void
        onNotifyRightMargin?: (node: Gtk.TextView, rightMargin: number) => void
        onNotifyTabs?: (node: Gtk.TextView, tabs: Pango.TabArray) => void
        onNotifyTopMargin?: (node: Gtk.TextView, topMargin: number) => void
        onNotifyWrapMode?: (node: Gtk.TextView, wrapMode: Gtk.WrapMode) => void
        onNotifyAccessibleRole?: (
          node: Gtk.TextView,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyHadjustment?: (
          node: Gtk.TextView,
          hadjustment: Gtk.Adjustment
        ) => void
        onNotifyHscrollPolicy?: (
          node: Gtk.TextView,
          hscrollPolicy: Gtk.ScrollablePolicy
        ) => void
        onNotifyVadjustment?: (
          node: Gtk.TextView,
          vadjustment: Gtk.Adjustment
        ) => void
        onNotifyVscrollPolicy?: (
          node: Gtk.TextView,
          vscrollPolicy: Gtk.ScrollablePolicy
        ) => void
      }
      ToggleButton: JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.ToggleButton>
        active?: boolean
        group?: Gtk.ToggleButton
        accessibleRole?: Gtk.AccessibleRole
        actionName?: string
        actionTarget?: GLib.Variant
        onToggled?: (node: Gtk.ToggleButton) => boolean
        onNotifyActive?: (node: Gtk.ToggleButton, active: boolean) => void
        onNotifyGroup?: (
          node: Gtk.ToggleButton,
          group: Gtk.ToggleButton
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.ToggleButton,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyActionName?: (
          node: Gtk.ToggleButton,
          actionName: string
        ) => void
        onNotifyActionTarget?: (
          node: Gtk.ToggleButton,
          actionTarget: GLib.Variant
        ) => void
      }
      TreeExpander: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeExpander>
        hideExpander?: boolean
        indentForDepth?: boolean
        indentForIcon?: boolean
        item?: any
        listRow?: Gtk.TreeListRow
        accessibleRole?: Gtk.AccessibleRole
        onNotifyHideExpander?: (
          node: Gtk.TreeExpander,
          hideExpander: boolean
        ) => void
        onNotifyIndentForDepth?: (
          node: Gtk.TreeExpander,
          indentForDepth: boolean
        ) => void
        onNotifyIndentForIcon?: (
          node: Gtk.TreeExpander,
          indentForIcon: boolean
        ) => void
        onNotifyItem?: (node: Gtk.TreeExpander, item: any) => void
        onNotifyListRow?: (
          node: Gtk.TreeExpander,
          listRow: Gtk.TreeListRow
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.TreeExpander,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      Video: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Video>
        autoplay?: boolean
        file?: Gio.File
        loop?: boolean
        mediaStream?: Gtk.MediaStream
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAutoplay?: (node: Gtk.Video, autoplay: boolean) => void
        onNotifyFile?: (node: Gtk.Video, file: Gio.File) => void
        onNotifyLoop?: (node: Gtk.Video, loop: boolean) => void
        onNotifyMediaStream?: (
          node: Gtk.Video,
          mediaStream: Gtk.MediaStream
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Video,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      Viewport: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Viewport>
        hadjustment?: Gtk.Adjustment
        vadjustment?: Gtk.Adjustment
        scrollToFocus?: boolean
        accessibleRole?: Gtk.AccessibleRole
        hscrollPolicy?: Gtk.ScrollablePolicy
        vscrollPolicy?: Gtk.ScrollablePolicy
        onNotifyScrollToFocus?: (
          node: Gtk.Viewport,
          scrollToFocus: boolean
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Viewport,
          accessibleRole: Gtk.AccessibleRole
        ) => void
        onNotifyHadjustment?: (
          node: Gtk.Viewport,
          hadjustment: Gtk.Adjustment
        ) => void
        onNotifyHscrollPolicy?: (
          node: Gtk.Viewport,
          hscrollPolicy: Gtk.ScrollablePolicy
        ) => void
        onNotifyVadjustment?: (
          node: Gtk.Viewport,
          vadjustment: Gtk.Adjustment
        ) => void
        onNotifyVscrollPolicy?: (
          node: Gtk.Viewport,
          vscrollPolicy: Gtk.ScrollablePolicy
        ) => void
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
        onNotifyCanFocus?: (node: Gtk.Widget, canFocus: boolean) => void
        onNotifyCanTarget?: (node: Gtk.Widget, canTarget: boolean) => void
        onNotifyCssClasses?: (node: Gtk.Widget, cssClasses: string[]) => void
        onNotifyCssName?: (node: Gtk.Widget, cssName: string) => void
        onNotifyCursor?: (node: Gtk.Widget, cursor: Gdk.Cursor) => void
        onNotifyFocusOnClick?: (node: Gtk.Widget, focusOnClick: boolean) => void
        onNotifyFocusable?: (node: Gtk.Widget, focusable: boolean) => void
        onNotifyHalign?: (node: Gtk.Widget, halign: Gtk.Align) => void
        onNotifyHasDefault?: (node: Gtk.Widget, hasDefault: boolean) => void
        onNotifyHasFocus?: (node: Gtk.Widget, hasFocus: boolean) => void
        onNotifyHasTooltip?: (node: Gtk.Widget, hasTooltip: boolean) => void
        onNotifyHeightRequest?: (
          node: Gtk.Widget,
          heightRequest: number
        ) => void
        onNotifyHexpand?: (node: Gtk.Widget, hexpand: boolean) => void
        onNotifyHexpandSet?: (node: Gtk.Widget, hexpandSet: boolean) => void
        onNotifyLayoutManager?: (
          node: Gtk.Widget,
          layoutManager: Gtk.LayoutManager
        ) => void
        onNotifyMarginBottom?: (node: Gtk.Widget, marginBottom: number) => void
        onNotifyMarginEnd?: (node: Gtk.Widget, marginEnd: number) => void
        onNotifyMarginStart?: (node: Gtk.Widget, marginStart: number) => void
        onNotifyMarginTop?: (node: Gtk.Widget, marginTop: number) => void
        onNotifyName?: (node: Gtk.Widget, name: string) => void
        onNotifyOpacity?: (node: Gtk.Widget, opacity: number) => void
        onNotifyOverflow?: (node: Gtk.Widget, overflow: Gtk.Overflow) => void
        onNotifyParent?: (node: Gtk.Widget, parent: Gtk.Widget) => void
        onNotifyReceivesDefault?: (
          node: Gtk.Widget,
          receivesDefault: boolean
        ) => void
        onNotifyRoot?: (node: Gtk.Widget, root: Gtk.Root) => void
        onNotifyScaleFactor?: (node: Gtk.Widget, scaleFactor: number) => void
        onNotifySensitive?: (node: Gtk.Widget, sensitive: boolean) => void
        onNotifyTooltipMarkup?: (
          node: Gtk.Widget,
          tooltipMarkup: string
        ) => void
        onNotifyTooltipText?: (node: Gtk.Widget, tooltipText: string) => void
        onNotifyValign?: (node: Gtk.Widget, valign: Gtk.Align) => void
        onNotifyVexpand?: (node: Gtk.Widget, vexpand: boolean) => void
        onNotifyVexpandSet?: (node: Gtk.Widget, vexpandSet: boolean) => void
        onNotifyVisible?: (node: Gtk.Widget, visible: boolean) => void
        onNotifyWidthRequest?: (node: Gtk.Widget, widthRequest: number) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Widget,
          accessibleRole: Gtk.AccessibleRole
        ) => void
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
        onNotifyApplication?: (
          node: Gtk.Window,
          application: Gtk.Application
        ) => void
        onNotifyDecorated?: (node: Gtk.Window, decorated: boolean) => void
        onNotifyDefaultHeight?: (
          node: Gtk.Window,
          defaultHeight: number
        ) => void
        onNotifyDefaultWidget?: (
          node: Gtk.Window,
          defaultWidget: Gtk.Widget
        ) => void
        onNotifyDefaultWidth?: (node: Gtk.Window, defaultWidth: number) => void
        onNotifyDeletable?: (node: Gtk.Window, deletable: boolean) => void
        onNotifyDestroyWithParent?: (
          node: Gtk.Window,
          destroyWithParent: boolean
        ) => void
        onNotifyDisplay?: (node: Gtk.Window, display: Gdk.Display) => void
        onNotifyFocusVisible?: (node: Gtk.Window, focusVisible: boolean) => void
        onNotifyFocusWidget?: (
          node: Gtk.Window,
          focusWidget: Gtk.Widget
        ) => void
        onNotifyFullscreened?: (node: Gtk.Window, fullscreened: boolean) => void
        onNotifyHandleMenubarAccel?: (
          node: Gtk.Window,
          handleMenubarAccel: boolean
        ) => void
        onNotifyHideOnClose?: (node: Gtk.Window, hideOnClose: boolean) => void
        onNotifyIconName?: (node: Gtk.Window, iconName: string) => void
        onNotifyIsActive?: (node: Gtk.Window, isActive: boolean) => void
        onNotifyMaximized?: (node: Gtk.Window, maximized: boolean) => void
        onNotifyMnemonicsVisible?: (
          node: Gtk.Window,
          mnemonicsVisible: boolean
        ) => void
        onNotifyModal?: (node: Gtk.Window, modal: boolean) => void
        onNotifyResizable?: (node: Gtk.Window, resizable: boolean) => void
        onNotifyStartupId?: (node: Gtk.Window, startupId: string) => void
        onNotifyTitle?: (node: Gtk.Window, title: string) => void
        onNotifyTitlebar?: (node: Gtk.Window, titlebar: Gtk.Widget) => void
        onNotifyTransientFor?: (
          node: Gtk.Window,
          transientFor: Gtk.Window
        ) => void
        onNotifyAccessibleRole?: (
          node: Gtk.Window,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      WindowControls: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowControls>
        side?: Gtk.PackType
        decorationLayout?: string
        empty?: boolean
        accessibleRole?: Gtk.AccessibleRole
        onNotifyDecorationLayout?: (
          node: Gtk.WindowControls,
          decorationLayout: string
        ) => void
        onNotifyEmpty?: (node: Gtk.WindowControls, empty: boolean) => void
        onNotifySide?: (node: Gtk.WindowControls, side: Gtk.PackType) => void
        onNotifyAccessibleRole?: (
          node: Gtk.WindowControls,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
      WindowHandle: JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowHandle>
        accessibleRole?: Gtk.AccessibleRole
        onNotifyAccessibleRole?: (
          node: Gtk.WindowHandle,
          accessibleRole: Gtk.AccessibleRole
        ) => void
      }
    }
  }
}
