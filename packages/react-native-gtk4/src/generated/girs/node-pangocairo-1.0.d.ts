/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import "./node-pangocairo-1.0-import.d.ts"

/**
 * PangoCairo-1.0
 */

import type cairo from "./node-cairo-1.0.js"
import type GObject from "./node-gobject-2.0.js"
import type GLib from "./node-glib-2.0.js"
import type Pango from "./node-pango-1.0.js"
import type HarfBuzz from "./node-harfbuzz-0.0.js"
import type freetype2 from "./node-freetype2-2.0.js"
import type Gio from "./node-gio-2.0.js"
import type GModule from "./node-gmodule-2.0.js"

export namespace PangoCairo {
  /**
   * Retrieves any font rendering options previously set with
   * [func`PangoCairo`.context_set_font_options].
   *
   * This function does not report options that are derived from
   * the target surface by [func`update_context]`.
   * @param context a `PangoContext`, from a pangocairo font map
   * @returns the font options previously set on the   context, or %NULL if no options have been set. This value is   owned by the context and must not be modified or freed.
   */
  function contextGetFontOptions(
    context: Pango.Context
  ): cairo.FontOptions | null
  /**
   * Gets the resolution for the context.
   *
   * See [func`PangoCairo`.context_set_resolution]
   * @param context a `PangoContext`, from a pangocairo font map
   * @returns the resolution in "dots per inch". A negative value will   be returned if no resolution has previously been set.
   */
  function contextGetResolution(context: Pango.Context): number
  /**
   * Sets the font options used when rendering text with this context.
   *
   * These options override any options that [func`update_context]`
   * derives from the target surface.
   * @param context a `PangoContext`, from a pangocairo font map
   * @param options a `cairo_font_options_t`, or %NULL to unset   any previously set options. A copy is made.
   */
  function contextSetFontOptions(
    context: Pango.Context,
    options: cairo.FontOptions | null
  ): void
  /**
   * Sets the resolution for the context.
   *
   * This is a scale factor between points specified in a `PangoFontDescription`
   * and Cairo units. The default value is 96, meaning that a 10 point font will
   * be 13 units high. (10 * 96. / 72. = 13.3).
   * @param context a `PangoContext`, from a pangocairo font map
   * @param dpi the resolution in "dots per inch". (Physical inches aren't actually   involved; the terminology is conventional.) A 0 or negative value   means to use the resolution from the font map.
   */
  function contextSetResolution(context: Pango.Context, dpi: number): void
  /**
   * Sets callback function for context to use for rendering attributes
   * of type %PANGO_ATTR_SHAPE.
   *
   * See `PangoCairoShapeRendererFunc` for details.
   * @param context a `PangoContext`, from a pangocairo font map
   * @param func Callback function for rendering attributes of   type %PANGO_ATTR_SHAPE, or %NULL to disable shape rendering.
   */
  function contextSetShapeRenderer(
    context: Pango.Context,
    func: ShapeRendererFunc | null
  ): void
  /**
   * Creates a context object set up to match the current transformation
   * and target surface of the Cairo context.
   *
   * This context can then be
   * used to create a layout using [ctor`Pango`.Layout.new].
   *
   * This function is a convenience function that creates a context using
   * the default font map, then updates it to `cr`. If you just need to
   * create a layout for use with `cr` and do not need to access `PangoContext`
   * directly, you can use [func`create_layout]` instead.
   * @param cr a Cairo context
   * @returns the newly created `PangoContext`
   */
  function createContext(cr: cairo.Context): Pango.Context
  /**
   * Creates a layout object set up to match the current transformation
   * and target surface of the Cairo context.
   *
   * This layout can then be used for text measurement with functions
   * like [method`Pango`.Layout.get_size] or drawing with functions like
   * [func`show_layout]`. If you change the transformation or target
   * surface for `cr,` you need to call [func`update_layout]`.
   *
   * This function is the most convenient way to use Cairo with Pango,
   * however it is slightly inefficient since it creates a separate
   * `PangoContext` object for each layout. This might matter in an
   * application that was laying out large amounts of text.
   * @param cr a Cairo context
   * @returns the newly created `PangoLayout`
   */
  function createLayout(cr: cairo.Context): Pango.Layout
  /**
   * Add a squiggly line to the current path in the specified cairo context that
   * approximately covers the given rectangle in the style of an underline used
   * to indicate a spelling error.
   *
   * The width of the underline is rounded to an integer number of up/down
   * segments and the resulting rectangle is centered in the original rectangle.
   * @param cr a Cairo context
   * @param x The X coordinate of one corner of the rectangle
   * @param y The Y coordinate of one corner of the rectangle
   * @param width Non-negative width of the rectangle
   * @param height Non-negative height of the rectangle
   */
  function errorUnderlinePath(
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
  ): void
  /**
   * Gets a default `PangoCairoFontMap` to use with Cairo.
   *
   * Note that the type of the returned object will depend on the
   * particular font backend Cairo was compiled to use; you generally
   * should only use the `PangoFontMap` and `PangoCairoFontMap`
   * interfaces on the returned object.
   *
   * The default Cairo fontmap can be changed by using
   * [method`PangoCairo`.FontMap.set_default]. This can be used to
   * change the Cairo font backend that the default fontmap uses
   * for example.
   *
   * Note that since Pango 1.32.6, the default fontmap is per-thread.
   * Each thread gets its own default fontmap. In this way, PangoCairo
   * can be used safely from multiple threads.
   * @returns the default PangoCairo fontmap  for the current thread. This object is owned by Pango and must  not be freed.
   */
  function fontMapGetDefault(): Pango.FontMap
  /**
   * Creates a new `PangoCairoFontMap` object.
   *
   * A fontmap is used to cache information about available fonts,
   * and holds certain global parameters such as the resolution.
   * In most cases, you can use `func`PangoCairo`.font_map_get_default]
   * instead.
   *
   * Note that the type of the returned object will depend
   * on the particular font backend Cairo was compiled to use;
   * You generally should only use the `PangoFontMap` and
   * `PangoCairoFontMap` interfaces on the returned object.
   *
   * You can override the type of backend returned by using an
   * environment variable %PANGOCAIRO_BACKEND. Supported types,
   * based on your build, are fc (fontconfig), win32, and coretext.
   * If requested type is not available, NULL is returned. Ie.
   * this is only useful for testing, when at least two backends
   * are compiled in.
   * @returns the newly allocated `PangoFontMap`,   which should be freed with g_object_unref().
   */
  function fontMapNew(): Pango.FontMap
  /**
   * Creates a new `PangoCairoFontMap` object of the type suitable
   * to be used with cairo font backend of type `fonttype`.
   *
   * In most cases one should simply use [func`PangoCairo`.FontMap.new], or
   * in fact in most of those cases, just use [func`PangoCairo`.FontMap.get_default].
   * @param fonttype desired #cairo_font_type_t
   * @returns the newly allocated   `PangoFontMap` of suitable type which should be freed with   g_object_unref(), or %NULL if the requested cairo font backend   is not supported / compiled in.
   */
  function fontMapNewForFontType(fonttype: cairo.FontType): Pango.FontMap | null
  /**
   * Adds the glyphs in `glyphs` to the current path in the specified
   * cairo context.
   *
   * The origin of the glyphs (the left edge of the baseline)
   * will be at the current point of the cairo context.
   * @param cr a Cairo context
   * @param font a `PangoFont` from a `PangoCairoFontMap`
   * @param glyphs a `PangoGlyphString`
   */
  function glyphStringPath(
    cr: cairo.Context,
    font: Pango.Font,
    glyphs: Pango.GlyphString
  ): void
  /**
   * Adds the text in `PangoLayoutLine` to the current path in the
   * specified cairo context.
   *
   * The origin of the glyphs (the left edge of the line) will be
   * at the current point of the cairo context.
   * @param cr a Cairo context
   * @param line a `PangoLayoutLine`
   */
  function layoutLinePath(cr: cairo.Context, line: Pango.LayoutLine): void
  /**
   * Adds the text in a `PangoLayout` to the current path in the
   * specified cairo context.
   *
   * The top-left corner of the `PangoLayout` will be at the
   * current point of the cairo context.
   * @param cr a Cairo context
   * @param layout a Pango layout
   */
  function layoutPath(cr: cairo.Context, layout: Pango.Layout): void
  /**
   * Draw a squiggly line in the specified cairo context that approximately
   * covers the given rectangle in the style of an underline used to indicate a
   * spelling error.
   *
   * The width of the underline is rounded to an integer
   * number of up/down segments and the resulting rectangle is centered in the
   * original rectangle.
   * @param cr a Cairo context
   * @param x The X coordinate of one corner of the rectangle
   * @param y The Y coordinate of one corner of the rectangle
   * @param width Non-negative width of the rectangle
   * @param height Non-negative height of the rectangle
   */
  function showErrorUnderline(
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
  ): void
  /**
   * Draws the glyphs in `glyph_item` in the specified cairo context,
   *
   * embedding the text associated with the glyphs in the output if the
   * output format supports it (PDF for example), otherwise it acts
   * similar to [func`show_glyph_string]`.
   *
   * The origin of the glyphs (the left edge of the baseline) will
   * be drawn at the current point of the cairo context.
   *
   * Note that `text` is the start of the text for layout, which is then
   * indexed by `glyph_item->item->offset`.
   * @param cr a Cairo context
   * @param text the UTF-8 text that `glyph_item` refers to
   * @param glyphItem a `PangoGlyphItem`
   */
  function showGlyphItem(
    cr: cairo.Context,
    text: string,
    glyphItem: Pango.GlyphItem
  ): void
  /**
   * Draws the glyphs in `glyphs` in the specified cairo context.
   *
   * The origin of the glyphs (the left edge of the baseline) will
   * be drawn at the current point of the cairo context.
   * @param cr a Cairo context
   * @param font a `PangoFont` from a `PangoCairoFontMap`
   * @param glyphs a `PangoGlyphString`
   */
  function showGlyphString(
    cr: cairo.Context,
    font: Pango.Font,
    glyphs: Pango.GlyphString
  ): void
  /**
   * Draws a `PangoLayout` in the specified cairo context.
   *
   * The top-left corner of the `PangoLayout` will be drawn
   * at the current point of the cairo context.
   * @param cr a Cairo context
   * @param layout a Pango layout
   */
  function showLayout(cr: cairo.Context, layout: Pango.Layout): void
  /**
   * Draws a `PangoLayoutLine` in the specified cairo context.
   *
   * The origin of the glyphs (the left edge of the line) will
   * be drawn at the current point of the cairo context.
   * @param cr a Cairo context
   * @param line a `PangoLayoutLine`
   */
  function showLayoutLine(cr: cairo.Context, line: Pango.LayoutLine): void
  /**
   * Updates a `PangoContext` previously created for use with Cairo to
   * match the current transformation and target surface of a Cairo
   * context.
   *
   * If any layouts have been created for the context, it's necessary
   * to call [method`Pango`.Layout.context_changed] on those layouts.
   * @param cr a Cairo context
   * @param context a `PangoContext`, from a pangocairo font map
   */
  function updateContext(cr: cairo.Context, context: Pango.Context): void
  /**
   * Updates the private `PangoContext` of a `PangoLayout` created with
   * [func`create_layout]` to match the current transformation and target
   * surface of a Cairo context.
   * @param cr a Cairo context
   * @param layout a `PangoLayout`, from [func`create_layout]`
   */
  function updateLayout(cr: cairo.Context, layout: Pango.Layout): void
  /**
   * Function type for rendering attributes of type %PANGO_ATTR_SHAPE
   * with Pango's Cairo renderer.
   * @callback
   * @param cr a Cairo context with current point set to where the shape should be rendered
   * @param attr the %PANGO_ATTR_SHAPE to render
   * @param doPath whether only the shape path should be appended to current path of `cr` and no filling/stroking done.  This will be set to %TRUE when called from pango_cairo_layout_path() and pango_cairo_layout_line_path() rendering functions.
   */
  interface ShapeRendererFunc {
    (cr: cairo.Context, attr: Pango.AttrShape, doPath: boolean): void
  }
  module Font {
    // Constructor properties interface

    interface ConstructorProperties
      extends Pango.Font.ConstructorProperties,
        GObject.Object.ConstructorProperties {}
  }

  interface Font extends Pango.Font {
    // Own properties of PangoCairo-1.0.PangoCairo.Font

    __gtype__: number

    // Owm methods of PangoCairo-1.0.PangoCairo.Font

    /**
     * Gets the `cairo_scaled_font_t` used by `font`.
     * The scaled font can be referenced and kept using
     * cairo_scaled_font_reference().
     * @returns the `cairo_scaled_font_t`   used by @font
     */
    getScaledFont(): cairo.ScaledFont | null

    // Class property signals of PangoCairo-1.0.PangoCairo.Font

    connect(
      sigName: "notify::__gtype__",
      callback: (...args: any[]) => void
    ): number
    on(
      sigName: "notify::__gtype__",
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    once(
      sigName: "notify::__gtype__",
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    off(
      sigName: "notify::__gtype__",
      callback: (...args: any[]) => void
    ): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(
      sigName: string,
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    once(
      sigName: string,
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    off(
      sigName: string,
      callback: (...args: any[]) => void
    ): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
  }

  /**
   * `PangoCairoFont` is an interface exported by fonts for
   * use with Cairo.
   *
   * The actual type of the font will depend on the particular
   * font technology Cairo was compiled to use.
   * @interface
   */
  class Font extends GObject.Object {
    // Own properties of PangoCairo-1.0.PangoCairo.Font

    static name: string

    // Constructors of PangoCairo-1.0.PangoCairo.Font

    constructor(config?: Font.ConstructorProperties)
    _init(config?: Font.ConstructorProperties): void
  }

  module FontMap {
    // Constructor properties interface

    interface ConstructorProperties
      extends Pango.FontMap.ConstructorProperties,
        GObject.Object.ConstructorProperties {}
  }

  interface FontMap extends Pango.FontMap {
    // Own properties of PangoCairo-1.0.PangoCairo.FontMap

    __gtype__: number

    // Owm methods of PangoCairo-1.0.PangoCairo.FontMap

    /**
     * Gets the type of Cairo font backend that `fontmap` uses.
     * @returns the `cairo_font_type_t` cairo font backend type
     */
    getFontType(): cairo.FontType
    /**
     * Gets the resolution for the fontmap.
     *
     * See [method`PangoCairo`.FontMap.set_resolution].
     * @returns the resolution in "dots per inch"
     */
    getResolution(): number
    /**
     * Sets a default `PangoCairoFontMap` to use with Cairo.
     *
     * This can be used to change the Cairo font backend that the
     * default fontmap uses for example. The old default font map
     * is unreffed and the new font map referenced.
     *
     * Note that since Pango 1.32.6, the default fontmap is per-thread.
     * This function only changes the default fontmap for
     * the current thread. Default fontmaps of existing threads
     * are not changed. Default fontmaps of any new threads will
     * still be created using [func`PangoCairo`.FontMap.new].
     *
     * A value of %NULL for `fontmap` will cause the current default
     * font map to be released and a new default font map to be created
     * on demand, using [func`PangoCairo`.FontMap.new].
     */
    setDefault(): void
    /**
     * Sets the resolution for the fontmap.
     *
     * This is a scale factor between
     * points specified in a `PangoFontDescription` and Cairo units. The
     * default value is 96, meaning that a 10 point font will be 13
     * units high. (10 * 96. / 72. = 13.3).
     * @param dpi the resolution in "dots per inch". (Physical inches aren't actually   involved; the terminology is conventional.)
     */
    setResolution(dpi: number): void

    // Class property signals of PangoCairo-1.0.PangoCairo.FontMap

    connect(
      sigName: "notify::__gtype__",
      callback: (...args: any[]) => void
    ): number
    on(
      sigName: "notify::__gtype__",
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    once(
      sigName: "notify::__gtype__",
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    off(
      sigName: "notify::__gtype__",
      callback: (...args: any[]) => void
    ): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(
      sigName: "notify::item-type",
      callback: (...args: any[]) => void
    ): number
    on(
      sigName: "notify::item-type",
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    once(
      sigName: "notify::item-type",
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    off(
      sigName: "notify::item-type",
      callback: (...args: any[]) => void
    ): NodeJS.EventEmitter
    emit(sigName: "notify::item-type", ...args: any[]): void
    connect(
      sigName: "notify::n-items",
      callback: (...args: any[]) => void
    ): number
    on(
      sigName: "notify::n-items",
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    once(
      sigName: "notify::n-items",
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    off(
      sigName: "notify::n-items",
      callback: (...args: any[]) => void
    ): NodeJS.EventEmitter
    emit(sigName: "notify::n-items", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(
      sigName: string,
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    once(
      sigName: string,
      callback: (...args: any[]) => void,
      after?: boolean
    ): NodeJS.EventEmitter
    off(
      sigName: string,
      callback: (...args: any[]) => void
    ): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
  }

  /**
   * `PangoCairoFontMap` is an interface exported by font maps for
   * use with Cairo.
   *
   * The actual type of the font map will depend on the particular
   * font technology Cairo was compiled to use.
   * @interface
   */
  class FontMap extends GObject.Object {
    // Own properties of PangoCairo-1.0.PangoCairo.FontMap

    static name: string

    // Constructors of PangoCairo-1.0.PangoCairo.FontMap

    constructor(config?: FontMap.ConstructorProperties)
    _init(config?: FontMap.ConstructorProperties): void
    /**
     * Creates a new `PangoCairoFontMap` object.
     *
     * A fontmap is used to cache information about available fonts,
     * and holds certain global parameters such as the resolution.
     * In most cases, you can use `func`PangoCairo`.font_map_get_default]
     * instead.
     *
     * Note that the type of the returned object will depend
     * on the particular font backend Cairo was compiled to use;
     * You generally should only use the `PangoFontMap` and
     * `PangoCairoFontMap` interfaces on the returned object.
     *
     * You can override the type of backend returned by using an
     * environment variable %PANGOCAIRO_BACKEND. Supported types,
     * based on your build, are fc (fontconfig), win32, and coretext.
     * If requested type is not available, NULL is returned. Ie.
     * this is only useful for testing, when at least two backends
     * are compiled in.
     * @returns the newly allocated `PangoFontMap`,   which should be freed with g_object_unref().
     */
    static new(): Pango.FontMap
    /**
     * Creates a new `PangoCairoFontMap` object of the type suitable
     * to be used with cairo font backend of type `fonttype`.
     *
     * In most cases one should simply use [func`PangoCairo`.FontMap.new], or
     * in fact in most of those cases, just use [func`PangoCairo`.FontMap.get_default].
     * @param fonttype desired #cairo_font_type_t
     * @returns the newly allocated   `PangoFontMap` of suitable type which should be freed with   g_object_unref(), or %NULL if the requested cairo font backend   is not supported / compiled in.
     */
    static newForFontType(fonttype: cairo.FontType): Pango.FontMap | null
    /**
     * Gets a default `PangoCairoFontMap` to use with Cairo.
     *
     * Note that the type of the returned object will depend on the
     * particular font backend Cairo was compiled to use; you generally
     * should only use the `PangoFontMap` and `PangoCairoFontMap`
     * interfaces on the returned object.
     *
     * The default Cairo fontmap can be changed by using
     * [method`PangoCairo`.FontMap.set_default]. This can be used to
     * change the Cairo font backend that the default fontmap uses
     * for example.
     *
     * Note that since Pango 1.32.6, the default fontmap is per-thread.
     * Each thread gets its own default fontmap. In this way, PangoCairo
     * can be used safely from multiple threads.
     * @returns the default PangoCairo fontmap  for the current thread. This object is owned by Pango and must  not be freed.
     */
    static getDefault(): Pango.FontMap
  }
}

export default PangoCairo
// END
