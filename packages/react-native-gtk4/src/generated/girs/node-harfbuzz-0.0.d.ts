/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import "./node-harfbuzz-0.0-import.d.ts"

/**
 * HarfBuzz-0.0
 */

import type freetype2 from "./node-freetype2-2.0.js"
import type GObject from "./node-gobject-2.0.js"
import type GLib from "./node-glib-2.0.js"

export namespace HarfBuzz {
  /**
   * The selectors defined for specifying AAT feature settings.
   */
  enum aat_layout_feature_selector_t {
    /**
     * Initial, unset feature selector
     */
    INVALID,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC
     */
    ALL_TYPE_FEATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC
     */
    ALL_TYPE_FEATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REQUIRED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REQUIRED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    COMMON_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    COMMON_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    RARE_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    RARE_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    LOGOS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    LOGOS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REBUS_PICTURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REBUS_PICTURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    DIPHTHONG_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    DIPHTHONG_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SQUARED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SQUARED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    ABBREV_SQUARED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    ABBREV_SQUARED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SYMBOL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SYMBOL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CONTEXTUAL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CONTEXTUAL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    HISTORICAL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    HISTORICAL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    UNCONNECTED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    PARTIALLY_CONNECTED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CURSIVE,
    /**
     * Deprecated
     */
    UPPER_AND_LOWER_CASE,
    /**
     * Deprecated
     */
    ALL_CAPS,
    /**
     * Deprecated
     */
    ALL_LOWER_CASE,
    /**
     * Deprecated
     */
    SMALL_CAPS,
    /**
     * Deprecated
     */
    INITIAL_CAPS,
    /**
     * Deprecated
     */
    INITIAL_CAPS_AND_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION
     */
    SUBSTITUTE_VERTICAL_FORMS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION
     */
    SUBSTITUTE_VERTICAL_FORMS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT
     */
    LINGUISTIC_REARRANGEMENT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT
     */
    LINGUISTIC_REARRANGEMENT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    MONOSPACED_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    PROPORTIONAL_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    THIRD_WIDTH_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    QUARTER_WIDTH_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_INITIAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_INITIAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_INITIAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_INITIAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    NON_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    NON_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    SHOW_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    HIDE_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    DECOMPOSE_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    NORMAL_POSITION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    SUPERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    INFERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    ORDINALS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    SCIENTIFIC_INFERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    NO_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    VERTICAL_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    DIAGONAL_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE
     */
    PREVENT_OVERLAP_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE
     */
    PREVENT_OVERLAP_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHENS_TO_EM_DASH_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHENS_TO_EM_DASH_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHEN_TO_EN_DASH_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHEN_TO_EN_DASH_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SLASHED_ZERO_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SLASHED_ZERO_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    FORM_INTERROBANG_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    FORM_INTERROBANG_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SMART_QUOTES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SMART_QUOTES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    PERIODS_TO_ELLIPSIS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    PERIODS_TO_ELLIPSIS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    HYPHEN_TO_MINUS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    HYPHEN_TO_MINUS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    ASTERISK_TO_MULTIPLY_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    ASTERISK_TO_MULTIPLY_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    SLASH_TO_DIVIDE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    SLASH_TO_DIVIDE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    INEQUALITY_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    INEQUALITY_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    EXPONENTS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    EXPONENTS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    MATHEMATICAL_GREEK_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    MATHEMATICAL_GREEK_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    NO_ORNAMENTS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    DINGBATS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    PI_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    FLEURONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    DECORATIVE_BORDERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    INTERNATIONAL_SYMBOLS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    MATH_SYMBOLS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_ALTERNATIVES
     */
    NO_ALTERNATES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL1,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL2,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL3,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL4,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL5,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    NO_STYLE_OPTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    DISPLAY_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    ENGRAVED_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    ILLUMINATED_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    TITLING_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    TALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    SIMPLIFIED_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1978_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1983_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1990_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    EXPERT_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS2004_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    HOJO_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    NLCCHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_NAMES_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE
     */
    LOWER_CASE_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE
     */
    UPPER_CASE_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    PROPORTIONAL_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    MONOSPACED_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    HALF_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    THIRD_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    QUARTER_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    ALT_PROPORTIONAL_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    ALT_HALF_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    NO_TRANSLITERATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HIRAGANA_TO_KATAKANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    KATAKANA_TO_HIRAGANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    KANA_TO_ROMANIZATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    ROMANIZATION_TO_HIRAGANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    ROMANIZATION_TO_KATAKANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    NO_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    ROUNDED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    CIRCLE_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_CIRCLE_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    PARENTHESIS_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    PERIOD_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    ROMAN_NUMERAL_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    DIAMOND_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_ROUNDED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE
     */
    FULL_WIDTH_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE
     */
    PROPORTIONAL_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    FULL_WIDTH_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    PROPORTIONAL_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    HALF_WIDTH_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    CANONICAL_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    CANONICAL_COMPOSITION_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    COMPATIBILITY_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    COMPATIBILITY_COMPOSITION_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    TRANSCODING_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    TRANSCODING_COMPOSITION_OFF,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_OFF instead
     */
    NO_RUBY_KANA,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_ON instead
     */
    RUBY_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA
     */
    RUBY_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA
     */
    RUBY_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    NO_CJK_SYMBOL_ALTERNATIVES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    NO_IDEOGRAPHIC_ALTERNATIVES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE
     */
    CJK_VERTICAL_ROMAN_CENTERED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE
     */
    CJK_VERTICAL_ROMAN_HBASELINE,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_OFF instead
     */
    NO_CJK_ITALIC_ROMAN,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_ON instead
     */
    CJK_ITALIC_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN
     */
    CJK_ITALIC_ROMAN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN
     */
    CJK_ITALIC_ROMAN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_LAYOUT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_LAYOUT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_SPACING_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_SPACING_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_HORIZ_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_HORIZ_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_VERT_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_VERT_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    NO_STYLISTIC_ALTERNATES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ONE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ONE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWO_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWO_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THREE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THREE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOUR_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOUR_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIVE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIVE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIX_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIX_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ELEVEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ELEVEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWELVE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWELVE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THIRTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THIRTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOURTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOURTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIFTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIFTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIXTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIXTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVENTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVENTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINETEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINETEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWENTY_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWENTY_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    SWASH_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    SWASH_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_SWASH_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_SWASH_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    DEFAULT_LOWER_CASE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    LOWER_CASE_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    LOWER_CASE_PETITE_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    DEFAULT_UPPER_CASE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    UPPER_CASE_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    UPPER_CASE_PETITE_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    HALF_WIDTH_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    PROPORTIONAL_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    DEFAULT_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    FULL_WIDTH_CJK_ROMAN,
  }
  /**
   * The possible feature types defined for AAT shaping, from Apple [Font Feature Registry](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html).
   */
  enum aat_layout_feature_type_t {
    /**
     * Initial, unset feature type
     */
    INVALID,
    /**
     * [All Typographic Features](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type0)
     */
    ALL_TYPOGRAPHIC,
    /**
     * [Ligatures](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type1)
     */
    LIGATURES,
    /**
     * [Cursive Connection](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type2)
     */
    CURSIVE_CONNECTION,
    /**
     * [Letter Case](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type3)
     */
    LETTER_CASE,
    /**
     * [Vertical Substitution](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type4)
     */
    VERTICAL_SUBSTITUTION,
    /**
     * [Linguistic Rearrangement](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type5)
     */
    LINGUISTIC_REARRANGEMENT,
    /**
     * [Number Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type6)
     */
    NUMBER_SPACING,
    /**
     * [Smart Swash](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type8)
     */
    SMART_SWASH_TYPE,
    /**
     * [Diacritics](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type9)
     */
    DIACRITICS_TYPE,
    /**
     * [Vertical Position](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type10)
     */
    VERTICAL_POSITION,
    /**
     * [Fractions](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type11)
     */
    FRACTIONS,
    /**
     * [Overlapping Characters](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type13)
     */
    OVERLAPPING_CHARACTERS_TYPE,
    /**
     * [Typographic Extras](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type14)
     */
    TYPOGRAPHIC_EXTRAS,
    /**
     * [Mathematical Extras](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type15)
     */
    MATHEMATICAL_EXTRAS,
    /**
     * [Ornament Sets](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type16)
     */
    ORNAMENT_SETS_TYPE,
    /**
     * [Character Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type17)
     */
    CHARACTER_ALTERNATIVES,
    /**
     * [Design Complexity](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type18)
     */
    DESIGN_COMPLEXITY_TYPE,
    /**
     * [Style Options](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type19)
     */
    STYLE_OPTIONS,
    /**
     * [Character Shape](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type20)
     */
    CHARACTER_SHAPE,
    /**
     * [Number Case](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type21)
     */
    NUMBER_CASE,
    /**
     * [Text Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type22)
     */
    TEXT_SPACING,
    /**
     * [Transliteration](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type23)
     */
    TRANSLITERATION,
    /**
     * [Annotation](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type24)
     */
    ANNOTATION_TYPE,
    /**
     * [Kana Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type25)
     */
    KANA_SPACING_TYPE,
    /**
     * [Ideographic Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type26)
     */
    IDEOGRAPHIC_SPACING_TYPE,
    /**
     * [Unicode Decomposition](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type27)
     */
    UNICODE_DECOMPOSITION_TYPE,
    /**
     * [Ruby Kana](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type28)
     */
    RUBY_KANA,
    /**
     * [CJK Symbol Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type29)
     */
    CJK_SYMBOL_ALTERNATIVES_TYPE,
    /**
     * [Ideographic Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type30)
     */
    IDEOGRAPHIC_ALTERNATIVES_TYPE,
    /**
     * [CJK Vertical Roman Placement](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type31)
     */
    CJK_VERTICAL_ROMAN_PLACEMENT_TYPE,
    /**
     * [Italic CJK Roman](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type32)
     */
    ITALIC_CJK_ROMAN,
    /**
     * [Case Sensitive Layout](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type33)
     */
    CASE_SENSITIVE_LAYOUT,
    /**
     * [Alternate Kana](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type34)
     */
    ALTERNATE_KANA,
    /**
     * [Stylistic Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type35)
     */
    STYLISTIC_ALTERNATIVES,
    /**
     * [Contextual Alternatives](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type36)
     */
    CONTEXTUAL_ALTERNATIVES,
    /**
     * [Lower Case](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type37)
     */
    LOWER_CASE,
    /**
     * [Upper Case](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type38)
     */
    UPPER_CASE,
    /**
     * [Language Tag](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type39)
     */
    LANGUAGE_TAG_TYPE,
    /**
     * [CJK Roman Spacing](https://developer.apple.com/fonts/TrueType-Reference-Manual/RM09/AppendixF.html#Type103)
     */
    CJK_ROMAN_SPACING_TYPE,
  }
  /**
   * Data type for holding HarfBuzz's clustering behavior options. The cluster level
   * dictates one aspect of how HarfBuzz will treat non-base characters
   * during shaping.
   *
   * In `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES,` non-base
   * characters are merged into the cluster of the base character that precedes them.
   *
   * In `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_CHARACTERS,` non-base characters are initially
   * assigned their own cluster values, which are not merged into preceding base
   * clusters. This allows HarfBuzz to perform additional operations like reorder
   * sequences of adjacent marks.
   *
   * `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES` is the default, because it maintains
   * backward compatibility with older versions of HarfBuzz. New client programs that
   * do not need to maintain such backward compatibility are recommended to use
   * `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_CHARACTERS` instead of the default.
   */
  enum buffer_cluster_level_t {
    /**
     * Return cluster values grouped by graphemes into
     *   monotone order.
     */
    MONOTONE_GRAPHEMES,
    /**
     * Return cluster values grouped into monotone order.
     */
    MONOTONE_CHARACTERS,
    /**
     * Don't group cluster values.
     */
    CHARACTERS,
    /**
     * Default cluster level,
     *   equal to `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES`.
     */
    DEFAULT,
  }
  /**
   * The type of #hb_buffer_t contents.
   */
  enum buffer_content_type_t {
    /**
     * Initial value for new buffer.
     */
    INVALID,
    /**
     * The buffer contains input characters (before shaping).
     */
    UNICODE,
    /**
     * The buffer contains output glyphs (after shaping).
     */
    GLYPHS,
  }
  /**
   * The buffer serialization and de-serialization format used in
   * hb_buffer_serialize_glyphs() and hb_buffer_deserialize_glyphs().
   */
  enum buffer_serialize_format_t {
    /**
     * a human-readable, plain text format.
     */
    TEXT,
    /**
     * a machine-readable JSON format.
     */
    JSON,
    /**
     * invalid format.
     */
    INVALID,
  }
  /**
   * The direction of a text segment or buffer.
   *
   * A segment can also be tested for horizontal or vertical
   * orientation (irrespective of specific direction) with
   * HB_DIRECTION_IS_HORIZONTAL() or HB_DIRECTION_IS_VERTICAL().
   */
  enum direction_t {
    /**
     * Initial, unset direction.
     */
    INVALID,
    /**
     * Text is set horizontally from left to right.
     */
    LTR,
    /**
     * Text is set horizontally from right to left.
     */
    RTL,
    /**
     * Text is set vertically from top to bottom.
     */
    TTB,
    /**
     * Text is set vertically from bottom to top.
     */
    BTT,
  }
  /**
   * Data type holding the memory modes available to
   * client programs.
   *
   * Regarding these various memory-modes:
   *
   * - In no case shall the HarfBuzz client modify memory
   *   that is passed to HarfBuzz in a blob.  If there is
   *   any such possibility, `HB_MEMORY_MODE_DUPLICATE` should be used
   *   such that HarfBuzz makes a copy immediately,
   *
   * - Use `HB_MEMORY_MODE_READONLY` otherwise, unless you really really
   *   really know what you are doing,
   *
   * - `HB_MEMORY_MODE_WRITABLE` is appropriate if you really made a
   *   copy of data solely for the purpose of passing to
   *   HarfBuzz and doing that just once (no reuse!),
   *
   * - If the font is mmap()ed, it's okay to use
   *   `HB_MEMORY_MODE_READONLY_MAY_MAKE_WRITABLE,` however, using that mode
   *   correctly is very tricky.  Use `HB_MEMORY_MODE_READONLY` instead.
   */
  enum memory_mode_t {
    /**
     * HarfBuzz immediately makes a copy of the data.
     */
    DUPLICATE,
    /**
     * HarfBuzz client will never modify the data,
     *     and HarfBuzz will never modify the data.
     */
    READONLY,
    /**
     * HarfBuzz client made a copy of the data solely
     *     for HarfBuzz, so HarfBuzz may modify the data.
     */
    WRITABLE,
    /**
     * See above
     */
    READONLY_MAY_MAKE_WRITABLE,
  }
  /**
   * Baseline tags from [Baseline Tags](https://docs.microsoft.com/en-us/typography/opentype/spec/baselinetags) registry.
   */
  enum ot_layout_baseline_tag_t {
    /**
     * The baseline used by alphabetic scripts such as Latin, Cyrillic and Greek.
     * In vertical writing mode, the alphabetic baseline for characters rotated 90 degrees clockwise.
     * (This would not apply to alphabetic characters that remain upright in vertical writing mode, since these
     * characters are not rotated.)
     */
    ROMAN,
    /**
     * The hanging baseline. In horizontal direction, this is the horizontal
     * line from which syllables seem, to hang in Tibetan and other similar scripts. In vertical writing mode,
     * for Tibetan (or some other similar script) characters rotated 90 degrees clockwise.
     */
    HANGING,
    /**
     * Ideographic character face bottom or left edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_FACE_BOTTOM_OR_LEFT,
    /**
     * Ideographic character face top or right edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_FACE_TOP_OR_RIGHT,
    /**
     * The center of the ideographic character face. Since: 4.0.0
     */
    IDEO_FACE_CENTRAL,
    /**
     * Ideographic em-box bottom or left edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_EMBOX_BOTTOM_OR_LEFT,
    /**
     * Ideographic em-box top or right edge baseline,
     */
    IDEO_EMBOX_TOP_OR_RIGHT,
    /**
     * The center of the ideographic em-box. Since: 4.0.0
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_EMBOX_CENTRAL,
    /**
     * The baseline about which mathematical characters are centered.
     * In vertical writing mode when mathematical characters rotated 90 degrees clockwise, are centered.
     */
    MATH,
  }
  /**
   * The GDEF classes defined for glyphs.
   */
  enum ot_layout_glyph_class_t {
    /**
     * Glyphs not matching the other classifications
     */
    UNCLASSIFIED,
    /**
     * Spacing, single characters, capable of accepting marks
     */
    BASE_GLYPH,
    /**
     * Glyphs that represent ligation of multiple characters
     */
    LIGATURE,
    /**
     * Non-spacing, combining glyphs that represent marks
     */
    MARK,
    /**
     * Spacing glyphs that represent part of a single character
     */
    COMPONENT,
  }
  /**
   * The 'MATH' table constants, refer to
   * [OpenType documentation](https://docs.microsoft.com/en-us/typography/opentype/spec/math#mathconstants-table)
   * For more explanations.
   */
  enum ot_math_constant_t {
    /**
     * scriptPercentScaleDown
     */
    SCRIPT_PERCENT_SCALE_DOWN,
    /**
     * scriptScriptPercentScaleDown
     */
    SCRIPT_SCRIPT_PERCENT_SCALE_DOWN,
    /**
     * delimitedSubFormulaMinHeight
     */
    DELIMITED_SUB_FORMULA_MIN_HEIGHT,
    /**
     * displayOperatorMinHeight
     */
    DISPLAY_OPERATOR_MIN_HEIGHT,
    /**
     * mathLeading
     */
    MATH_LEADING,
    /**
     * axisHeight
     */
    AXIS_HEIGHT,
    /**
     * accentBaseHeight
     */
    ACCENT_BASE_HEIGHT,
    /**
     * flattenedAccentBaseHeight
     */
    FLATTENED_ACCENT_BASE_HEIGHT,
    /**
     * subscriptShiftDown
     */
    SUBSCRIPT_SHIFT_DOWN,
    /**
     * subscriptTopMax
     */
    SUBSCRIPT_TOP_MAX,
    /**
     * subscriptBaselineDropMin
     */
    SUBSCRIPT_BASELINE_DROP_MIN,
    /**
     * superscriptShiftUp
     */
    SUPERSCRIPT_SHIFT_UP,
    /**
     * superscriptShiftUpCramped
     */
    SUPERSCRIPT_SHIFT_UP_CRAMPED,
    /**
     * superscriptBottomMin
     */
    SUPERSCRIPT_BOTTOM_MIN,
    /**
     * superscriptBaselineDropMax
     */
    SUPERSCRIPT_BASELINE_DROP_MAX,
    /**
     * subSuperscriptGapMin
     */
    SUB_SUPERSCRIPT_GAP_MIN,
    /**
     * superscriptBottomMaxWithSubscript
     */
    SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT,
    /**
     * spaceAfterScript
     */
    SPACE_AFTER_SCRIPT,
    /**
     * upperLimitGapMin
     */
    UPPER_LIMIT_GAP_MIN,
    /**
     * upperLimitBaselineRiseMin
     */
    UPPER_LIMIT_BASELINE_RISE_MIN,
    /**
     * lowerLimitGapMin
     */
    LOWER_LIMIT_GAP_MIN,
    /**
     * lowerLimitBaselineDropMin
     */
    LOWER_LIMIT_BASELINE_DROP_MIN,
    /**
     * stackTopShiftUp
     */
    STACK_TOP_SHIFT_UP,
    /**
     * stackTopDisplayStyleShiftUp
     */
    STACK_TOP_DISPLAY_STYLE_SHIFT_UP,
    /**
     * stackBottomShiftDown
     */
    STACK_BOTTOM_SHIFT_DOWN,
    /**
     * stackBottomDisplayStyleShiftDown
     */
    STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN,
    /**
     * stackGapMin
     */
    STACK_GAP_MIN,
    /**
     * stackDisplayStyleGapMin
     */
    STACK_DISPLAY_STYLE_GAP_MIN,
    /**
     * stretchStackTopShiftUp
     */
    STRETCH_STACK_TOP_SHIFT_UP,
    /**
     * stretchStackBottomShiftDown
     */
    STRETCH_STACK_BOTTOM_SHIFT_DOWN,
    /**
     * stretchStackGapAboveMin
     */
    STRETCH_STACK_GAP_ABOVE_MIN,
    /**
     * stretchStackGapBelowMin
     */
    STRETCH_STACK_GAP_BELOW_MIN,
    /**
     * fractionNumeratorShiftUp
     */
    FRACTION_NUMERATOR_SHIFT_UP,
    /**
     * fractionNumeratorDisplayStyleShiftUp
     */
    FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP,
    /**
     * fractionDenominatorShiftDown
     */
    FRACTION_DENOMINATOR_SHIFT_DOWN,
    /**
     * fractionDenominatorDisplayStyleShiftDown
     */
    FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN,
    /**
     * fractionNumeratorGapMin
     */
    FRACTION_NUMERATOR_GAP_MIN,
    /**
     * fractionNumDisplayStyleGapMin
     */
    FRACTION_NUM_DISPLAY_STYLE_GAP_MIN,
    /**
     * fractionRuleThickness
     */
    FRACTION_RULE_THICKNESS,
    /**
     * fractionDenominatorGapMin
     */
    FRACTION_DENOMINATOR_GAP_MIN,
    /**
     * fractionDenomDisplayStyleGapMin
     */
    FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN,
    /**
     * skewedFractionHorizontalGap
     */
    SKEWED_FRACTION_HORIZONTAL_GAP,
    /**
     * skewedFractionVerticalGap
     */
    SKEWED_FRACTION_VERTICAL_GAP,
    /**
     * overbarVerticalGap
     */
    OVERBAR_VERTICAL_GAP,
    /**
     * overbarRuleThickness
     */
    OVERBAR_RULE_THICKNESS,
    /**
     * overbarExtraAscender
     */
    OVERBAR_EXTRA_ASCENDER,
    /**
     * underbarVerticalGap
     */
    UNDERBAR_VERTICAL_GAP,
    /**
     * underbarRuleThickness
     */
    UNDERBAR_RULE_THICKNESS,
    /**
     * underbarExtraDescender
     */
    UNDERBAR_EXTRA_DESCENDER,
    /**
     * radicalVerticalGap
     */
    RADICAL_VERTICAL_GAP,
    /**
     * radicalDisplayStyleVerticalGap
     */
    RADICAL_DISPLAY_STYLE_VERTICAL_GAP,
    /**
     * radicalRuleThickness
     */
    RADICAL_RULE_THICKNESS,
    /**
     * radicalExtraAscender
     */
    RADICAL_EXTRA_ASCENDER,
    /**
     * radicalKernBeforeDegree
     */
    RADICAL_KERN_BEFORE_DEGREE,
    /**
     * radicalKernAfterDegree
     */
    RADICAL_KERN_AFTER_DEGREE,
    /**
     * radicalDegreeBottomRaisePercent
     */
    RADICAL_DEGREE_BOTTOM_RAISE_PERCENT,
  }
  /**
   * The math kerning-table types defined for the four corners
   * of a glyph.
   */
  enum ot_math_kern_t {
    /**
     * The top right corner of the glyph.
     */
    TOP_RIGHT,
    /**
     * The top left corner of the glyph.
     */
    TOP_LEFT,
    /**
     * The bottom right corner of the glyph.
     */
    BOTTOM_RIGHT,
    /**
     * The bottom left corner of the glyph.
     */
    BOTTOM_LEFT,
  }
  /**
   * Known metadata tags from https://docs.microsoft.com/en-us/typography/opentype/spec/meta
   */
  enum ot_meta_tag_t {
    /**
     * Design languages. Text, using only
     * Basic Latin (ASCII) characters. Indicates languages and/or scripts
     * for the user audiences that the font was primarily designed for.
     */
    DESIGN_LANGUAGES,
    /**
     * Supported languages. Text, using
     * only Basic Latin (ASCII) characters. Indicates languages and/or scripts
     * that the font is declared to be capable of supporting.
     */
    SUPPORTED_LANGUAGES,
  }
  /**
   * Metric tags corresponding to [MVAR Value
   * Tags](https://docs.microsoft.com/en-us/typography/opentype/spec/mvar#value-tags)
   */
  enum ot_metrics_tag_t {
    /**
     * horizontal ascender.
     */
    HORIZONTAL_ASCENDER,
    /**
     * horizontal descender.
     */
    HORIZONTAL_DESCENDER,
    /**
     * horizontal line gap.
     */
    HORIZONTAL_LINE_GAP,
    /**
     * horizontal clipping ascent.
     */
    HORIZONTAL_CLIPPING_ASCENT,
    /**
     * horizontal clipping descent.
     */
    HORIZONTAL_CLIPPING_DESCENT,
    /**
     * vertical ascender.
     */
    VERTICAL_ASCENDER,
    /**
     * vertical descender.
     */
    VERTICAL_DESCENDER,
    /**
     * vertical line gap.
     */
    VERTICAL_LINE_GAP,
    /**
     * horizontal caret rise.
     */
    HORIZONTAL_CARET_RISE,
    /**
     * horizontal caret run.
     */
    HORIZONTAL_CARET_RUN,
    /**
     * horizontal caret offset.
     */
    HORIZONTAL_CARET_OFFSET,
    /**
     * vertical caret rise.
     */
    VERTICAL_CARET_RISE,
    /**
     * vertical caret run.
     */
    VERTICAL_CARET_RUN,
    /**
     * vertical caret offset.
     */
    VERTICAL_CARET_OFFSET,
    /**
     * x height.
     */
    X_HEIGHT,
    /**
     * cap height.
     */
    CAP_HEIGHT,
    /**
     * subscript em x size.
     */
    SUBSCRIPT_EM_X_SIZE,
    /**
     * subscript em y size.
     */
    SUBSCRIPT_EM_Y_SIZE,
    /**
     * subscript em x offset.
     */
    SUBSCRIPT_EM_X_OFFSET,
    /**
     * subscript em y offset.
     */
    SUBSCRIPT_EM_Y_OFFSET,
    /**
     * superscript em x size.
     */
    SUPERSCRIPT_EM_X_SIZE,
    /**
     * superscript em y size.
     */
    SUPERSCRIPT_EM_Y_SIZE,
    /**
     * superscript em x offset.
     */
    SUPERSCRIPT_EM_X_OFFSET,
    /**
     * superscript em y offset.
     */
    SUPERSCRIPT_EM_Y_OFFSET,
    /**
     * strikeout size.
     */
    STRIKEOUT_SIZE,
    /**
     * strikeout offset.
     */
    STRIKEOUT_OFFSET,
    /**
     * underline size.
     */
    UNDERLINE_SIZE,
    /**
     * underline offset.
     */
    UNDERLINE_OFFSET,
  }
  /**
   * An enum type representing the pre-defined name IDs.
   *
   * For more information on these fields, see the
   * [OpenType spec](https://docs.microsoft.com/en-us/typography/opentype/spec/name#name-ids).
   */
  enum ot_name_id_predefined_t {
    /**
     * Copyright notice
     */
    COPYRIGHT,
    /**
     * Font Family name
     */
    FONT_FAMILY,
    /**
     * Font Subfamily name
     */
    FONT_SUBFAMILY,
    /**
     * Unique font identifier
     */
    UNIQUE_ID,
    /**
     * Full font name that reflects
     * all family and relevant subfamily descriptors
     */
    FULL_NAME,
    /**
     * Version string
     */
    VERSION_STRING,
    /**
     * PostScript name for the font
     */
    POSTSCRIPT_NAME,
    /**
     * Trademark
     */
    TRADEMARK,
    /**
     * Manufacturer Name
     */
    MANUFACTURER,
    /**
     * Designer
     */
    DESIGNER,
    /**
     * Description
     */
    DESCRIPTION,
    /**
     * URL of font vendor
     */
    VENDOR_URL,
    /**
     * URL of typeface designer
     */
    DESIGNER_URL,
    /**
     * License Description
     */
    LICENSE,
    /**
     * URL where additional licensing
     * information can be found
     */
    LICENSE_URL,
    /**
     * Typographic Family name
     */
    TYPOGRAPHIC_FAMILY,
    /**
     * Typographic Subfamily name
     */
    TYPOGRAPHIC_SUBFAMILY,
    /**
     * Compatible Full Name for MacOS
     */
    MAC_FULL_NAME,
    /**
     * Sample text
     */
    SAMPLE_TEXT,
    /**
     * PostScript CID findfont name
     */
    CID_FINDFONT_NAME,
    /**
     * WWS Family Name
     */
    WWS_FAMILY,
    /**
     * WWS Subfamily Name
     */
    WWS_SUBFAMILY,
    /**
     * Light Background Palette
     */
    LIGHT_BACKGROUND,
    /**
     * Dark Background Palette
     */
    DARK_BACKGROUND,
    /**
     * Variations PostScript Name Prefix
     */
    VARIATIONS_PS_PREFIX,
    /**
     * Value to represent a nonexistent name ID.
     */
    INVALID,
  }
  /**
   * The values of this enumeration describe the compositing modes
   * that can be used when combining temporary redirected drawing
   * with the backdrop.
   *
   * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
   * section for details.
   */
  enum paint_composite_mode_t {
    /**
     * clear destination layer (bounded)
     */
    CLEAR,
    /**
     * replace destination layer (bounded)
     */
    SRC,
    /**
     * ignore the source
     */
    DEST,
    /**
     * draw source layer on top of destination layer
     * (bounded)
     */
    SRC_OVER,
    /**
     * draw destination on top of source
     */
    DEST_OVER,
    /**
     * draw source where there was destination content
     * (unbounded)
     */
    SRC_IN,
    /**
     * leave destination only where there was
     * source content (unbounded)
     */
    DEST_IN,
    /**
     * draw source where there was no destination
     * content (unbounded)
     */
    SRC_OUT,
    /**
     * leave destination only where there was no
     * source content
     */
    DEST_OUT,
    /**
     * draw source on top of destination content and
     * only there
     */
    SRC_ATOP,
    /**
     * leave destination on top of source content
     * and only there (unbounded)
     */
    DEST_ATOP,
    /**
     * source and destination are shown where there is only
     * one of them
     */
    XOR,
    /**
     * source and destination layers are accumulated
     */
    PLUS,
    /**
     * source and destination are complemented and
     * multiplied. This causes the result to be at least as light as the lighter
     * inputs.
     */
    SCREEN,
    /**
     * multiplies or screens, depending on the
     * lightness of the destination color.
     */
    OVERLAY,
    /**
     * replaces the destination with the source if it
     * is darker, otherwise keeps the source.
     */
    DARKEN,
    /**
     * replaces the destination with the source if it
     * is lighter, otherwise keeps the source.
     */
    LIGHTEN,
    /**
     * brightens the destination color to reflect
     * the source color.
     */
    COLOR_DODGE,
    /**
     * darkens the destination color to reflect
     * the source color.
     */
    COLOR_BURN,
    /**
     * Multiplies or screens, dependent on source
     * color.
     */
    HARD_LIGHT,
    /**
     * Darkens or lightens, dependent on source
     * color.
     */
    SOFT_LIGHT,
    /**
     * Takes the difference of the source and
     * destination color.
     */
    DIFFERENCE,
    /**
     * Produces an effect similar to difference, but
     * with lower contrast.
     */
    EXCLUSION,
    /**
     * source and destination layers are multiplied.
     * This causes the result to be at least as dark as the darker inputs.
     */
    MULTIPLY,
    /**
     * Creates a color with the hue of the source
     * and the saturation and luminosity of the target.
     */
    HSL_HUE,
    /**
     * Creates a color with the saturation
     * of the source and the hue and luminosity of the target. Painting with
     * this mode onto a gray area produces no change.
     */
    HSL_SATURATION,
    /**
     * Creates a color with the hue and saturation
     * of the source and the luminosity of the target. This preserves the gray
     * levels of the target and is useful for coloring monochrome images or
     * tinting color images.
     */
    HSL_COLOR,
    /**
     * Creates a color with the luminosity of
     * the source and the hue and saturation of the target. This produces an
     * inverse effect to `HB_PAINT_COMPOSITE_MODE_HSL_COLOR`.
     */
    HSL_LUMINOSITY,
  }
  /**
   * The values of this enumeration determine how color values
   * outside the minimum and maximum defined offset on a #hb_color_line_t
   * are determined.
   *
   * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
   * section for details.
   */
  enum paint_extend_t {
    /**
     * Outside the defined interval,
     *   the color of the closest color stop is used.
     */
    PAD,
    /**
     * The color line is repeated over
     *   repeated multiples of the defined interval
     */
    REPEAT,
    /**
     * The color line is repeated over
     *      repeated intervals, as for the repeat mode.
     *      However, in each repeated interval, the ordering of
     *      color stops is the reverse of the adjacent interval.
     */
    REFLECT,
  }
  /**
   * Data type for scripts. Each #hb_script_t's value is an #hb_tag_t corresponding
   * to the four-letter values defined by [ISO 15924](https://unicode.org/iso15924/).
   *
   * See also the Script (sc) property of the Unicode Character Database.
   */
  enum script_t {
    /**
     * `Zyyy`
     */
    COMMON,
    /**
     * `Zinh`
     */
    INHERITED,
    /**
     * `Zzzz`
     */
    UNKNOWN,
    /**
     * `Arab`
     */
    ARABIC,
    /**
     * `Armn`
     */
    ARMENIAN,
    /**
     * `Beng`
     */
    BENGALI,
    /**
     * `Cyrl`
     */
    CYRILLIC,
    /**
     * `Deva`
     */
    DEVANAGARI,
    /**
     * `Geor`
     */
    GEORGIAN,
    /**
     * `Grek`
     */
    GREEK,
    /**
     * `Gujr`
     */
    GUJARATI,
    /**
     * `Guru`
     */
    GURMUKHI,
    /**
     * `Hang`
     */
    HANGUL,
    /**
     * `Hani`
     */
    HAN,
    /**
     * `Hebr`
     */
    HEBREW,
    /**
     * `Hira`
     */
    HIRAGANA,
    /**
     * `Knda`
     */
    KANNADA,
    /**
     * `Kana`
     */
    KATAKANA,
    /**
     * `Laoo`
     */
    LAO,
    /**
     * `Latn`
     */
    LATIN,
    /**
     * `Mlym`
     */
    MALAYALAM,
    /**
     * `Orya`
     */
    ORIYA,
    /**
     * `Taml`
     */
    TAMIL,
    /**
     * `Telu`
     */
    TELUGU,
    /**
     * `Thai`
     */
    THAI,
    /**
     * `Tibt`
     */
    TIBETAN,
    /**
     * `Bopo`
     */
    BOPOMOFO,
    /**
     * `Brai`
     */
    BRAILLE,
    /**
     * `Cans`
     */
    CANADIAN_SYLLABICS,
    /**
     * `Cher`
     */
    CHEROKEE,
    /**
     * `Ethi`
     */
    ETHIOPIC,
    /**
     * `Khmr`
     */
    KHMER,
    /**
     * `Mong`
     */
    MONGOLIAN,
    /**
     * `Mymr`
     */
    MYANMAR,
    /**
     * `Ogam`
     */
    OGHAM,
    /**
     * `Runr`
     */
    RUNIC,
    /**
     * `Sinh`
     */
    SINHALA,
    /**
     * `Syrc`
     */
    SYRIAC,
    /**
     * `Thaa`
     */
    THAANA,
    /**
     * `Yiii`
     */
    YI,
    /**
     * `Dsrt`
     */
    DESERET,
    /**
     * `Goth`
     */
    GOTHIC,
    /**
     * `Ital`
     */
    OLD_ITALIC,
    /**
     * `Buhd`
     */
    BUHID,
    /**
     * `Hano`
     */
    HANUNOO,
    /**
     * `Tglg`
     */
    TAGALOG,
    /**
     * `Tagb`
     */
    TAGBANWA,
    /**
     * `Cprt`
     */
    CYPRIOT,
    /**
     * `Limb`
     */
    LIMBU,
    /**
     * `Linb`
     */
    LINEAR_B,
    /**
     * `Osma`
     */
    OSMANYA,
    /**
     * `Shaw`
     */
    SHAVIAN,
    /**
     * `Tale`
     */
    TAI_LE,
    /**
     * `Ugar`
     */
    UGARITIC,
    /**
     * `Bugi`
     */
    BUGINESE,
    /**
     * `Copt`
     */
    COPTIC,
    /**
     * `Glag`
     */
    GLAGOLITIC,
    /**
     * `Khar`
     */
    KHAROSHTHI,
    /**
     * `Talu`
     */
    NEW_TAI_LUE,
    /**
     * `Xpeo`
     */
    OLD_PERSIAN,
    /**
     * `Sylo`
     */
    SYLOTI_NAGRI,
    /**
     * `Tfng`
     */
    TIFINAGH,
    /**
     * `Bali`
     */
    BALINESE,
    /**
     * `Xsux`
     */
    CUNEIFORM,
    /**
     * `Nkoo`
     */
    NKO,
    /**
     * `Phag`
     */
    PHAGS_PA,
    /**
     * `Phnx`
     */
    PHOENICIAN,
    /**
     * `Cari`
     */
    CARIAN,
    /**
     * `Cham`
     */
    CHAM,
    /**
     * `Kali`
     */
    KAYAH_LI,
    /**
     * `Lepc`
     */
    LEPCHA,
    /**
     * `Lyci`
     */
    LYCIAN,
    /**
     * `Lydi`
     */
    LYDIAN,
    /**
     * `Olck`
     */
    OL_CHIKI,
    /**
     * `Rjng`
     */
    REJANG,
    /**
     * `Saur`
     */
    SAURASHTRA,
    /**
     * `Sund`
     */
    SUNDANESE,
    /**
     * `Vaii`
     */
    VAI,
    /**
     * `Avst`
     */
    AVESTAN,
    /**
     * `Bamu`
     */
    BAMUM,
    /**
     * `Egyp`
     */
    EGYPTIAN_HIEROGLYPHS,
    /**
     * `Armi`
     */
    IMPERIAL_ARAMAIC,
    /**
     * `Phli`
     */
    INSCRIPTIONAL_PAHLAVI,
    /**
     * `Prti`
     */
    INSCRIPTIONAL_PARTHIAN,
    /**
     * `Java`
     */
    JAVANESE,
    /**
     * `Kthi`
     */
    KAITHI,
    /**
     * `Lisu`
     */
    LISU,
    /**
     * `Mtei`
     */
    MEETEI_MAYEK,
    /**
     * `Sarb`
     */
    OLD_SOUTH_ARABIAN,
    /**
     * `Orkh`
     */
    OLD_TURKIC,
    /**
     * `Samr`
     */
    SAMARITAN,
    /**
     * `Lana`
     */
    TAI_THAM,
    /**
     * `Tavt`
     */
    TAI_VIET,
    /**
     * `Batk`
     */
    BATAK,
    /**
     * `Brah`
     */
    BRAHMI,
    /**
     * `Mand`
     */
    MANDAIC,
    /**
     * `Cakm`
     */
    CHAKMA,
    /**
     * `Merc`
     */
    MEROITIC_CURSIVE,
    /**
     * `Mero`
     */
    MEROITIC_HIEROGLYPHS,
    /**
     * `Plrd`
     */
    MIAO,
    /**
     * `Shrd`
     */
    SHARADA,
    /**
     * `Sora`
     */
    SORA_SOMPENG,
    /**
     * `Takr`
     */
    TAKRI,
    /**
     * `Bass`, Since: 0.9.30
     */
    BASSA_VAH,
    /**
     * `Aghb`, Since: 0.9.30
     */
    CAUCASIAN_ALBANIAN,
    /**
     * `Dupl`, Since: 0.9.30
     */
    DUPLOYAN,
    /**
     * `Elba`, Since: 0.9.30
     */
    ELBASAN,
    /**
     * `Gran`, Since: 0.9.30
     */
    GRANTHA,
    /**
     * `Khoj`, Since: 0.9.30
     */
    KHOJKI,
    /**
     * `Sind`, Since: 0.9.30
     */
    KHUDAWADI,
    /**
     * `Lina`, Since: 0.9.30
     */
    LINEAR_A,
    /**
     * `Mahj`, Since: 0.9.30
     */
    MAHAJANI,
    /**
     * `Mani`, Since: 0.9.30
     */
    MANICHAEAN,
    /**
     * `Mend`, Since: 0.9.30
     */
    MENDE_KIKAKUI,
    /**
     * `Modi`, Since: 0.9.30
     */
    MODI,
    /**
     * `Mroo`, Since: 0.9.30
     */
    MRO,
    /**
     * `Nbat`, Since: 0.9.30
     */
    NABATAEAN,
    /**
     * `Narb`, Since: 0.9.30
     */
    OLD_NORTH_ARABIAN,
    /**
     * `Perm`, Since: 0.9.30
     */
    OLD_PERMIC,
    /**
     * `Hmng`, Since: 0.9.30
     */
    PAHAWH_HMONG,
    /**
     * `Palm`, Since: 0.9.30
     */
    PALMYRENE,
    /**
     * `Pauc`, Since: 0.9.30
     */
    PAU_CIN_HAU,
    /**
     * `Phlp`, Since: 0.9.30
     */
    PSALTER_PAHLAVI,
    /**
     * `Sidd`, Since: 0.9.30
     */
    SIDDHAM,
    /**
     * `Tirh`, Since: 0.9.30
     */
    TIRHUTA,
    /**
     * `Wara`, Since: 0.9.30
     */
    WARANG_CITI,
    /**
     * `Ahom`, Since: 0.9.30
     */
    AHOM,
    /**
     * `Hluw`, Since: 0.9.30
     */
    ANATOLIAN_HIEROGLYPHS,
    /**
     * `Hatr`, Since: 0.9.30
     */
    HATRAN,
    /**
     * `Mult`, Since: 0.9.30
     */
    MULTANI,
    /**
     * `Hung`, Since: 0.9.30
     */
    OLD_HUNGARIAN,
    /**
     * `Sgnw`, Since: 0.9.30
     */
    SIGNWRITING,
    /**
     * `Adlm`, Since: 1.3.0
     */
    ADLAM,
    /**
     * `Bhks`, Since: 1.3.0
     */
    BHAIKSUKI,
    /**
     * `Marc`, Since: 1.3.0
     */
    MARCHEN,
    /**
     * `Osge`, Since: 1.3.0
     */
    OSAGE,
    /**
     * `Tang`, Since: 1.3.0
     */
    TANGUT,
    /**
     * `Newa`, Since: 1.3.0
     */
    NEWA,
    /**
     * `Gonm`, Since: 1.6.0
     */
    MASARAM_GONDI,
    /**
     * `Nshu`, Since: 1.6.0
     */
    NUSHU,
    /**
     * `Soyo`, Since: 1.6.0
     */
    SOYOMBO,
    /**
     * `Zanb`, Since: 1.6.0
     */
    ZANABAZAR_SQUARE,
    /**
     * `Dogr`, Since: 1.8.0
     */
    DOGRA,
    /**
     * `Gong`, Since: 1.8.0
     */
    GUNJALA_GONDI,
    /**
     * `Rohg`, Since: 1.8.0
     */
    HANIFI_ROHINGYA,
    /**
     * `Maka`, Since: 1.8.0
     */
    MAKASAR,
    /**
     * `Medf`, Since: 1.8.0
     */
    MEDEFAIDRIN,
    /**
     * `Sogo`, Since: 1.8.0
     */
    OLD_SOGDIAN,
    /**
     * `Sogd`, Since: 1.8.0
     */
    SOGDIAN,
    /**
     * `Elym`, Since: 2.4.0
     */
    ELYMAIC,
    /**
     * `Nand`, Since: 2.4.0
     */
    NANDINAGARI,
    /**
     * `Hmnp`, Since: 2.4.0
     */
    NYIAKENG_PUACHUE_HMONG,
    /**
     * `Wcho`, Since: 2.4.0
     */
    WANCHO,
    /**
     * `Chrs`, Since: 2.6.7
     */
    CHORASMIAN,
    /**
     * `Diak`, Since: 2.6.7
     */
    DIVES_AKURU,
    /**
     * `Kits`, Since: 2.6.7
     */
    KHITAN_SMALL_SCRIPT,
    /**
     * `Yezi`, Since: 2.6.7
     */
    YEZIDI,
    /**
     * `Cpmn`, Since: 3.0.0
     */
    CYPRO_MINOAN,
    /**
     * `Ougr`, Since: 3.0.0
     */
    OLD_UYGHUR,
    /**
     * `Tnsa`, Since: 3.0.0
     */
    TANGSA,
    /**
     * `Toto`, Since: 3.0.0
     */
    TOTO,
    /**
     * `Vith`, Since: 3.0.0
     */
    VITHKUQI,
    /**
     * `Zmth`, Since: 3.4.0
     */
    MATH,
    /**
     * `Kawi`, Since: 5.2.0
     */
    KAWI,
    /**
     * `Nagm`, Since: 5.2.0
     */
    NAG_MUNDARI,
    /**
     * No script set
     */
    INVALID,
  }
  /**
   * Defined by [OpenType Design-Variation Axis Tag Registry](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg).
   */
  enum style_tag_t {
    /**
     * Used to vary between non-italic and italic.
     * A value of 0 can be interpreted as "Roman" (non-italic); a value of 1 can
     * be interpreted as (fully) italic.
     */
    ITALIC,
    /**
     * Used to vary design to suit different text sizes.
     * Non-zero. Values can be interpreted as text size, in points.
     */
    OPTICAL_SIZE,
    /**
     * Used to vary between upright and slanted text. Values
     * must be greater than -90 and less than +90. Values can be interpreted as
     * the angle, in counter-clockwise degrees, of oblique slant from whatever the
     * designer considers to be upright for that font design. Typical right-leaning
     * Italic fonts have a negative slant angle (typically around -12)
     */
    SLANT_ANGLE,
    /**
     * same as `HB_STYLE_TAG_SLANT_ANGLE` expression as ratio.
     * Typical right-leaning Italic fonts have a positive slant ratio (typically around 0.2)
     */
    SLANT_RATIO,
    /**
     * Used to vary width of text from narrower to wider.
     * Non-zero. Values can be interpreted as a percentage of whatever the font
     * designer considers “normal width” for that font design.
     */
    WIDTH,
    /**
     * Used to vary stroke thicknesses or other design details
     * to give variation from lighter to blacker. Values can be interpreted in direct
     * comparison to values for usWeightClass in the OS/2 table,
     * or the CSS font-weight property.
     */
    WEIGHT,
  }
  /**
   * Data type for the Canonical_Combining_Class (ccc) property
   * from the Unicode Character Database.
   *
   * <note>Note: newer versions of Unicode may add new values.
   * Client programs should be ready to handle any value in the 0..254 range
   * being returned from hb_unicode_combining_class().</note>
   */
  enum unicode_combining_class_t {
    /**
     * Spacing and enclosing marks; also many vowel and consonant signs, even if nonspacing
     */
    NOT_REORDERED,
    /**
     * Marks which overlay a base letter or symbol
     */
    OVERLAY,
    /**
     * Diacritic nukta marks in Brahmi-derived scripts
     */
    NUKTA,
    /**
     * Hiragana/Katakana voicing marks
     */
    KANA_VOICING,
    /**
     * Viramas
     */
    VIRAMA,
    /**
     * [Hebrew]
     */
    CCC10,
    /**
     * [Hebrew]
     */
    CCC11,
    /**
     * [Hebrew]
     */
    CCC12,
    /**
     * [Hebrew]
     */
    CCC13,
    /**
     * [Hebrew]
     */
    CCC14,
    /**
     * [Hebrew]
     */
    CCC15,
    /**
     * [Hebrew]
     */
    CCC16,
    /**
     * [Hebrew]
     */
    CCC17,
    /**
     * [Hebrew]
     */
    CCC18,
    /**
     * [Hebrew]
     */
    CCC19,
    /**
     * [Hebrew]
     */
    CCC20,
    /**
     * [Hebrew]
     */
    CCC21,
    /**
     * [Hebrew]
     */
    CCC22,
    /**
     * [Hebrew]
     */
    CCC23,
    /**
     * [Hebrew]
     */
    CCC24,
    /**
     * [Hebrew]
     */
    CCC25,
    /**
     * [Hebrew]
     */
    CCC26,
    /**
     * [Arabic]
     */
    CCC27,
    /**
     * [Arabic]
     */
    CCC28,
    /**
     * [Arabic]
     */
    CCC29,
    /**
     * [Arabic]
     */
    CCC30,
    /**
     * [Arabic]
     */
    CCC31,
    /**
     * [Arabic]
     */
    CCC32,
    /**
     * [Arabic]
     */
    CCC33,
    /**
     * [Arabic]
     */
    CCC34,
    /**
     * [Arabic]
     */
    CCC35,
    /**
     * [Syriac]
     */
    CCC36,
    /**
     * [Telugu]
     */
    CCC84,
    /**
     * [Telugu]
     */
    CCC91,
    /**
     * [Thai]
     */
    CCC103,
    /**
     * [Thai]
     */
    CCC107,
    /**
     * [Lao]
     */
    CCC118,
    /**
     * [Lao]
     */
    CCC122,
    /**
     * [Tibetan]
     */
    CCC129,
    /**
     * [Tibetan]
     */
    CCC130,
    /**
     * [Tibetan] Since: 7.2.0
     */
    CCC132,
    /**
     * Marks attached at the bottom left
     */
    ATTACHED_BELOW_LEFT,
    /**
     * Marks attached directly below
     */
    ATTACHED_BELOW,
    /**
     * Marks attached directly above
     */
    ATTACHED_ABOVE,
    /**
     * Marks attached at the top right
     */
    ATTACHED_ABOVE_RIGHT,
    /**
     * Distinct marks at the bottom left
     */
    BELOW_LEFT,
    /**
     * Distinct marks directly below
     */
    BELOW,
    /**
     * Distinct marks at the bottom right
     */
    BELOW_RIGHT,
    /**
     * Distinct marks to the left
     */
    LEFT,
    /**
     * Distinct marks to the right
     */
    RIGHT,
    /**
     * Distinct marks at the top left
     */
    ABOVE_LEFT,
    /**
     * Distinct marks directly above
     */
    ABOVE,
    /**
     * Distinct marks at the top right
     */
    ABOVE_RIGHT,
    /**
     * Distinct marks subtending two bases
     */
    DOUBLE_BELOW,
    /**
     * Distinct marks extending above two bases
     */
    DOUBLE_ABOVE,
    /**
     * Greek iota subscript only
     */
    IOTA_SUBSCRIPT,
    /**
     * Invalid combining class
     */
    INVALID,
  }
  /**
   * Data type for the "General_Category" (gc) property from
   * the Unicode Character Database.
   */
  enum unicode_general_category_t {
    /**
     * [Cc]
     */
    CONTROL,
    /**
     * [Cf]
     */
    FORMAT,
    /**
     * [Cn]
     */
    UNASSIGNED,
    /**
     * [Co]
     */
    PRIVATE_USE,
    /**
     * [Cs]
     */
    SURROGATE,
    /**
     * [Ll]
     */
    LOWERCASE_LETTER,
    /**
     * [Lm]
     */
    MODIFIER_LETTER,
    /**
     * [Lo]
     */
    OTHER_LETTER,
    /**
     * [Lt]
     */
    TITLECASE_LETTER,
    /**
     * [Lu]
     */
    UPPERCASE_LETTER,
    /**
     * [Mc]
     */
    SPACING_MARK,
    /**
     * [Me]
     */
    ENCLOSING_MARK,
    /**
     * [Mn]
     */
    NON_SPACING_MARK,
    /**
     * [Nd]
     */
    DECIMAL_NUMBER,
    /**
     * [Nl]
     */
    LETTER_NUMBER,
    /**
     * [No]
     */
    OTHER_NUMBER,
    /**
     * [Pc]
     */
    CONNECT_PUNCTUATION,
    /**
     * [Pd]
     */
    DASH_PUNCTUATION,
    /**
     * [Pe]
     */
    CLOSE_PUNCTUATION,
    /**
     * [Pf]
     */
    FINAL_PUNCTUATION,
    /**
     * [Pi]
     */
    INITIAL_PUNCTUATION,
    /**
     * [Po]
     */
    OTHER_PUNCTUATION,
    /**
     * [Ps]
     */
    OPEN_PUNCTUATION,
    /**
     * [Sc]
     */
    CURRENCY_SYMBOL,
    /**
     * [Sk]
     */
    MODIFIER_SYMBOL,
    /**
     * [Sm]
     */
    MATH_SYMBOL,
    /**
     * [So]
     */
    OTHER_SYMBOL,
    /**
     * [Zl]
     */
    LINE_SEPARATOR,
    /**
     * [Zp]
     */
    PARAGRAPH_SEPARATOR,
    /**
     * [Zs]
     */
    SPACE_SEPARATOR,
  }
  /**
   * Flags from comparing two #hb_buffer_t's.
   *
   * Buffer with different #hb_buffer_content_type_t cannot be meaningfully
   * compared in any further detail.
   *
   * For buffers with differing length, the per-glyph comparison is not
   * attempted, though we do still scan reference buffer for dotted circle and
   * `.notdef` glyphs.
   *
   * If the buffers have the same length, we compare them glyph-by-glyph and
   * report which aspect(s) of the glyph info/position are different.
   * @bitfield
   */
  enum buffer_diff_flags_t {
    /**
     * equal buffers.
     */
    EQUAL,
    /**
     * buffers with different
     *     #hb_buffer_content_type_t.
     */
    CONTENT_TYPE_MISMATCH,
    /**
     * buffers with differing length.
     */
    LENGTH_MISMATCH,
    /**
     * `.notdef` glyph is present in the
     *     reference buffer.
     */
    NOTDEF_PRESENT,
    /**
     * dotted circle glyph is present
     *     in the reference buffer.
     */
    DOTTED_CIRCLE_PRESENT,
    /**
     * difference in #hb_glyph_info_t.codepoint
     */
    CODEPOINT_MISMATCH,
    /**
     * difference in #hb_glyph_info_t.cluster
     */
    CLUSTER_MISMATCH,
    /**
     * difference in #hb_glyph_flags_t.
     */
    GLYPH_FLAGS_MISMATCH,
    /**
     * difference in #hb_glyph_position_t.
     */
    POSITION_MISMATCH,
  }
  /**
   * Flags for #hb_buffer_t.
   * @bitfield
   */
  enum buffer_flags_t {
    /**
     * the default buffer flag.
     */
    DEFAULT,
    /**
     * flag indicating that special handling of the beginning
     *                      of text paragraph can be applied to this buffer. Should usually
     *                      be set, unless you are passing to the buffer only part
     *                      of the text without the full context.
     */
    BOT,
    /**
     * flag indicating that special handling of the end of text
     *                      paragraph can be applied to this buffer, similar to
     *                      `HB_BUFFER_FLAG_BOT`.
     */
    EOT,
    /**
     * flag indication that character with Default_Ignorable
     *                      Unicode property should use the corresponding glyph
     *                      from the font, instead of hiding them (done by
     *                      replacing them with the space glyph and zeroing the
     *                      advance width.)  This flag takes precedence over
     *                      `HB_BUFFER_FLAG_REMOVE_DEFAULT_IGNORABLES`.
     */
    PRESERVE_DEFAULT_IGNORABLES,
    /**
     * flag indication that character with Default_Ignorable
     *                      Unicode property should be removed from glyph string
     *                      instead of hiding them (done by replacing them with the
     *                      space glyph and zeroing the advance width.)
     *                      `HB_BUFFER_FLAG_PRESERVE_DEFAULT_IGNORABLES` takes
     *                      precedence over this flag. Since: 1.8.0
     */
    REMOVE_DEFAULT_IGNORABLES,
    /**
     * flag indicating that a dotted circle should
     *                      not be inserted in the rendering of incorrect
     *                      character sequences (such at <0905 093E>). Since: 2.4.0
     */
    DO_NOT_INSERT_DOTTED_CIRCLE,
    /**
     * flag indicating that the hb_shape() call and its variants
     *                      should perform various verification processes on the results
     *                      of the shaping operation on the buffer.  If the verification
     *                      fails, then either a buffer message is sent, if a message
     *                      handler is installed on the buffer, or a message is written
     *                      to standard error.  In either case, the shaping result might
     *                      be modified to show the failed output. Since: 3.4.0
     */
    VERIFY,
    /**
     * flag indicating that the `HB_GLYPH_FLAG_UNSAFE_TO_CONCAT`
     *                      glyph-flag should be produced by the shaper. By default
     *                      it will not be produced since it incurs a cost. Since: 4.0.0
     */
    PRODUCE_UNSAFE_TO_CONCAT,
    /**
     * flag indicating that the `HB_GLYPH_FLAG_SAFE_TO_INSERT_TATWEEL`
     *                      glyph-flag should be produced by the shaper. By default
     *                      it will not be produced. Since: 5.1.0
     */
    PRODUCE_SAFE_TO_INSERT_TATWEEL,
    /**
     * All currently defined flags: Since: 4.4.0
     */
    DEFINED,
  }
  /**
   * Flags that control what glyph information are serialized in hb_buffer_serialize_glyphs().
   * @bitfield
   */
  enum buffer_serialize_flags_t {
    /**
     * serialize glyph names, clusters and positions.
     */
    DEFAULT,
    /**
     * do not serialize glyph cluster.
     */
    NO_CLUSTERS,
    /**
     * do not serialize glyph position information.
     */
    NO_POSITIONS,
    /**
     * do no serialize glyph name.
     */
    NO_GLYPH_NAMES,
    /**
     * serialize glyph extents.
     */
    GLYPH_EXTENTS,
    /**
     * serialize glyph flags. Since: 1.5.0
     */
    GLYPH_FLAGS,
    /**
     * do not serialize glyph advances,
     *  glyph offsets will reflect absolute glyph positions. Since: 1.8.0
     */
    NO_ADVANCES,
    /**
     * All currently defined flags. Since: 4.4.0
     */
    DEFINED,
  }
  /**
   * Flags for #hb_glyph_info_t.
   * @bitfield
   */
  enum glyph_flags_t {
    /**
     * Indicates that if input text is broken at the
     * 				   beginning of the cluster this glyph is part of,
     * 				   then both sides need to be re-shaped, as the
     * 				   result might be different.
     * 				   On the flip side, it means that when this
     * 				   flag is not present, then it is safe to break
     * 				   the glyph-run at the beginning of this
     * 				   cluster, and the two sides will represent the
     * 				   exact same result one would get if breaking
     * 				   input text at the beginning of this cluster
     * 				   and shaping the two sides separately.
     * 				   This can be used to optimize paragraph
     * 				   layout, by avoiding re-shaping of each line
     * 				   after line-breaking.
     */
    UNSAFE_TO_BREAK,
    /**
     * Indicates that if input text is changed on one
     * 				   side of the beginning of the cluster this glyph
     * 				   is part of, then the shaping results for the
     * 				   other side might change.
     * 				   Note that the absence of this flag will NOT by
     * 				   itself mean that it IS safe to concat text.
     * 				   Only two pieces of text both of which clear of
     * 				   this flag can be concatenated safely.
     * 				   This can be used to optimize paragraph
     * 				   layout, by avoiding re-shaping of each line
     * 				   after line-breaking, by limiting the
     * 				   reshaping to a small piece around the
     * 				   breaking position only, even if the breaking
     * 				   position carries the
     * 				   #HB_GLYPH_FLAG_UNSAFE_TO_BREAK or when
     * 				   hyphenation or other text transformation
     * 				   happens at line-break position, in the following
     * 				   way:
     * 				   1. Iterate back from the line-break position
     * 				   until the first cluster start position that is
     * 				   NOT unsafe-to-concat, 2. shape the segment from
     * 				   there till the end of line, 3. check whether the
     * 				   resulting glyph-run also is clear of the
     * 				   unsafe-to-concat at its start-of-text position;
     * 				   if it is, just splice it into place and the line
     * 				   is shaped; If not, move on to a position further
     * 				   back that is clear of unsafe-to-concat and retry
     * 				   from there, and repeat.
     * 				   At the start of next line a similar algorithm can
     * 				   be implemented. That is: 1. Iterate forward from
     * 				   the line-break position until the first cluster
     * 				   start position that is NOT unsafe-to-concat, 2.
     * 				   shape the segment from beginning of the line to
     * 				   that position, 3. check whether the resulting
     * 				   glyph-run also is clear of the unsafe-to-concat
     * 				   at its end-of-text position; if it is, just splice
     * 				   it into place and the beginning is shaped; If not,
     * 				   move on to a position further forward that is clear
     * 				   of unsafe-to-concat and retry up to there, and repeat.
     * 				   A slight complication will arise in the
     * 				   implementation of the algorithm above,
     * 				   because while our buffer API has a way to
     * 				   return flags for position corresponding to
     * 				   start-of-text, there is currently no position
     * 				   corresponding to end-of-text.  This limitation
     * 				   can be alleviated by shaping more text than needed
     * 				   and looking for unsafe-to-concat flag within text
     * 				   clusters.
     * 				   The #HB_GLYPH_FLAG_UNSAFE_TO_BREAK flag will
     * 				   always imply this flag.
     * 			   To use this flag, you must enable the buffer flag
     * 			   `HB_BUFFER_FLAG_PRODUCE_UNSAFE_TO_CONCAT` during
     * 			   shaping, otherwise the buffer flag will not be
     * 			   reliably produced.
     * 				   Since: 4.0.0
     */
    UNSAFE_TO_CONCAT,
    /**
     * In scripts that use elongation (Arabic,
     * 				   Mongolian, Syriac, etc.), this flag signifies
     * 				   that it is safe to insert a U+0640 TATWEEL
     * 				   character before this cluster for elongation.
     * 				   This flag does not determine the
     * 				   script-specific elongation places, but only
     * 				   when it is safe to do the elongation without
     * 				   interrupting text shaping.
     * 				   Since: 5.1.0
     */
    SAFE_TO_INSERT_TATWEEL,
    /**
     * All the currently defined flags.
     */
    DEFINED,
  }
  /**
   * Flags that describe the properties of color palette.
   * @bitfield
   */
  enum ot_color_palette_flags_t {
    /**
     * Default indicating that there is nothing special
     *   to note about a color palette.
     */
    DEFAULT,
    /**
     * Flag indicating that the color
     *   palette is appropriate to use when displaying the font on a light background such as white.
     */
    USABLE_WITH_LIGHT_BACKGROUND,
    /**
     * Flag indicating that the color
     *   palette is appropriate to use when displaying the font on a dark background such as black.
     */
    USABLE_WITH_DARK_BACKGROUND,
  }
  /**
   * Flags for math glyph parts.
   * @bitfield
   */
  enum ot_math_glyph_part_flags_t {
    /**
     * This is an extender glyph part that
     * can be repeated to reach the desired length.
     */
    EXTENDER,
  }
  /**
   * Flags for #hb_ot_var_axis_info_t.
   * @bitfield
   */
  enum ot_var_axis_flags_t {
    /**
     * The axis should not be exposed directly in user interfaces.
     */
    HIDDEN,
  }
  /**
   * Used when getting or setting AAT feature selectors. Indicates that
   * there is no selector index corresponding to the selector of interest.
   */
  const AAT_LAYOUT_NO_SELECTOR_INDEX: number
  /**
   * The default code point for replacing invalid characters in a given encoding.
   * Set to U+FFFD REPLACEMENT CHARACTER.
   */
  const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number
  /**
   * Unused #hb_codepoint_t value.
   */
  const CODEPOINT_INVALID: codepoint_t
  /**
   * Special setting for #hb_feature_t.start to apply the feature from the start
   * of the buffer.
   */
  const FEATURE_GLOBAL_START: number
  /**
   * Constant signifying that a font does not have any
   * named-instance index set.  This is the default of
   * a font.
   */
  const FONT_NO_VAR_NAMED_INSTANCE: number
  /**
   * An unset #hb_language_t.
   */
  const LANGUAGE_INVALID: language_t
  /**
   * Special value for language index indicating default or unsupported language.
   */
  const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number
  /**
   * Special value for feature index indicating unsupported feature.
   */
  const OT_LAYOUT_NO_FEATURE_INDEX: number
  /**
   * Special value for script index indicating unsupported script.
   */
  const OT_LAYOUT_NO_SCRIPT_INDEX: number
  /**
   * Special value for variations index indicating unsupported variation.
   */
  const OT_LAYOUT_NO_VARIATIONS_INDEX: number
  /**
   * Maximum number of OpenType tags that can correspond to a give #hb_language_t.
   */
  const OT_MAX_TAGS_PER_LANGUAGE: number
  /**
   * Maximum number of OpenType tags that can correspond to a give #hb_script_t.
   */
  const OT_MAX_TAGS_PER_SCRIPT: number
  /**
   * Do not use.
   */
  const OT_VAR_NO_AXIS_INDEX: number
  /**
   * [Tibetan]
   */
  const UNICODE_COMBINING_CLASS_CCC133: number
  /**
   * Maximum valid Unicode code point.
   */
  const UNICODE_MAX: number
  /**
   * See Unicode 6.1 for details on the maximum decomposition length.
   */
  const UNICODE_MAX_DECOMPOSITION_LEN: number
  const VERSION_MAJOR: number
  const VERSION_MICRO: number
  const VERSION_MINOR: number
  const VERSION_STRING: string
  /**
   * Fetches the name identifier of the specified feature type in the face's `name` table.
   * @param face #hb_face_t to work upon
   * @param featureType The #hb_aat_layout_feature_type_t of the requested feature type
   * @returns Name identifier of the requested feature type
   */
  function aatLayoutFeatureTypeGetNameId(
    face: face_t,
    featureType: aat_layout_feature_type_t
  ): ot_name_id_t
  /**
   * Fetches a list of the selectors available for the specified feature in the given face.
   *
   * If upon return, `default_index` is set to #HB_AAT_LAYOUT_NO_SELECTOR_INDEX, then
   * the feature type is non-exclusive.  Otherwise, `default_index` is the index of
   * the selector that is selected by default.
   * @param face #hb_face_t to work upon
   * @param featureType The #hb_aat_layout_feature_type_t of the requested feature type
   * @param startOffset offset of the first feature type to retrieve
   * @returns Number of all available feature selectors
   */
  function aatLayoutFeatureTypeGetSelectorInfos(
    face: face_t,
    featureType: aat_layout_feature_type_t,
    startOffset: number
  ): [
    /* returnType */ number,
    /* selectors */ aat_layout_feature_selector_info_t[],
    /* defaultIndex */ number,
  ]
  /**
   * Fetches a list of the AAT feature types included in the specified face.
   * @param face #hb_face_t to work upon
   * @param startOffset offset of the first feature type to retrieve
   * @returns Number of all available feature types.
   */
  function aatLayoutGetFeatureTypes(
    face: face_t,
    startOffset: number
  ): [/* returnType */ number, /* features */ aat_layout_feature_type_t[]]
  /**
   * Tests whether the specified face includes any positioning information
   * in the `kerx` table.
   *
   * <note>Note: does not examine the `GPOS` table.</note>
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function aatLayoutHasPositioning(face: face_t): bool_t
  /**
   * Tests whether the specified face includes any substitutions in the
   * `morx` or `mort` tables.
   *
   * <note>Note: does not examine the `GSUB` table.</note>
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function aatLayoutHasSubstitution(face: face_t): bool_t
  /**
   * Tests whether the specified face includes any tracking information
   * in the `trak` table.
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function aatLayoutHasTracking(face: face_t): bool_t
  /**
   * Makes a writable copy of `blob`.
   * @param blob A blob.
   * @returns The new blob, or nullptr if allocation failed
   */
  function blobCopyWritableOrFail(blob: blob_t): blob_t
  /**
   * Creates a new blob containing the data from the
   * specified binary font file.
   * @param fileName A font filename
   * @returns An #hb_blob_t pointer with the content of the file, or hb_blob_get_empty() if failed.
   */
  function blobCreateFromFile(fileName: string): blob_t
  /**
   * Creates a new blob containing the data from the
   * specified binary font file.
   * @param fileName A font filename
   * @returns An #hb_blob_t pointer with the content of the file, or `NULL` if failed.
   */
  function blobCreateFromFileOrFail(fileName: string): blob_t
  /**
   * Returns a blob that represents a range of bytes in `parent`.  The new
   * blob is always created with #HB_MEMORY_MODE_READONLY, meaning that it
   * will never modify data in the parent blob.  The parent data is not
   * expected to be modified, and will result in undefined behavior if it
   * is.
   *
   * Makes `parent` immutable.
   * @param parent Parent blob.
   * @param offset Start offset of sub-blob within `parent,` in bytes.
   * @param length Length of sub-blob.
   * @returns New blob, or the empty blob if something failed or if @length is zero or @offset is beyond the end of @parent's data.  Destroy with hb_blob_destroy().
   */
  function blobCreateSubBlob(
    parent: blob_t,
    offset: number,
    length: number
  ): blob_t
  /**
   * Fetches the data from a blob.
   * @param blob a blob.
   * @returns the byte data of @blob.
   */
  function blobGetData(blob: blob_t): string[] | null
  /**
   * Tries to make blob data writable (possibly copying it) and
   * return pointer to data.
   *
   * Fails if blob has been made immutable, or if memory allocation
   * fails.
   * @param blob a blob.
   * @returns Writable blob data, or `NULL` if failed.
   */
  function blobGetDataWritable(blob: blob_t): string[]
  /**
   * Returns the singleton empty blob.
   *
   * See TODO:link object types for more information.
   * @returns The empty blob.
   */
  function blobGetEmpty(): blob_t
  /**
   * Fetches the length of a blob's data.
   * @param blob a blob.
   * @returns the length of @blob data in bytes.
   */
  function blobGetLength(blob: blob_t): number
  /**
   * Tests whether a blob is immutable.
   * @param blob a blob.
   * @returns `true` if @blob is immutable, `false` otherwise
   */
  function blobIsImmutable(blob: blob_t): bool_t
  /**
   * Makes a blob immutable.
   * @param blob a blob
   */
  function blobMakeImmutable(blob: blob_t): void
  /**
   * Appends a character with the Unicode value of `codepoint` to `buffer,` and
   * gives it the initial cluster value of `cluster`. Clusters can be any thing
   * the client wants, they are usually used to refer to the index of the
   * character in the input text stream and are output in
   * #hb_glyph_info_t.cluster field.
   *
   * This function does not check the validity of `codepoint,` it is up to the
   * caller to ensure it is a valid Unicode code point.
   * @param buffer An #hb_buffer_t
   * @param codepoint A Unicode code point.
   * @param cluster The cluster value of `codepoint`.
   */
  function bufferAdd(
    buffer: buffer_t,
    codepoint: codepoint_t,
    cluster: number
  ): void
  /**
   * Appends characters from `text` array to `buffer`. The `item_offset` is the
   * position of the first character from `text` that will be appended, and
   * `item_length` is the number of character. When shaping part of a larger text
   * (e.g. a run of text from a paragraph), instead of passing just the substring
   * corresponding to the run, it is preferable to pass the whole
   * paragraph and specify the run start and length as `item_offset` and
   * `item_length,` respectively, to give HarfBuzz the full context to be able,
   * for example, to do cross-run Arabic shaping or properly handle combining
   * marks at stat of run.
   *
   * This function does not check the validity of `text,` it is up to the caller
   * to ensure it contains a valid Unicode scalar values.  In contrast,
   * hb_buffer_add_utf32() can be used that takes similar input but performs
   * sanity-check on the input.
   * @param buffer a #hb_buffer_t to append characters to.
   * @param text an array of Unicode code points to append.
   * @param itemOffset the offset of the first code point to add to the `buffer`.
   * @param itemLength the number of code points to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated).
   */
  function bufferAddCodepoints(
    buffer: buffer_t,
    text: codepoint_t[],
    itemOffset: number,
    itemLength: number
  ): void
  /**
   * Similar to hb_buffer_add_codepoints(), but allows only access to first 256
   * Unicode code points that can fit in 8-bit strings.
   *
   * <note>Has nothing to do with non-Unicode Latin-1 encoding.</note>
   * @param buffer An #hb_buffer_t
   * @param text an array of UTF-8               characters to append
   * @param itemOffset the offset of the first character to add to the `buffer`
   * @param itemLength the number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated)
   */
  function bufferAddLatin1(
    buffer: buffer_t,
    text: number[],
    itemOffset: number,
    itemLength: number
  ): void
  /**
   * See hb_buffer_add_codepoints().
   *
   * Replaces invalid UTF-16 characters with the `buffer` replacement code point,
   * see hb_buffer_set_replacement_codepoint().
   * @param buffer An #hb_buffer_t
   * @param text An array of UTF-16 characters to append
   * @param itemOffset The offset of the first character to add to the `buffer`
   * @param itemLength The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated)
   */
  function bufferAddUtf16(
    buffer: buffer_t,
    text: number[],
    itemOffset: number,
    itemLength: number
  ): void
  /**
   * See hb_buffer_add_codepoints().
   *
   * Replaces invalid UTF-32 characters with the `buffer` replacement code point,
   * see hb_buffer_set_replacement_codepoint().
   * @param buffer An #hb_buffer_t
   * @param text An array of UTF-32 characters to append
   * @param itemOffset The offset of the first character to add to the `buffer`
   * @param itemLength The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated)
   */
  function bufferAddUtf32(
    buffer: buffer_t,
    text: number[],
    itemOffset: number,
    itemLength: number
  ): void
  /**
   * See hb_buffer_add_codepoints().
   *
   * Replaces invalid UTF-8 characters with the `buffer` replacement code point,
   * see hb_buffer_set_replacement_codepoint().
   * @param buffer An #hb_buffer_t
   * @param text An array of UTF-8               characters to append.
   * @param itemOffset The offset of the first character to add to the `buffer`.
   * @param itemLength The number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is `NULL` terminated).
   */
  function bufferAddUtf8(
    buffer: buffer_t,
    text: number[],
    itemOffset: number,
    itemLength: number
  ): void
  /**
   * Check if allocating memory for the buffer succeeded.
   * @param buffer An #hb_buffer_t
   * @returns `true` if @buffer memory allocation succeeded, `false` otherwise.
   */
  function bufferAllocationSuccessful(buffer: buffer_t): bool_t
  /**
   * Append (part of) contents of another buffer to this buffer.
   * @param buffer An #hb_buffer_t
   * @param source source #hb_buffer_t
   * @param start start index into source buffer to copy.  Use 0 to copy from start of buffer.
   * @param end end index into source buffer to copy.  Use `HB_FEATURE_GLOBAL_END` to copy to end of buffer.
   */
  function bufferAppend(
    buffer: buffer_t,
    source: buffer_t,
    start: number,
    end: number
  ): void
  /**
   * Similar to hb_buffer_reset(), but does not clear the Unicode functions and
   * the replacement code point.
   * @param buffer An #hb_buffer_t
   */
  function bufferClearContents(buffer: buffer_t): void
  /**
   * Creates a new #hb_buffer_t with all properties to defaults.
   * @returns A newly allocated #hb_buffer_t with a reference count of 1. The initial reference count should be released with hb_buffer_destroy() when you are done using the #hb_buffer_t. This function never returns `NULL`. If memory cannot be allocated, a special #hb_buffer_t object will be returned on which hb_buffer_allocation_successful() returns `false`.
   */
  function bufferCreate(): buffer_t
  /**
   * Creates a new #hb_buffer_t, similar to hb_buffer_create(). The only
   * difference is that the buffer is configured similarly to `src`.
   * @param src An #hb_buffer_t
   * @returns A newly allocated #hb_buffer_t, similar to hb_buffer_create().
   */
  function bufferCreateSimilar(src: buffer_t): buffer_t
  /**
   * Deserializes glyphs `buffer` from textual representation in the format
   * produced by hb_buffer_serialize_glyphs().
   * @param buffer an #hb_buffer_t buffer.
   * @param buf string to deserialize
   * @param font font for getting glyph IDs
   * @param format the #hb_buffer_serialize_format_t of the input `buf`
   * @returns `true` if parse was successful, `false` if an error occurred.
   */
  function bufferDeserializeGlyphs(
    buffer: buffer_t,
    buf: string[],
    font: font_t | null,
    format: buffer_serialize_format_t
  ): [/* returnType */ bool_t, /* endPtr */ string]
  /**
   * Deserializes Unicode `buffer` from textual representation in the format
   * produced by hb_buffer_serialize_unicode().
   * @param buffer an #hb_buffer_t buffer.
   * @param buf string to deserialize
   * @param format the #hb_buffer_serialize_format_t of the input `buf`
   * @returns `true` if parse was successful, `false` if an error occurred.
   */
  function bufferDeserializeUnicode(
    buffer: buffer_t,
    buf: string[],
    format: buffer_serialize_format_t
  ): [/* returnType */ bool_t, /* endPtr */ string]
  /**
   * If dottedcircle_glyph is (hb_codepoint_t) -1 then #HB_BUFFER_DIFF_FLAG_DOTTED_CIRCLE_PRESENT
   * and #HB_BUFFER_DIFF_FLAG_NOTDEF_PRESENT are never returned.  This should be used by most
   * callers if just comparing two buffers is needed.
   * @param buffer a buffer.
   * @param reference other buffer to compare to.
   * @param dottedcircleGlyph glyph id of U+25CC DOTTED CIRCLE, or (hb_codepoint_t) -1.
   * @param positionFuzz allowed absolute difference in position values.
   */
  function bufferDiff(
    buffer: buffer_t,
    reference: buffer_t,
    dottedcircleGlyph: codepoint_t,
    positionFuzz: number
  ): buffer_diff_flags_t
  /**
   * Fetches the cluster level of a buffer. The #hb_buffer_cluster_level_t
   * dictates one aspect of how HarfBuzz will treat non-base characters
   * during shaping.
   * @param buffer An #hb_buffer_t
   * @returns The cluster level of @buffer
   */
  function bufferGetClusterLevel(buffer: buffer_t): buffer_cluster_level_t
  /**
   * Fetches the type of `buffer` contents. Buffers are either empty, contain
   * characters (before shaping), or contain glyphs (the result of shaping).
   * @param buffer An #hb_buffer_t
   * @returns The type of @buffer contents
   */
  function bufferGetContentType(buffer: buffer_t): buffer_content_type_t
  /**
   * See hb_buffer_set_direction()
   * @param buffer An #hb_buffer_t
   * @returns The direction of the @buffer.
   */
  function bufferGetDirection(buffer: buffer_t): direction_t
  /**
   * Fetches an empty #hb_buffer_t.
   * @returns The empty buffer
   */
  function bufferGetEmpty(): buffer_t
  /**
   * Fetches the #hb_buffer_flags_t of `buffer`.
   * @param buffer An #hb_buffer_t
   * @returns The @buffer flags
   */
  function bufferGetFlags(buffer: buffer_t): buffer_flags_t
  /**
   * Returns `buffer` glyph information array.  Returned pointer
   * is valid as long as `buffer` contents are not modified.
   * @param buffer An #hb_buffer_t
   * @returns The @buffer glyph information array. The value valid as long as buffer has not been modified.
   */
  function bufferGetGlyphInfos(buffer: buffer_t): glyph_info_t[]
  /**
   * Returns `buffer` glyph position array.  Returned pointer
   * is valid as long as `buffer` contents are not modified.
   *
   * If buffer did not have positions before, the positions will be
   * initialized to zeros, unless this function is called from
   * within a buffer message callback (see hb_buffer_set_message_func()),
   * in which case `NULL` is returned.
   * @param buffer An #hb_buffer_t
   * @returns The @buffer glyph position array. The value valid as long as buffer has not been modified.
   */
  function bufferGetGlyphPositions(buffer: buffer_t): glyph_position_t[]
  /**
   * See hb_buffer_set_invisible_glyph().
   * @param buffer An #hb_buffer_t
   * @returns The @buffer invisible #hb_codepoint_t
   */
  function bufferGetInvisibleGlyph(buffer: buffer_t): codepoint_t
  /**
   * See hb_buffer_set_language().
   * @param buffer An #hb_buffer_t
   * @returns The #hb_language_t of the buffer. Must not be freed by the caller.
   */
  function bufferGetLanguage(buffer: buffer_t): language_t
  /**
   * Returns the number of items in the buffer.
   * @param buffer An #hb_buffer_t
   * @returns The @buffer length. The value valid as long as buffer has not been modified.
   */
  function bufferGetLength(buffer: buffer_t): number
  /**
   * See hb_buffer_set_not_found_glyph().
   * @param buffer An #hb_buffer_t
   * @returns The @buffer not-found #hb_codepoint_t
   */
  function bufferGetNotFoundGlyph(buffer: buffer_t): codepoint_t
  /**
   * Fetches the #hb_codepoint_t that replaces invalid entries for a given encoding
   * when adding text to `buffer`.
   * @param buffer An #hb_buffer_t
   * @returns The @buffer replacement #hb_codepoint_t
   */
  function bufferGetReplacementCodepoint(buffer: buffer_t): codepoint_t
  /**
   * Fetches the script of `buffer`.
   * @param buffer An #hb_buffer_t
   * @returns The #hb_script_t of the @buffer
   */
  function bufferGetScript(buffer: buffer_t): script_t
  /**
   * Sets `props` to the #hb_segment_properties_t of `buffer`.
   * @param buffer An #hb_buffer_t
   */
  function bufferGetSegmentProperties(
    buffer: buffer_t
  ): /* props */ segment_properties_t
  /**
   * Fetches the Unicode-functions structure of a buffer.
   * @param buffer An #hb_buffer_t
   * @returns The Unicode-functions structure
   */
  function bufferGetUnicodeFuncs(buffer: buffer_t): unicode_funcs_t
  /**
   * Sets unset buffer segment properties based on buffer Unicode
   * contents.  If buffer is not empty, it must have content type
   * #HB_BUFFER_CONTENT_TYPE_UNICODE.
   *
   * If buffer script is not set (ie. is #HB_SCRIPT_INVALID), it
   * will be set to the Unicode script of the first character in
   * the buffer that has a script other than #HB_SCRIPT_COMMON,
   * #HB_SCRIPT_INHERITED, and #HB_SCRIPT_UNKNOWN.
   *
   * Next, if buffer direction is not set (ie. is #HB_DIRECTION_INVALID),
   * it will be set to the natural horizontal direction of the
   * buffer script as returned by hb_script_get_horizontal_direction().
   * If hb_script_get_horizontal_direction() returns #HB_DIRECTION_INVALID,
   * then #HB_DIRECTION_LTR is used.
   *
   * Finally, if buffer language is not set (ie. is #HB_LANGUAGE_INVALID),
   * it will be set to the process's default language as returned by
   * hb_language_get_default().  This may change in the future by
   * taking buffer script into consideration when choosing a language.
   * Note that hb_language_get_default() is NOT threadsafe the first time
   * it is called.  See documentation for that function for details.
   * @param buffer An #hb_buffer_t
   */
  function bufferGuessSegmentProperties(buffer: buffer_t): void
  /**
   * Returns whether `buffer` has glyph position data.
   * A buffer gains position data when hb_buffer_get_glyph_positions() is called on it,
   * and cleared of position data when hb_buffer_clear_contents() is called.
   * @param buffer an #hb_buffer_t.
   * @returns `true` if the @buffer has position array, `false` otherwise.
   */
  function bufferHasPositions(buffer: buffer_t): bool_t
  /**
   * Reorders a glyph buffer to have canonical in-cluster glyph order / position.
   * The resulting clusters should behave identical to pre-reordering clusters.
   *
   * <note>This has nothing to do with Unicode normalization.</note>
   * @param buffer An #hb_buffer_t
   */
  function bufferNormalizeGlyphs(buffer: buffer_t): void
  /**
   * Pre allocates memory for `buffer` to fit at least `size` number of items.
   * @param buffer An #hb_buffer_t
   * @param size Number of items to pre allocate.
   * @returns `true` if @buffer memory allocation succeeded, `false` otherwise
   */
  function bufferPreAllocate(buffer: buffer_t, size: number): bool_t
  /**
   * Resets the buffer to its initial status, as if it was just newly created
   * with hb_buffer_create().
   * @param buffer An #hb_buffer_t
   */
  function bufferReset(buffer: buffer_t): void
  /**
   * Reverses buffer contents.
   * @param buffer An #hb_buffer_t
   */
  function bufferReverse(buffer: buffer_t): void
  /**
   * Reverses buffer clusters.  That is, the buffer contents are
   * reversed, then each cluster (consecutive items having the
   * same cluster number) are reversed again.
   * @param buffer An #hb_buffer_t
   */
  function bufferReverseClusters(buffer: buffer_t): void
  /**
   * Reverses buffer contents between `start` and `end`.
   * @param buffer An #hb_buffer_t
   * @param start start index
   * @param end end index
   */
  function bufferReverseRange(
    buffer: buffer_t,
    start: number,
    end: number
  ): void
  /**
   * Serializes `buffer` into a textual representation of its content, whether
   * Unicode codepoints or glyph identifiers and positioning information. This is
   * useful for showing the contents of the buffer, for example during debugging.
   * See the documentation of hb_buffer_serialize_unicode() and
   * hb_buffer_serialize_glyphs() for a description of the output format.
   * @param buffer an #hb_buffer_t buffer.
   * @param start the first item in `buffer` to serialize.
   * @param end the last item in `buffer` to serialize.
   * @param font the #hb_font_t used to shape this buffer, needed to        read glyph names and extents. If `NULL`, an empty font will be used.
   * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
   * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
   * @returns The number of serialized items.
   */
  function bufferSerialize(
    buffer: buffer_t,
    start: number,
    end: number,
    font: font_t | null,
    format: buffer_serialize_format_t,
    flags: buffer_serialize_flags_t
  ): [/* returnType */ number, /* buf */ number[], /* bufConsumed */ number]
  /**
   * Parses a string into an #hb_buffer_serialize_format_t. Does not check if
   * `str` is a valid buffer serialization format, use
   * hb_buffer_serialize_list_formats() to get the list of supported formats.
   * @param str a string to parse
   * @returns The parsed #hb_buffer_serialize_format_t.
   */
  function bufferSerializeFormatFromString(
    str: number[]
  ): buffer_serialize_format_t
  /**
   * Converts `format` to the string corresponding it, or `NULL` if it is not a valid
   * #hb_buffer_serialize_format_t.
   * @param format an #hb_buffer_serialize_format_t to convert.
   * @returns A `NULL` terminated string corresponding to @format. Should not be freed.
   */
  function bufferSerializeFormatToString(
    format: buffer_serialize_format_t
  ): string
  /**
   * Serializes `buffer` into a textual representation of its glyph content,
   * useful for showing the contents of the buffer, for example during debugging.
   * There are currently two supported serialization formats:
   *
   * ## text
   * A human-readable, plain text format.
   * The serialized glyphs will look something like:
   *
   * ```
   * [uni0651=0`5`18,0+0|uni0628=0+1897]
   * ```
   *
   * - The serialized glyphs are delimited with `[` and `]`.
   * - Glyphs are separated with `|`
   * - Each glyph starts with glyph name, or glyph index if
   *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set. Then,
   *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, `=` then #hb_glyph_info_t.cluster.
   *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set, the #hb_glyph_position_t in the format:
   *     - If both #hb_glyph_position_t.x_offset and #hb_glyph_position_t.y_offset are not 0, ``x_offset,`y_offset`. Then,
   *     - `+x_advance`, then `,y_advance` if #hb_glyph_position_t.y_advance is not 0. Then,
   *   - If #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set, the #hb_glyph_extents_t in the format `<x_bearing,y_bearing,width,height>`
   *
   * ## json
   * A machine-readable, structured format.
   * The serialized glyphs will look something like:
   *
   * ```
   * [{"g":"uni0651","cl":0,"dx":518,"dy":0,"ax":0,"ay":0},
   * {"g":"uni0628","cl":0,"dx":0,"dy":0,"ax":1897,"ay":0}]
   * ```
   *
   * Each glyph is a JSON object, with the following properties:
   * - `g`: the glyph name or glyph index if
   *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set.
   * - `cl`: #hb_glyph_info_t.cluster if
   *   #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set.
   * - `dx`,`dy`,`ax`,`ay`: #hb_glyph_position_t.x_offset, #hb_glyph_position_t.y_offset,
   *    #hb_glyph_position_t.x_advance and #hb_glyph_position_t.y_advance
   *    respectively, if #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set.
   * - `xb`,`yb`,`w`,`h`: #hb_glyph_extents_t.x_bearing, #hb_glyph_extents_t.y_bearing,
   *    #hb_glyph_extents_t.width and #hb_glyph_extents_t.height respectively if
   *    #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set.
   * @param buffer an #hb_buffer_t buffer.
   * @param start the first item in `buffer` to serialize.
   * @param end the last item in `buffer` to serialize.
   * @param font the #hb_font_t used to shape this buffer, needed to        read glyph names and extents. If `NULL`, an empty font will be used.
   * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
   * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
   * @returns The number of serialized items.
   */
  function bufferSerializeGlyphs(
    buffer: buffer_t,
    start: number,
    end: number,
    font: font_t | null,
    format: buffer_serialize_format_t,
    flags: buffer_serialize_flags_t
  ): [/* returnType */ number, /* buf */ number[], /* bufConsumed */ number]
  /**
   * Returns a list of supported buffer serialization formats.
   * @returns A string array of buffer serialization formats. Should not be freed.
   */
  function bufferSerializeListFormats(): string[]
  /**
   * Serializes `buffer` into a textual representation of its content,
   * when the buffer contains Unicode codepoints (i.e., before shaping). This is
   * useful for showing the contents of the buffer, for example during debugging.
   * There are currently two supported serialization formats:
   *
   * ## text
   * A human-readable, plain text format.
   * The serialized codepoints will look something like:
   *
   * ```
   *  <U+0651=0|U+0628=1>
   * ```
   *
   * - Glyphs are separated with `|`
   * - Unicode codepoints are expressed as zero-padded four (or more)
   *   digit hexadecimal numbers preceded by `U+`
   * - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, the cluster
   *   will be indicated with a `=` then #hb_glyph_info_t.cluster.
   *
   * ## json
   * A machine-readable, structured format.
   * The serialized codepoints will be a list of objects with the following
   * properties:
   * - `u`: the Unicode codepoint as a decimal integer
   * - `cl`: #hb_glyph_info_t.cluster if
   *   #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set.
   *
   * For example:
   *
   * ```
   * [{u:1617,cl:0},{u:1576,cl:1}]
   * ```
   * @param buffer an #hb_buffer_t buffer.
   * @param start the first item in `buffer` to serialize.
   * @param end the last item in `buffer` to serialize.
   * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
   * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
   * @returns The number of serialized items.
   */
  function bufferSerializeUnicode(
    buffer: buffer_t,
    start: number,
    end: number,
    format: buffer_serialize_format_t,
    flags: buffer_serialize_flags_t
  ): [/* returnType */ number, /* buf */ number[], /* bufConsumed */ number]
  /**
   * Sets the cluster level of a buffer. The #hb_buffer_cluster_level_t
   * dictates one aspect of how HarfBuzz will treat non-base characters
   * during shaping.
   * @param buffer An #hb_buffer_t
   * @param clusterLevel The cluster level to set on the buffer
   */
  function bufferSetClusterLevel(
    buffer: buffer_t,
    clusterLevel: buffer_cluster_level_t
  ): void
  /**
   * Sets the type of `buffer` contents. Buffers are either empty, contain
   * characters (before shaping), or contain glyphs (the result of shaping).
   *
   * You rarely need to call this function, since a number of other
   * functions transition the content type for you. Namely:
   *
   * - A newly created buffer starts with content type
   *   %HB_BUFFER_CONTENT_TYPE_INVALID. Calling hb_buffer_reset(),
   *   hb_buffer_clear_contents(), as well as calling hb_buffer_set_length()
   *   with an argument of zero all set the buffer content type to invalid
   *   as well.
   *
   * - Calling hb_buffer_add_utf8(), hb_buffer_add_utf16(),
   *   hb_buffer_add_utf32(), hb_buffer_add_codepoints() and
   *   hb_buffer_add_latin1() expect that buffer is either empty and
   *   have a content type of invalid, or that buffer content type is
   *   %HB_BUFFER_CONTENT_TYPE_UNICODE, and they also set the content
   *   type to Unicode if they added anything to an empty buffer.
   *
   * - Finally hb_shape() and hb_shape_full() expect that the buffer
   *   is either empty and have content type of invalid, or that buffer
   *   content type is %HB_BUFFER_CONTENT_TYPE_UNICODE, and upon
   *   success they set the buffer content type to
   *   %HB_BUFFER_CONTENT_TYPE_GLYPHS.
   *
   * The above transitions are designed such that one can use a buffer
   * in a loop of "reset : add-text : shape" without needing to ever
   * modify the content type manually.
   * @param buffer An #hb_buffer_t
   * @param contentType The type of buffer contents to set
   */
  function bufferSetContentType(
    buffer: buffer_t,
    contentType: buffer_content_type_t
  ): void
  /**
   * Set the text flow direction of the buffer. No shaping can happen without
   * setting `buffer` direction, and it controls the visual direction for the
   * output glyphs; for RTL direction the glyphs will be reversed. Many layout
   * features depend on the proper setting of the direction, for example,
   * reversing RTL text before shaping, then shaping with LTR direction is not
   * the same as keeping the text in logical order and shaping with RTL
   * direction.
   * @param buffer An #hb_buffer_t
   * @param direction the #hb_direction_t of the `buffer`
   */
  function bufferSetDirection(buffer: buffer_t, direction: direction_t): void
  /**
   * Sets `buffer` flags to `flags`. See #hb_buffer_flags_t.
   * @param buffer An #hb_buffer_t
   * @param flags The buffer flags to set
   */
  function bufferSetFlags(buffer: buffer_t, flags: buffer_flags_t): void
  /**
   * Sets the #hb_codepoint_t that replaces invisible characters in
   * the shaping result.  If set to zero (default), the glyph for the
   * U+0020 SPACE character is used.  Otherwise, this value is used
   * verbatim.
   * @param buffer An #hb_buffer_t
   * @param invisible the invisible #hb_codepoint_t
   */
  function bufferSetInvisibleGlyph(
    buffer: buffer_t,
    invisible: codepoint_t
  ): void
  /**
   * Sets the language of `buffer` to `language`.
   *
   * Languages are crucial for selecting which OpenType feature to apply to the
   * buffer which can result in applying language-specific behaviour. Languages
   * are orthogonal to the scripts, and though they are related, they are
   * different concepts and should not be confused with each other.
   *
   * Use hb_language_from_string() to convert from BCP 47 language tags to
   * #hb_language_t.
   * @param buffer An #hb_buffer_t
   * @param language An hb_language_t to set
   */
  function bufferSetLanguage(buffer: buffer_t, language: language_t): void
  /**
   * Similar to hb_buffer_pre_allocate(), but clears any new items added at the
   * end.
   * @param buffer An #hb_buffer_t
   * @param length The new length of `buffer`
   * @returns `true` if @buffer memory allocation succeeded, `false` otherwise.
   */
  function bufferSetLength(buffer: buffer_t, length: number): bool_t
  /**
   * Sets the implementation function for #hb_buffer_message_func_t.
   * @param buffer An #hb_buffer_t
   * @param func Callback function
   */
  function bufferSetMessageFunc(
    buffer: buffer_t,
    func: buffer_message_func_t
  ): void
  /**
   * Sets the #hb_codepoint_t that replaces characters not found in
   * the font during shaping.
   *
   * The not-found glyph defaults to zero, sometimes known as the
   * ".notdef" glyph.  This API allows for differentiating the two.
   * @param buffer An #hb_buffer_t
   * @param notFound the not-found #hb_codepoint_t
   */
  function bufferSetNotFoundGlyph(buffer: buffer_t, notFound: codepoint_t): void
  /**
   * Sets the #hb_codepoint_t that replaces invalid entries for a given encoding
   * when adding text to `buffer`.
   *
   * Default is #HB_BUFFER_REPLACEMENT_CODEPOINT_DEFAULT.
   * @param buffer An #hb_buffer_t
   * @param replacement the replacement #hb_codepoint_t
   */
  function bufferSetReplacementCodepoint(
    buffer: buffer_t,
    replacement: codepoint_t
  ): void
  /**
   * Sets the script of `buffer` to `script`.
   *
   * Script is crucial for choosing the proper shaping behaviour for scripts that
   * require it (e.g. Arabic) and the which OpenType features defined in the font
   * to be applied.
   *
   * You can pass one of the predefined #hb_script_t values, or use
   * hb_script_from_string() or hb_script_from_iso15924_tag() to get the
   * corresponding script from an ISO 15924 script tag.
   * @param buffer An #hb_buffer_t
   * @param script An #hb_script_t to set.
   */
  function bufferSetScript(buffer: buffer_t, script: script_t): void
  /**
   * Sets the segment properties of the buffer, a shortcut for calling
   * hb_buffer_set_direction(), hb_buffer_set_script() and
   * hb_buffer_set_language() individually.
   * @param buffer An #hb_buffer_t
   * @param props An #hb_segment_properties_t to use
   */
  function bufferSetSegmentProperties(
    buffer: buffer_t,
    props: segment_properties_t
  ): void
  /**
   * Sets the Unicode-functions structure of a buffer to
   * `unicode_funcs`.
   * @param buffer An #hb_buffer_t
   * @param unicodeFuncs The Unicode-functions structure
   */
  function bufferSetUnicodeFuncs(
    buffer: buffer_t,
    unicodeFuncs: unicode_funcs_t
  ): void
  /**
   * Fetches the alpha channel of the given `color`.
   * @param color an #hb_color_t we are interested in its channels.
   * @returns Alpha channel value
   */
  function colorGetAlpha(color: color_t): number
  /**
   * Fetches the blue channel of the given `color`.
   * @param color an #hb_color_t we are interested in its channels.
   * @returns Blue channel value
   */
  function colorGetBlue(color: color_t): number
  /**
   * Fetches the green channel of the given `color`.
   * @param color an #hb_color_t we are interested in its channels.
   * @returns Green channel value
   */
  function colorGetGreen(color: color_t): number
  /**
   * Fetches the red channel of the given `color`.
   * @param color an #hb_color_t we are interested in its channels.
   * @returns Red channel value
   */
  function colorGetRed(color: color_t): number
  /**
   * Fetches a list of color stops from the given color line object.
   *
   * Note that due to variations being applied, the returned color stops
   * may be out of order. It is the callers responsibility to ensure that
   * color stops are sorted by their offset before they are used.
   * @param colorLine a #hb_color_line_t object
   * @param start the index of the first color stop to return
   * @returns the total number of color stops in @color_line
   */
  function colorLineGetColorStops(
    colorLine: color_line_t,
    start: number
  ): [/* returnType */ number, /* colorStops */ color_stop_t[]]
  /**
   * Fetches the extend mode of the color line object.
   * @param colorLine a #hb_color_line_t object
   * @returns the extend mode of @color_line
   */
  function colorLineGetExtend(colorLine: color_line_t): paint_extend_t
  /**
   * Converts a string to an #hb_direction_t.
   *
   * Matching is loose and applies only to the first letter. For
   * examples, "LTR" and "left-to-right" will both return #HB_DIRECTION_LTR.
   *
   * Unmatched strings will return #HB_DIRECTION_INVALID.
   * @param str String to convert
   * @returns The #hb_direction_t matching @str
   */
  function directionFromString(str: number[]): direction_t
  /**
   * Converts an #hb_direction_t to a string.
   * @param direction The #hb_direction_t to convert
   * @returns The string corresponding to @direction
   */
  function directionToString(direction: direction_t): string
  /**
   * Perform a "close-path" draw operation.
   * @param dfuncs draw functions
   * @param drawData associated draw data passed by the caller
   * @param st current draw state
   */
  function drawClosePath(
    dfuncs: draw_funcs_t,
    drawData: any | null,
    st: draw_state_t
  ): void
  /**
   * Perform a "cubic-to" draw operation.
   * @param dfuncs draw functions
   * @param drawData associated draw data passed by the caller
   * @param st current draw state
   * @param control1X X component of first control point
   * @param control1Y Y component of first control point
   * @param control2X X component of second control point
   * @param control2Y Y component of second control point
   * @param toX X component of target point
   * @param toY Y component of target point
   */
  function drawCubicTo(
    dfuncs: draw_funcs_t,
    drawData: any | null,
    st: draw_state_t,
    control1X: number,
    control1Y: number,
    control2X: number,
    control2Y: number,
    toX: number,
    toY: number
  ): void
  /**
   * Creates a new draw callbacks object.
   * @returns A newly allocated #hb_draw_funcs_t with a reference count of 1. The initial reference count should be released with hb_draw_funcs_destroy when you are done using the #hb_draw_funcs_t. This function never returns `NULL`. If memory cannot be allocated, a special singleton #hb_draw_funcs_t object will be returned.
   */
  function drawFuncsCreate(): draw_funcs_t
  /**
   * Fetches the singleton empty draw-functions structure.
   * @returns The empty draw-functions structure
   */
  function drawFuncsGetEmpty(): draw_funcs_t
  /**
   * Checks whether `dfuncs` is immutable.
   * @param dfuncs draw functions
   * @returns `true` if @dfuncs is immutable, `false` otherwise
   */
  function drawFuncsIsImmutable(dfuncs: draw_funcs_t): bool_t
  /**
   * Makes `dfuncs` object immutable.
   * @param dfuncs draw functions
   */
  function drawFuncsMakeImmutable(dfuncs: draw_funcs_t): void
  /**
   * Sets close-path callback to the draw functions object.
   * @param dfuncs draw functions object
   * @param func close-path callback
   */
  function drawFuncsSetClosePathFunc(
    dfuncs: draw_funcs_t,
    func: draw_close_path_func_t
  ): void
  /**
   * Sets cubic-to callback to the draw functions object.
   * @param dfuncs draw functions
   * @param func cubic-to callback
   */
  function drawFuncsSetCubicToFunc(
    dfuncs: draw_funcs_t,
    func: draw_cubic_to_func_t
  ): void
  /**
   * Sets line-to callback to the draw functions object.
   * @param dfuncs draw functions object
   * @param func line-to callback
   */
  function drawFuncsSetLineToFunc(
    dfuncs: draw_funcs_t,
    func: draw_line_to_func_t
  ): void
  /**
   * Sets move-to callback to the draw functions object.
   * @param dfuncs draw functions object
   * @param func move-to callback
   */
  function drawFuncsSetMoveToFunc(
    dfuncs: draw_funcs_t,
    func: draw_move_to_func_t
  ): void
  /**
   * Sets quadratic-to callback to the draw functions object.
   * @param dfuncs draw functions object
   * @param func quadratic-to callback
   */
  function drawFuncsSetQuadraticToFunc(
    dfuncs: draw_funcs_t,
    func: draw_quadratic_to_func_t
  ): void
  /**
   * Perform a "line-to" draw operation.
   * @param dfuncs draw functions
   * @param drawData associated draw data passed by the caller
   * @param st current draw state
   * @param toX X component of target point
   * @param toY Y component of target point
   */
  function drawLineTo(
    dfuncs: draw_funcs_t,
    drawData: any | null,
    st: draw_state_t,
    toX: number,
    toY: number
  ): void
  /**
   * Perform a "move-to" draw operation.
   * @param dfuncs draw functions
   * @param drawData associated draw data passed by the caller
   * @param st current draw state
   * @param toX X component of target point
   * @param toY Y component of target point
   */
  function drawMoveTo(
    dfuncs: draw_funcs_t,
    drawData: any | null,
    st: draw_state_t,
    toX: number,
    toY: number
  ): void
  /**
   * Perform a "quadratic-to" draw operation.
   * @param dfuncs draw functions
   * @param drawData associated draw data passed by the caller
   * @param st current draw state
   * @param controlX X component of control point
   * @param controlY Y component of control point
   * @param toX X component of target point
   * @param toY Y component of target point
   */
  function drawQuadraticTo(
    dfuncs: draw_funcs_t,
    drawData: any | null,
    st: draw_state_t,
    controlX: number,
    controlY: number,
    toX: number,
    toY: number
  ): void
  /**
   * Add table for `tag` with data provided by `blob` to the face.  `face` must
   * be created using hb_face_builder_create().
   * @param face A face object created with hb_face_builder_create()
   * @param tag The #hb_tag_t of the table to add
   * @param blob The blob containing the table data to add
   */
  function faceBuilderAddTable(face: face_t, tag: tag_t, blob: blob_t): bool_t
  /**
   * Creates a #hb_face_t that can be used with hb_face_builder_add_table().
   * After tables are added to the face, it can be compiled to a binary
   * font file by calling hb_face_reference_blob().
   * @returns New face.
   */
  function faceBuilderCreate(): face_t
  /**
   * Set the ordering of tables for serialization. Any tables not
   * specified in the tags list will be ordered after the tables in
   * tags, ordered by the default sort ordering.
   * @param face A face object created with hb_face_builder_create()
   * @param tags ordered list of table tags terminated by   %HB_TAG_NONE
   */
  function faceBuilderSortTables(face: face_t, tags: tag_t[]): void
  /**
   * Collects the mapping from Unicode characters to nominal glyphs of the `face,`
   * and optionally all of the Unicode characters covered by `face`.
   * @param face A face object
   */
  function faceCollectNominalGlyphMapping(
    face: face_t
  ): [/* mapping */ map_t, /* unicodes */ set_t | null]
  /**
   * Collects all of the Unicode characters covered by `face` and adds
   * them to the #hb_set_t set `out`.
   * @param face A face object
   */
  function faceCollectUnicodes(face: face_t): /* out */ set_t
  /**
   * Collects all Unicode "Variation Selector" characters covered by `face` and adds
   * them to the #hb_set_t set `out`.
   * @param face A face object
   */
  function faceCollectVariationSelectors(face: face_t): /* out */ set_t
  /**
   * Collects all Unicode characters for `variation_selector` covered by `face` and adds
   * them to the #hb_set_t set `out`.
   * @param face A face object
   * @param variationSelector The Variation Selector to query
   */
  function faceCollectVariationUnicodes(
    face: face_t,
    variationSelector: codepoint_t
  ): /* out */ set_t
  /**
   * Fetches the number of faces in a blob.
   * @param blob a blob.
   * @returns Number of faces in @blob
   */
  function faceCount(blob: blob_t): number
  /**
   * Constructs a new face object from the specified blob and
   * a face index into that blob.
   *
   * The face index is used for blobs of file formats such as TTC and
   * DFont that can contain more than one face.  Face indices within
   * such collections are zero-based.
   *
   * <note>Note: If the blob font format is not a collection, `index`
   * is ignored.  Otherwise, only the lower 16-bits of `index` are used.
   * The unmodified `index` can be accessed via hb_face_get_index().</note>
   *
   * <note>Note: The high 16-bits of `index,` if non-zero, are used by
   * hb_font_create() to load named-instances in variable fonts.  See
   * hb_font_create() for details.</note>
   * @param blob #hb_blob_t to work upon
   * @param index The index of the face within `blob`
   * @returns The new face object
   */
  function faceCreate(blob: blob_t, index: number): face_t
  /**
   * Variant of hb_face_create(), built for those cases where it is more
   * convenient to provide data for individual tables instead of the whole font
   * data. With the caveat that hb_face_get_table_tags() does not currently work
   * with faces created this way.
   *
   * Creates a new face object from the specified `user_data` and `reference_table_func,`
   * with the `destroy` callback.
   * @param referenceTableFunc Table-referencing function
   * @returns The new face object
   */
  function faceCreateForTables(
    referenceTableFunc: reference_table_func_t
  ): face_t
  /**
   * Fetches the singleton empty face object.
   * @returns The empty face object
   */
  function faceGetEmpty(): face_t
  /**
   * Fetches the glyph-count value of the specified face object.
   * @param face A face object
   * @returns The glyph-count value of @face
   */
  function faceGetGlyphCount(face: face_t): number
  /**
   * Fetches the face-index corresponding to the given face.
   *
   * <note>Note: face indices within a collection are zero-based.</note>
   * @param face A face object
   * @returns The index of @face.
   */
  function faceGetIndex(face: face_t): number
  /**
   * Fetches a list of all table tags for a face, if possible. The list returned will
   * begin at the offset provided
   * @param face A face object
   * @param startOffset The index of first table tag to retrieve
   * @returns Total number of tables, or zero if it is not possible to list
   */
  function faceGetTableTags(
    face: face_t,
    startOffset: number
  ): [/* returnType */ number, /* tableTags */ tag_t[]]
  /**
   * Fetches the units-per-em (UPEM) value of the specified face object.
   *
   * Typical UPEM values for fonts are 1000, or 2048, but any value
   * in between 16 and 16,384 is allowed for OpenType fonts.
   * @param face A face object
   * @returns The upem value of @face
   */
  function faceGetUpem(face: face_t): number
  /**
   * Tests whether the given face object is immutable.
   * @param face A face object
   * @returns `true` is @face is immutable, `false` otherwise
   */
  function faceIsImmutable(face: face_t): bool_t
  /**
   * Makes the given face object immutable.
   * @param face A face object
   */
  function faceMakeImmutable(face: face_t): void
  /**
   * Fetches a pointer to the binary blob that contains the
   * specified face. Returns an empty blob if referencing face data is not
   * possible.
   * @param face A face object
   * @returns A pointer to the blob for @face
   */
  function faceReferenceBlob(face: face_t): blob_t
  /**
   * Fetches a reference to the specified table within
   * the specified face.
   * @param face A face object
   * @param tag The #hb_tag_t of the table to query
   * @returns A pointer to the @tag table within @face
   */
  function faceReferenceTable(face: face_t, tag: tag_t): blob_t
  /**
   * Sets the glyph count for a face object to the specified value.
   *
   * This API is used in rare circumstances.
   * @param face A face object
   * @param glyphCount The glyph-count value to assign
   */
  function faceSetGlyphCount(face: face_t, glyphCount: number): void
  /**
   * Assigns the specified face-index to `face`. Fails if the
   * face is immutable.
   *
   * <note>Note: changing the index has no effect on the face itself
   * This only changes the value returned by hb_face_get_index().</note>
   * @param face A face object
   * @param index The index to assign
   */
  function faceSetIndex(face: face_t, index: number): void
  /**
   * Sets the units-per-em (upem) for a face object to the specified value.
   *
   * This API is used in rare circumstances.
   * @param face A face object
   * @param upem The units-per-em value to assign
   */
  function faceSetUpem(face: face_t, upem: number): void
  /**
   * Parses a string into a #hb_feature_t.
   *
   * The format for specifying feature strings follows. All valid CSS
   * font-feature-settings values other than 'normal' and the global values are
   * also accepted, though not documented below. CSS string escapes are not
   * supported.
   *
   * The range indices refer to the positions between Unicode characters. The
   * position before the first character is always 0.
   *
   * The format is Python-esque.  Here is how it all works:
   *
   * <informaltable pgwide='1' align='left' frame='none'>
   * <tgroup cols='5'>
   * <thead>
   * <row><entry>Syntax</entry>    <entry>Value</entry> <entry>Start</entry> <entry>End</entry></row>
   * </thead>
   * <tbody>
   * <row><entry>Setting value:</entry></row>
   * <row><entry>kern</entry>      <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
   * <row><entry>+kern</entry>     <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
   * <row><entry>-kern</entry>     <entry>0</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature off</entry></row>
   * <row><entry>kern=0</entry>    <entry>0</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature off</entry></row>
   * <row><entry>kern=1</entry>    <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
   * <row><entry>aalt=2</entry>    <entry>2</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Choose 2nd alternate</entry></row>
   * <row><entry>Setting index:</entry></row>
   * <row><entry>kern[]</entry>    <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
   * <row><entry>kern[:]</entry>   <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
   * <row><entry>kern[5:]</entry>  <entry>1</entry>     <entry>5</entry>      <entry>∞</entry>   <entry>Turn feature on, partial</entry></row>
   * <row><entry>kern[:5]</entry>  <entry>1</entry>     <entry>0</entry>      <entry>5</entry>   <entry>Turn feature on, partial</entry></row>
   * <row><entry>kern[3:5]</entry> <entry>1</entry>     <entry>3</entry>      <entry>5</entry>   <entry>Turn feature on, range</entry></row>
   * <row><entry>kern[3]</entry>   <entry>1</entry>     <entry>3</entry>      <entry>3+1</entry> <entry>Turn feature on, single char</entry></row>
   * <row><entry>Mixing it all:</entry></row>
   * <row><entry>aalt[3:5]=2</entry> <entry>2</entry>   <entry>3</entry>      <entry>5</entry>   <entry>Turn 2nd alternate on for range</entry></row>
   * </tbody>
   * </tgroup>
   * </informaltable>
   * @param str a string to parse
   * @returns `true` if @str is successfully parsed, `false` otherwise
   */
  function featureFromString(
    str: number[]
  ): [/* returnType */ bool_t, /* feature */ feature_t]
  /**
   * Converts a #hb_feature_t into a `NULL`-terminated string in the format
   * understood by hb_feature_from_string(). The client in responsible for
   * allocating big enough size for `buf,` 128 bytes is more than enough.
   * @param feature an #hb_feature_t to convert
   */
  function featureToString(feature: feature_t): /* buf */ string[]
  /**
   * Adds the origin coordinates to an (X,Y) point coordinate, in
   * the specified glyph ID in the specified font.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @param direction The direction of the text segment
   * @param x Input = The original X coordinate     Output = The X coordinate plus the X-coordinate of the origin
   * @param y Input = The original Y coordinate     Output = The Y coordinate plus the Y-coordinate of the origin
   */
  function fontAddGlyphOriginForDirection(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t,
    x: position_t,
    y: position_t
  ): [/* x */ position_t, /* y */ position_t]
  /**
   * Notifies the `font` that underlying font data has changed.
   * This has the effect of increasing the serial as returned
   * by hb_font_get_serial(), which invalidates internal caches.
   * @param font #hb_font_t to work upon
   */
  function fontChanged(font: font_t): void
  /**
   * Constructs a new font object from the specified face.
   *
   * <note>Note: If `face'`s index value (as passed to hb_face_create()
   * has non-zero top 16-bits, those bits minus one are passed to
   * hb_font_set_var_named_instance(), effectively loading a named-instance
   * of a variable font, instead of the default-instance.  This allows
   * specifying which named-instance to load by default when creating the
   * face.</note>
   * @param face a face.
   * @returns The new font object
   */
  function fontCreate(face: face_t): font_t
  /**
   * Constructs a sub-font font object from the specified `parent` font,
   * replicating the parent's properties.
   * @param parent The parent font object
   * @returns The new sub-font font object
   */
  function fontCreateSubFont(parent: font_t): font_t
  /**
   * Draws the outline that corresponds to a glyph in the specified `font`.
   *
   * The outline is returned by way of calls to the callbacks of the `dfuncs`
   * objects, with `draw_data` passed to them.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID
   * @param dfuncs #hb_draw_funcs_t to draw to
   * @param drawData User data to pass to draw callbacks
   */
  function fontDrawGlyph(
    font: font_t,
    glyph: codepoint_t,
    dfuncs: draw_funcs_t,
    drawData: any | null
  ): void
  /**
   * Creates a new #hb_font_funcs_t structure of font functions.
   * @returns The font-functions structure
   */
  function fontFuncsCreate(): font_funcs_t
  /**
   * Fetches an empty font-functions structure.
   * @returns The font-functions structure
   */
  function fontFuncsGetEmpty(): font_funcs_t
  /**
   * Tests whether a font-functions structure is immutable.
   * @param ffuncs The font-functions structure
   * @returns `true` if @ffuncs is immutable, `false` otherwise
   */
  function fontFuncsIsImmutable(ffuncs: font_funcs_t): bool_t
  /**
   * Makes a font-functions structure immutable.
   * @param ffuncs The font-functions structure
   */
  function fontFuncsMakeImmutable(ffuncs: font_funcs_t): void
  /**
   * Sets the implementation function for #hb_font_draw_glyph_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetDrawGlyphFunc(
    ffuncs: font_funcs_t,
    func: font_draw_glyph_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_font_h_extents_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetFontHExtentsFunc(
    ffuncs: font_funcs_t,
    func: font_get_font_h_extents_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_font_v_extents_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetFontVExtentsFunc(
    ffuncs: font_funcs_t,
    func: font_get_font_v_extents_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_contour_point_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphContourPointFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_contour_point_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_extents_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphExtentsFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_extents_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_from_name_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphFromNameFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_from_name_func_t
  ): void
  /**
   * Deprecated.  Use hb_font_funcs_set_nominal_glyph_func() and
   * hb_font_funcs_set_variation_glyph_func() instead.
   * @param ffuncs The font-functions structure
   * @param func callback function
   */
  function fontFuncsSetGlyphFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_h_advance_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphHAdvanceFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_h_advance_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_h_advances_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphHAdvancesFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_h_advances_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_h_kerning_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphHKerningFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_h_kerning_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_h_origin_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphHOriginFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_h_origin_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_name_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphNameFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_name_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_shape_func_t,
   * which is the same as #hb_font_draw_glyph_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphShapeFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_shape_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_v_advance_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphVAdvanceFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_v_advance_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_v_advances_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphVAdvancesFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_v_advances_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_v_kerning_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphVKerningFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_v_kerning_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_glyph_v_origin_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetGlyphVOriginFunc(
    ffuncs: font_funcs_t,
    func: font_get_glyph_v_origin_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_nominal_glyph_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetNominalGlyphFunc(
    ffuncs: font_funcs_t,
    func: font_get_nominal_glyph_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_nominal_glyphs_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetNominalGlyphsFunc(
    ffuncs: font_funcs_t,
    func: font_get_nominal_glyphs_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_paint_glyph_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetPaintGlyphFunc(
    ffuncs: font_funcs_t,
    func: font_paint_glyph_func_t
  ): void
  /**
   * Sets the implementation function for #hb_font_get_variation_glyph_func_t.
   * @param ffuncs A font-function structure
   * @param func The callback function to assign
   */
  function fontFuncsSetVariationGlyphFunc(
    ffuncs: font_funcs_t,
    func: font_get_variation_glyph_func_t
  ): void
  /**
   * Fetches the empty font object.
   * @returns The empty font object
   */
  function fontGetEmpty(): font_t
  /**
   * Fetches the extents for a font in a text segment of the
   * specified direction.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param direction The direction of the text segment
   */
  function fontGetExtentsForDirection(
    font: font_t,
    direction: direction_t
  ): /* extents */ font_extents_t
  /**
   * Fetches the face associated with the specified font object.
   * @param font #hb_font_t to work upon
   * @returns The #hb_face_t value
   */
  function fontGetFace(font: font_t): face_t
  /**
   * Fetches the glyph ID for a Unicode code point in the specified
   * font, with an optional variation selector.
   *
   * If `variation_selector` is 0, calls hb_font_get_nominal_glyph();
   * otherwise calls hb_font_get_variation_glyph().
   * @param font #hb_font_t to work upon
   * @param unicode The Unicode code point to query
   * @param variationSelector A variation-selector code point
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyph(
    font: font_t,
    unicode: codepoint_t,
    variationSelector: codepoint_t
  ): [/* returnType */ bool_t, /* glyph */ codepoint_t]
  /**
   * Fetches the advance for a glyph ID from the specified font,
   * in a text segment of the specified direction.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @param direction The direction of the text segment
   */
  function fontGetGlyphAdvanceForDirection(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t
  ): [/* x */ position_t, /* y */ position_t]
  /**
   * Fetches the advances for a sequence of glyph IDs in the specified
   * font, in a text segment of the specified direction.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param direction The direction of the text segment
   * @param count The number of glyph IDs in the sequence queried
   * @param firstGlyph The first glyph ID to query
   * @param glyphStride The stride between successive glyph IDs
   */
  function fontGetGlyphAdvancesForDirection(
    font: font_t,
    direction: direction_t,
    count: number,
    firstGlyph: codepoint_t,
    glyphStride: number
  ): [/* firstAdvance */ position_t, /* advanceStride */ number]
  /**
   * Fetches the (x,y) coordinates of a specified contour-point index
   * in the specified glyph, within the specified font.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @param pointIndex The contour-point index to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyphContourPoint(
    font: font_t,
    glyph: codepoint_t,
    pointIndex: number
  ): [/* returnType */ bool_t, /* x */ position_t, /* y */ position_t]
  /**
   * Fetches the (X,Y) coordinates of a specified contour-point index
   * in the specified glyph ID in the specified font, with respect
   * to the origin in a text segment in the specified direction.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @param pointIndex The contour-point index to query
   * @param direction The direction of the text segment
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyphContourPointForOrigin(
    font: font_t,
    glyph: codepoint_t,
    pointIndex: number,
    direction: direction_t
  ): [/* returnType */ bool_t, /* x */ position_t, /* y */ position_t]
  /**
   * Fetches the #hb_glyph_extents_t data for a glyph ID
   * in the specified font.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyphExtents(
    font: font_t,
    glyph: codepoint_t
  ): [/* returnType */ bool_t, /* extents */ glyph_extents_t]
  /**
   * Fetches the #hb_glyph_extents_t data for a glyph ID
   * in the specified font, with respect to the origin in
   * a text segment in the specified direction.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @param direction The direction of the text segment
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyphExtentsForOrigin(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t
  ): [/* returnType */ bool_t, /* extents */ glyph_extents_t]
  /**
   * Fetches the glyph ID that corresponds to a name string in the specified `font`.
   *
   * <note>Note: `len` == -1 means the name string is null-terminated.</note>
   * @param font #hb_font_t to work upon
   * @param name The name string to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyphFromName(
    font: font_t,
    name: string[]
  ): [/* returnType */ bool_t, /* glyph */ codepoint_t]
  /**
   * Fetches the advance for a glyph ID in the specified font,
   * for horizontal text segments.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @returns The advance of @glyph within @font
   */
  function fontGetGlyphHAdvance(font: font_t, glyph: codepoint_t): position_t
  /**
   * Fetches the advances for a sequence of glyph IDs in the specified
   * font, for horizontal text segments.
   * @param font #hb_font_t to work upon
   * @param count The number of glyph IDs in the sequence queried
   * @param firstGlyph The first glyph ID to query
   * @param glyphStride The stride between successive glyph IDs
   * @param advanceStride The stride between successive advances
   */
  function fontGetGlyphHAdvances(
    font: font_t,
    count: number,
    firstGlyph: codepoint_t,
    glyphStride: number,
    advanceStride: number
  ): /* firstAdvance */ position_t
  /**
   * Fetches the kerning-adjustment value for a glyph-pair in
   * the specified font, for horizontal text segments.
   *
   * <note>It handles legacy kerning only (as returned by the corresponding
   * #hb_font_funcs_t function).</note>
   * @param font #hb_font_t to work upon
   * @param leftGlyph The glyph ID of the left glyph in the glyph pair
   * @param rightGlyph The glyph ID of the right glyph in the glyph pair
   * @returns The kerning adjustment value
   */
  function fontGetGlyphHKerning(
    font: font_t,
    leftGlyph: codepoint_t,
    rightGlyph: codepoint_t
  ): position_t
  /**
   * Fetches the (X,Y) coordinates of the origin for a glyph ID
   * in the specified font, for horizontal text segments.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyphHOrigin(
    font: font_t,
    glyph: codepoint_t
  ): [/* returnType */ bool_t, /* x */ position_t, /* y */ position_t]
  /**
   * Fetches the kerning-adjustment value for a glyph-pair in the specified font.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param firstGlyph The glyph ID of the first glyph in the glyph pair to query
   * @param secondGlyph The glyph ID of the second glyph in the glyph pair to query
   * @param direction The direction of the text segment
   */
  function fontGetGlyphKerningForDirection(
    font: font_t,
    firstGlyph: codepoint_t,
    secondGlyph: codepoint_t,
    direction: direction_t
  ): [/* x */ position_t, /* y */ position_t]
  /**
   * Fetches the glyph-name string for a glyph ID in the specified `font`.
   *
   * According to the OpenType specification, glyph names are limited to 63
   * characters and can only contain (a subset of) ASCII.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyphName(
    font: font_t,
    glyph: codepoint_t
  ): [/* returnType */ bool_t, /* name */ string[]]
  /**
   * Fetches the (X,Y) coordinates of the origin for a glyph in
   * the specified font.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @param direction The direction of the text segment
   */
  function fontGetGlyphOriginForDirection(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t
  ): [/* x */ position_t, /* y */ position_t]
  /**
   * Fetches the glyph shape that corresponds to a glyph in the specified `font`.
   * The shape is returned by way of calls to the callbacks of the `dfuncs`
   * objects, with `draw_data` passed to them.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID
   * @param dfuncs #hb_draw_funcs_t to draw to
   * @param drawData User data to pass to draw callbacks
   */
  function fontGetGlyphShape(
    font: font_t,
    glyph: codepoint_t,
    dfuncs: draw_funcs_t,
    drawData: any | null
  ): void
  /**
   * Fetches the advance for a glyph ID in the specified font,
   * for vertical text segments.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @returns The advance of @glyph within @font
   */
  function fontGetGlyphVAdvance(font: font_t, glyph: codepoint_t): position_t
  /**
   * Fetches the advances for a sequence of glyph IDs in the specified
   * font, for vertical text segments.
   * @param font #hb_font_t to work upon
   * @param count The number of glyph IDs in the sequence queried
   * @param firstGlyph The first glyph ID to query
   * @param glyphStride The stride between successive glyph IDs
   */
  function fontGetGlyphVAdvances(
    font: font_t,
    count: number,
    firstGlyph: codepoint_t,
    glyphStride: number
  ): [/* firstAdvance */ position_t, /* advanceStride */ number]
  /**
   * Fetches the kerning-adjustment value for a glyph-pair in
   * the specified font, for vertical text segments.
   *
   * <note>It handles legacy kerning only (as returned by the corresponding
   * #hb_font_funcs_t function).</note>
   * @param font #hb_font_t to work upon
   * @param topGlyph The glyph ID of the top glyph in the glyph pair
   * @param bottomGlyph The glyph ID of the bottom glyph in the glyph pair
   * @returns The kerning adjustment value
   */
  function fontGetGlyphVKerning(
    font: font_t,
    topGlyph: codepoint_t,
    bottomGlyph: codepoint_t
  ): position_t
  /**
   * Fetches the (X,Y) coordinates of the origin for a glyph ID
   * in the specified font, for vertical text segments.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetGlyphVOrigin(
    font: font_t,
    glyph: codepoint_t
  ): [/* returnType */ bool_t, /* x */ position_t, /* y */ position_t]
  /**
   * Fetches the extents for a specified font, for horizontal
   * text segments.
   * @param font #hb_font_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetHExtents(
    font: font_t
  ): [/* returnType */ bool_t, /* extents */ font_extents_t]
  /**
   * Fetches the nominal glyph ID for a Unicode code point in the
   * specified font.
   *
   * This version of the function should not be used to fetch glyph IDs
   * for code points modified by variation selectors. For variation-selector
   * support, user hb_font_get_variation_glyph() or use hb_font_get_glyph().
   * @param font #hb_font_t to work upon
   * @param unicode The Unicode code point to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetNominalGlyph(
    font: font_t,
    unicode: codepoint_t
  ): [/* returnType */ bool_t, /* glyph */ codepoint_t]
  /**
   * Fetches the nominal glyph IDs for a sequence of Unicode code points. Glyph
   * IDs must be returned in a #hb_codepoint_t output parameter. Stops at the
   * first unsupported glyph ID.
   * @param font #hb_font_t to work upon
   * @param count number of code points to query
   * @param firstUnicode The first Unicode code point to query
   * @param unicodeStride The stride between successive code points
   * @param glyphStride The stride between successive glyph IDs
   * @returns the number of code points processed
   */
  function fontGetNominalGlyphs(
    font: font_t,
    count: number,
    firstUnicode: codepoint_t,
    unicodeStride: number,
    glyphStride: number
  ): [/* returnType */ number, /* firstGlyph */ codepoint_t]
  /**
   * Fetches the parent font of `font`.
   * @param font #hb_font_t to work upon
   * @returns The parent font object
   */
  function fontGetParent(font: font_t): font_t
  /**
   * Fetches the horizontal and vertical points-per-em (ppem) of a font.
   * @param font #hb_font_t to work upon
   */
  function fontGetPpem(font: font_t): [/* xPpem */ number, /* yPpem */ number]
  /**
   * Fetches the "point size" of a font. Used in CoreText to
   * implement optical sizing.
   * @param font #hb_font_t to work upon
   * @returns Point size.  A value of zero means "not set."
   */
  function fontGetPtem(font: font_t): number
  /**
   * Fetches the horizontal and vertical scale of a font.
   * @param font #hb_font_t to work upon
   */
  function fontGetScale(
    font: font_t
  ): [/* xScale */ number, /* yScale */ number]
  /**
   * Returns the internal serial number of the font. The serial
   * number is increased every time a setting on the font is
   * changed, using a setter function.
   * @param font #hb_font_t to work upon
   * @returns serial number
   */
  function fontGetSerial(font: font_t): number
  /**
   * Fetches the "synthetic boldness" parameters of a font.
   * @param font #hb_font_t to work upon
   */
  function fontGetSyntheticBold(
    font: font_t
  ): [/* xEmbolden */ number, /* yEmbolden */ number, /* inPlace */ bool_t]
  /**
   * Fetches the "synthetic slant" of a font.
   * @param font #hb_font_t to work upon
   * @returns Synthetic slant.  By default is zero.
   */
  function fontGetSyntheticSlant(font: font_t): number
  /**
   * Fetches the extents for a specified font, for vertical
   * text segments.
   * @param font #hb_font_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetVExtents(
    font: font_t
  ): [/* returnType */ bool_t, /* extents */ font_extents_t]
  /**
   * Fetches the list of variation coordinates (in design-space units) currently
   * set on a font.
   *
   * Note that this returned array may only contain values for some
   * (or none) of the axes; omitted axes effectively have their default
   * values.
   *
   * Return value is valid as long as variation coordinates of the font
   * are not modified.
   * @param font #hb_font_t to work upon
   * @returns coordinates array
   */
  function fontGetVarCoordsDesign(
    font: font_t
  ): [/* returnType */ number, /* length */ number]
  /**
   * Fetches the list of normalized variation coordinates currently
   * set on a font.
   *
   * Note that this returned array may only contain values for some
   * (or none) of the axes; omitted axes effectively have zero values.
   *
   * Return value is valid as long as variation coordinates of the font
   * are not modified.
   * @param font #hb_font_t to work upon
   * @returns coordinates array
   */
  function fontGetVarCoordsNormalized(
    font: font_t
  ): [/* returnType */ number, /* length */ number]
  /**
   * Returns the currently-set named-instance index of the font.
   * @param font a font.
   * @returns Named-instance index or %HB_FONT_NO_VAR_NAMED_INSTANCE.
   */
  function fontGetVarNamedInstance(font: font_t): number
  /**
   * Fetches the glyph ID for a Unicode code point when followed by
   * by the specified variation-selector code point, in the specified
   * font.
   * @param font #hb_font_t to work upon
   * @param unicode The Unicode code point to query
   * @param variationSelector The  variation-selector code point to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGetVariationGlyph(
    font: font_t,
    unicode: codepoint_t,
    variationSelector: codepoint_t
  ): [/* returnType */ bool_t, /* glyph */ codepoint_t]
  /**
   * Fetches the glyph ID from `font` that matches the specified string.
   * Strings of the format `gidDDD` or `uniUUUU` are parsed automatically.
   *
   * <note>Note: `len` == -1 means the string is null-terminated.</note>
   * @param font #hb_font_t to work upon
   * @param s string to query
   * @returns `true` if data found, `false` otherwise
   */
  function fontGlyphFromString(
    font: font_t,
    s: number[]
  ): [/* returnType */ bool_t, /* glyph */ codepoint_t]
  /**
   * Fetches the name of the specified glyph ID in `font` and returns
   * it in string `s`.
   *
   * If the glyph ID has no name in `font,` a string of the form `gidDDD` is
   * generated, with `DDD` being the glyph ID.
   *
   * According to the OpenType specification, glyph names are limited to 63
   * characters and can only contain (a subset of) ASCII.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   */
  function fontGlyphToString(font: font_t, glyph: codepoint_t): /* s */ string[]
  /**
   * Tests whether a font object is immutable.
   * @param font #hb_font_t to work upon
   * @returns `true` if @font is immutable, `false` otherwise
   */
  function fontIsImmutable(font: font_t): bool_t
  /**
   * Makes `font` immutable.
   * @param font #hb_font_t to work upon
   */
  function fontMakeImmutable(font: font_t): void
  /**
   * Paints the glyph.
   *
   * The painting instructions are returned by way of calls to
   * the callbacks of the `funcs` object, with `paint_data` passed
   * to them.
   *
   * If the font has color palettes (see hb_ot_color_has_palettes()),
   * then `palette_index` selects the palette to use. If the font only
   * has one palette, this will be 0.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID
   * @param pfuncs #hb_paint_funcs_t to paint with
   * @param paintData User data to pass to paint callbacks
   * @param paletteIndex The index of the font's color palette to use
   * @param foreground The foreground color, unpremultipled
   */
  function fontPaintGlyph(
    font: font_t,
    glyph: codepoint_t,
    pfuncs: paint_funcs_t,
    paintData: any | null,
    paletteIndex: number,
    foreground: color_t
  ): void
  /**
   * Sets `face` as the font-face value of `font`.
   * @param font #hb_font_t to work upon
   * @param face The #hb_face_t to assign
   */
  function fontSetFace(font: font_t, face: face_t): void
  /**
   * Replaces the font-functions structure attached to a font, updating
   * the font's user-data with `font-data` and the `destroy` callback.
   * @param font #hb_font_t to work upon
   * @param klass The font-functions structure.
   */
  function fontSetFuncs(font: font_t, klass: font_funcs_t): void
  /**
   * Replaces the user data attached to a font, updating the font's
   * `destroy` callback.
   * @param font #hb_font_t to work upon
   * @param fontData Data to attach to `font`
   */
  function fontSetFuncsData(font: font_t, fontData: any | null): void
  /**
   * Sets the parent font of `font`.
   * @param font #hb_font_t to work upon
   * @param parent The parent font object to assign
   */
  function fontSetParent(font: font_t, parent: font_t): void
  /**
   * Sets the horizontal and vertical pixels-per-em (PPEM) of a font.
   *
   * These values are used for pixel-size-specific adjustment to
   * shaping and draw results, though for the most part they are
   * unused and can be left unset.
   * @param font #hb_font_t to work upon
   * @param xPpem Horizontal ppem value to assign
   * @param yPpem Vertical ppem value to assign
   */
  function fontSetPpem(font: font_t, xPpem: number, yPpem: number): void
  /**
   * Sets the "point size" of a font. Set to zero to unset.
   * Used in CoreText to implement optical sizing.
   *
   * <note>Note: There are 72 points in an inch.</note>
   * @param font #hb_font_t to work upon
   * @param ptem font size in points.
   */
  function fontSetPtem(font: font_t, ptem: number): void
  /**
   * Sets the horizontal and vertical scale of a font.
   *
   * The font scale is a number related to, but not the same as,
   * font size. Typically the client establishes a scale factor
   * to be used between the two. For example, 64, or 256, which
   * would be the fractional-precision part of the font scale.
   * This is necessary because #hb_position_t values are integer
   * types and you need to leave room for fractional values
   * in there.
   *
   * For example, to set the font size to 20, with 64
   * levels of fractional precision you would call
   * `hb_font_set_scale(font, 20 * 64, 20 * 64)`.
   *
   * In the example above, even what font size 20 means is up to
   * you. It might be 20 pixels, or 20 points, or 20 millimeters.
   * HarfBuzz does not care about that.  You can set the point
   * size of the font using hb_font_set_ptem(), and the pixel
   * size using hb_font_set_ppem().
   *
   * The choice of scale is yours but needs to be consistent between
   * what you set here, and what you expect out of #hb_position_t
   * as well has draw / paint API output values.
   *
   * Fonts default to a scale equal to the UPEM value of their face.
   * A font with this setting is sometimes called an "unscaled" font.
   * @param font #hb_font_t to work upon
   * @param xScale Horizontal scale value to assign
   * @param yScale Vertical scale value to assign
   */
  function fontSetScale(font: font_t, xScale: number, yScale: number): void
  /**
   * Sets the "synthetic boldness" of a font.
   *
   * Positive values for `x_embolden` / `y_embolden` make a font
   * bolder, negative values thinner. Typical values are in the
   * 0.01 to 0.05 range. The default value is zero.
   *
   * Synthetic boldness is applied by offsetting the contour
   * points of the glyph shape.
   *
   * Synthetic boldness is applied when rendering a glyph via
   * hb_font_draw_glyph().
   *
   * If `in_place` is `false`, then glyph advance-widths are also
   * adjusted, otherwise they are not.  The in-place mode is
   * useful for simulating [font grading](https://fonts.google.com/knowledge/glossary/grade).
   * @param font #hb_font_t to work upon
   * @param xEmbolden the amount to embolden horizontally
   * @param yEmbolden the amount to embolden vertically
   * @param inPlace whether to embolden glyphs in-place
   */
  function fontSetSyntheticBold(
    font: font_t,
    xEmbolden: number,
    yEmbolden: number,
    inPlace: bool_t
  ): void
  /**
   * Sets the "synthetic slant" of a font.  By default is zero.
   * Synthetic slant is the graphical skew applied to the font
   * at rendering time.
   *
   * HarfBuzz needs to know this value to adjust shaping results,
   * metrics, and style values to match the slanted rendering.
   *
   * <note>Note: The glyph shape fetched via the hb_font_draw_glyph()
   * function is slanted to reflect this value as well.</note>
   *
   * <note>Note: The slant value is a ratio.  For example, a
   * 20% slant would be represented as a 0.2 value.</note>
   * @param font #hb_font_t to work upon
   * @param slant synthetic slant value.
   */
  function fontSetSyntheticSlant(font: font_t, slant: number): void
  /**
   * Applies a list of variation coordinates (in design-space units)
   * to a font.
   *
   * Note that this overrides all existing variations set on `font`.
   * Axes not included in `coords` will be effectively set to their
   * default values.
   * @param font #hb_font_t to work upon
   * @param coords Array of variation coordinates to apply
   */
  function fontSetVarCoordsDesign(font: font_t, coords: number[]): void
  /**
   * Applies a list of variation coordinates (in normalized units)
   * to a font.
   *
   * Note that this overrides all existing variations set on `font`.
   * Axes not included in `coords` will be effectively set to their
   * default values.
   *
   * <note>Note: Coordinates should be normalized to 2.14.</note>
   * @param font #hb_font_t to work upon
   * @param coords Array of variation coordinates to apply
   */
  function fontSetVarCoordsNormalized(font: font_t, coords: number[]): void
  /**
   * Sets design coords of a font from a named-instance index.
   * @param font a font.
   * @param instanceIndex named instance index.
   */
  function fontSetVarNamedInstance(font: font_t, instanceIndex: number): void
  /**
   * Change the value of one variation axis on the font.
   *
   * Note: This function is expensive to be called repeatedly.
   *   If you want to set multiple variation axes at the same time,
   *   use hb_font_set_variations() instead.
   * @param font #hb_font_t to work upon
   * @param tag The #hb_tag_t tag of the variation-axis name
   * @param value The value of the variation axis
   */
  function fontSetVariation(font: font_t, tag: tag_t, value: number): void
  /**
   * Applies a list of font-variation settings to a font.
   *
   * Note that this overrides all existing variations set on `font`.
   * Axes not included in `variations` will be effectively set to their
   * default values.
   * @param font #hb_font_t to work upon
   * @param variations Array of variation settings to apply
   */
  function fontSetVariations(font: font_t, variations: variation_t[]): void
  /**
   * Subtracts the origin coordinates from an (X,Y) point coordinate,
   * in the specified glyph ID in the specified font.
   *
   * Calls the appropriate direction-specific variant (horizontal
   * or vertical) depending on the value of `direction`.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph ID to query
   * @param direction The direction of the text segment
   * @param x Input = The original X coordinate     Output = The X coordinate minus the X-coordinate of the origin
   * @param y Input = The original Y coordinate     Output = The Y coordinate minus the Y-coordinate of the origin
   */
  function fontSubtractGlyphOriginForDirection(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t,
    x: position_t,
    y: position_t
  ): [/* x */ position_t, /* y */ position_t]
  /**
   * Creates an #hb_face_t face object from the specified FT_Face.
   *
   * Note that this is using the FT_Face object just to get at the underlying
   * font data, and fonts created from the returned #hb_face_t will use the native
   * HarfBuzz font implementation, unless you call hb_ft_font_set_funcs() on them.
   *
   * This variant of the function does not provide any life-cycle management.
   *
   * Most client programs should use hb_ft_face_create_referenced()
   * (or, perhaps, hb_ft_face_create_cached()) instead.
   *
   * If you know you have valid reasons not to use hb_ft_face_create_referenced(),
   * then it is the client program's responsibility to destroy `ft_face`
   * after the #hb_face_t face object has been destroyed.
   * @param ftFace FT_Face to work upon
   * @returns the new #hb_face_t face object
   */
  function ftFaceCreate(ftFace: freetype2.Face): face_t
  /**
   * Creates an #hb_face_t face object from the specified FT_Face.
   *
   * Note that this is using the FT_Face object just to get at the underlying
   * font data, and fonts created from the returned #hb_face_t will use the native
   * HarfBuzz font implementation, unless you call hb_ft_font_set_funcs() on them.
   *
   * This variant of the function caches the newly created #hb_face_t
   * face object, using the `generic` pointer of `ft_face`. Subsequent function
   * calls that are passed the same `ft_face` parameter will have the same
   * #hb_face_t returned to them, and that #hb_face_t will be correctly
   * reference counted.
   *
   * However, client programs are still responsible for destroying
   * `ft_face` after the last #hb_face_t face object has been destroyed.
   * @param ftFace FT_Face to work upon
   * @returns the new #hb_face_t face object
   */
  function ftFaceCreateCached(ftFace: freetype2.Face): face_t
  /**
   * Creates an #hb_face_t face object from the specified FT_Face.
   *
   * Note that this is using the FT_Face object just to get at the underlying
   * font data, and fonts created from the returned #hb_face_t will use the native
   * HarfBuzz font implementation, unless you call hb_ft_font_set_funcs() on them.
   *
   * This is the preferred variant of the hb_ft_face_create*
   * function family, because it calls FT_Reference_Face() on `ft_face,`
   * ensuring that `ft_face` remains alive as long as the resulting
   * #hb_face_t face object remains alive. Also calls FT_Done_Face()
   * when the #hb_face_t face object is destroyed.
   *
   * Use this version unless you know you have good reasons not to.
   * @param ftFace FT_Face to work upon
   * @returns the new #hb_face_t face object
   */
  function ftFaceCreateReferenced(ftFace: freetype2.Face): face_t
  /**
   * Refreshes the state of `font` when the underlying FT_Face has changed.
   * This function should be called after changing the size or
   * variation-axis settings on the FT_Face.
   * @param font #hb_font_t to work upon
   */
  function ftFontChanged(font: font_t): void
  /**
   * Creates an #hb_font_t font object from the specified FT_Face.
   *
   * <note>Note: You must set the face size on `ft_face` before calling
   * hb_ft_font_create() on it. HarfBuzz assumes size is always set and will
   * access `size` member of FT_Face unconditionally.</note>
   *
   * This variant of the function does not provide any life-cycle management.
   *
   * Most client programs should use hb_ft_font_create_referenced()
   * instead.
   *
   * If you know you have valid reasons not to use hb_ft_font_create_referenced(),
   * then it is the client program's responsibility to destroy `ft_face`
   * after the #hb_font_t font object has been destroyed.
   *
   * HarfBuzz will use the `destroy` callback on the #hb_font_t font object
   * if it is supplied when you use this function. However, even if `destroy`
   * is provided, it is the client program's responsibility to destroy `ft_face,`
   * and it is the client program's responsibility to ensure that `ft_face` is
   * destroyed only after the #hb_font_t font object has been destroyed.
   * @param ftFace FT_Face to work upon
   * @returns the new #hb_font_t font object
   */
  function ftFontCreate(ftFace: freetype2.Face): font_t
  /**
   * Creates an #hb_font_t font object from the specified FT_Face.
   *
   * <note>Note: You must set the face size on `ft_face` before calling
   * hb_ft_font_create_referenced() on it. HarfBuzz assumes size is always set
   * and will access `size` member of FT_Face unconditionally.</note>
   *
   * This is the preferred variant of the hb_ft_font_create*
   * function family, because it calls FT_Reference_Face() on `ft_face,`
   * ensuring that `ft_face` remains alive as long as the resulting
   * #hb_font_t font object remains alive.
   *
   * Use this version unless you know you have good reasons not to.
   * @param ftFace FT_Face to work upon
   * @returns the new #hb_font_t font object
   */
  function ftFontCreateReferenced(ftFace: freetype2.Face): font_t
  /**
   * Fetches the FT_Load_Glyph load flags of the specified #hb_font_t.
   *
   * For more information, see
   * <https://freetype.org/freetype2/docs/reference/ft2-glyph_retrieval.html#ft_load_xxx>
   *
   * This function works with #hb_font_t objects created by
   * hb_ft_font_create() or hb_ft_font_create_referenced().
   * @param font #hb_font_t to work upon
   * @returns FT_Load_Glyph flags found, or 0
   */
  function ftFontGetLoadFlags(font: font_t): number
  /**
   * Configures the font-functions structure of the specified
   * #hb_font_t font object to use FreeType font functions.
   *
   * In particular, you can use this function to configure an
   * existing #hb_face_t face object for use with FreeType font
   * functions even if that #hb_face_t face object was initially
   * created with hb_face_create(), and therefore was not
   * initially configured to use FreeType font functions.
   *
   * An #hb_font_t object created with hb_ft_font_create()
   * is preconfigured for FreeType font functions and does not
   * require this function to be used.
   *
   * Note that if you modify the underlying #hb_font_t after
   * calling this function, you need to call hb_ft_hb_font_changed()
   * to update the underlying FT_Face.
   *
   * <note>Note: Internally, this function creates an FT_Face.
   * </note>
   * @param font #hb_font_t to work upon
   */
  function ftFontSetFuncs(font: font_t): void
  /**
   * Sets the FT_Load_Glyph load flags for the specified #hb_font_t.
   *
   * For more information, see
   * <https://freetype.org/freetype2/docs/reference/ft2-glyph_retrieval.html#ft_load_xxx>
   *
   * This function works with #hb_font_t objects created by
   * hb_ft_font_create() or hb_ft_font_create_referenced().
   * @param font #hb_font_t to work upon
   * @param loadFlags The FreeType load flags to set
   */
  function ftFontSetLoadFlags(font: font_t, loadFlags: number): void
  /**
   * Refreshes the state of the underlying FT_Face of `font` when the hb_font_t
   * `font` has changed.
   * This function should be called after changing the size or
   * variation-axis settings on the `font`.
   * This call is fast if nothing has changed on `font`.
   * @param font #hb_font_t to work upon
   * @returns true if changed, false otherwise
   */
  function ftHbFontChanged(font: font_t): bool_t
  /**
   * Creates an #hb_blob_t blob from the specified
   * GBytes data structure.
   * @param gbytes the GBytes structure to work upon
   * @returns the new #hb_blob_t blob object
   */
  function glibBlobCreate(gbytes: any): blob_t
  /**
   * Fetches a Unicode-functions structure that is populated
   * with the appropriate GLib function for each method.
   * @returns a pointer to the #hb_unicode_funcs_t Unicode-functions structure
   */
  function glibGetUnicodeFuncs(): unicode_funcs_t
  /**
   * Fetches the GUnicodeScript identifier that corresponds to the
   * specified #hb_script_t script.
   * @param script The #hb_script_t to query
   * @returns the GUnicodeScript identifier found
   */
  function glibScriptFromScript(script: script_t): GLib.UnicodeScript
  /**
   * Fetches the #hb_script_t script that corresponds to the
   * specified GUnicodeScript identifier.
   * @param script The GUnicodeScript identifier to query
   * @returns the #hb_script_t script found
   */
  function glibScriptToScript(script: GLib.UnicodeScript): script_t
  /**
   * Returns glyph flags encoded within a #hb_glyph_info_t.
   * @param info a #hb_glyph_info_t
   * @returns The #hb_glyph_flags_t encoded within @info
   */
  function glyphInfoGetGlyphFlags(info: glyph_info_t): glyph_flags_t
  /**
   * Converts `str` representing a BCP 47 language tag to the corresponding
   * #hb_language_t.
   * @param str a string representing       a BCP 47 language tag
   * @returns The #hb_language_t corresponding to the BCP 47 language tag.
   */
  function languageFromString(str: number[]): language_t
  /**
   * Fetch the default language from current locale.
   *
   * <note>Note that the first time this function is called, it calls
   * "setlocale (LC_CTYPE, nullptr)" to fetch current locale.  The underlying
   * setlocale function is, in many implementations, NOT threadsafe.  To avoid
   * problems, call this function once before multiple threads can call it.
   * This function is only used from hb_buffer_guess_segment_properties() by
   * HarfBuzz itself.</note>
   * @returns The default language of the locale as an #hb_language_t
   */
  function languageGetDefault(): language_t
  /**
   * Check whether a second language tag is the same or a more
   * specific version of the provided language tag.  For example,
   * "fa_IR.utf8" is a more specific tag for "fa" or for "fa_IR".
   * @param language The #hb_language_t to work on
   * @param specific Another #hb_language_t
   * @returns `true` if languages match, `false` otherwise.
   */
  function languageMatches(language: language_t, specific: language_t): bool_t
  /**
   * Converts an #hb_language_t to a string.
   * @param language The #hb_language_t to convert
   * @returns A `NULL`-terminated string representing the @language. Must not be freed by the caller.
   */
  function languageToString(language: language_t): string
  /**
   * Tests whether memory allocation for a set was successful.
   * @param map A map
   * @returns `true` if allocation succeeded, `false` otherwise
   */
  function mapAllocationSuccessful(map: map_t): bool_t
  /**
   * Clears out the contents of `map`.
   * @param map A map
   */
  function mapClear(map: map_t): void
  /**
   * Allocate a copy of `map`.
   * @param map A map
   * @returns Newly-allocated map.
   */
  function mapCopy(map: map_t): map_t
  /**
   * Creates a new, initially empty map.
   * @returns The new #hb_map_t
   */
  function mapCreate(): map_t
  /**
   * Removes `key` and its stored value from `map`.
   * @param map A map
   * @param key The key to delete
   */
  function mapDel(map: map_t, key: codepoint_t): void
  /**
   * Fetches the value stored for `key` in `map`.
   * @param map A map
   * @param key The key to query
   */
  function mapGet(map: map_t, key: codepoint_t): codepoint_t
  /**
   * Fetches the singleton empty #hb_map_t.
   * @returns The empty #hb_map_t
   */
  function mapGetEmpty(): map_t
  /**
   * Returns the number of key-value pairs in the map.
   * @param map A map
   * @returns The population of @map
   */
  function mapGetPopulation(map: map_t): number
  /**
   * Tests whether `key` is an element of `map`.
   * @param map A map
   * @param key The key to query
   * @returns `true` if @key is found in @map, `false` otherwise
   */
  function mapHas(map: map_t, key: codepoint_t): bool_t
  /**
   * Creates a hash representing `map`.
   * @param map A map
   * @returns A hash of @map.
   */
  function mapHash(map: map_t): number
  /**
   * Tests whether `map` is empty (contains no elements).
   * @param map A map
   * @returns `true` if @map is empty
   */
  function mapIsEmpty(map: map_t): bool_t
  /**
   * Tests whether `map` and `other` are equal (contain the same
   * elements).
   * @param map A map
   * @param other Another map
   * @returns `true` if the two maps are equal, `false` otherwise.
   */
  function mapIsEqual(map: map_t, other: map_t): bool_t
  /**
   * Add the keys of `map` to `keys`.
   * @param map A map
   * @param keys A set
   */
  function mapKeys(map: map_t, keys: set_t): void
  /**
   * Fetches the next key/value pair in `map`.
   *
   * Set `idx` to -1 to get started.
   *
   * If the map is modified during iteration, the behavior is undefined.
   *
   * The order in which the key/values are returned is undefined.
   * @param map A map
   * @param idx Iterator internal state
   * @returns `true` if there was a next value, `false` otherwise
   */
  function mapNext(
    map: map_t,
    idx: number
  ): [
    /* returnType */ bool_t,
    /* idx */ number,
    /* key */ codepoint_t,
    /* value */ codepoint_t,
  ]
  /**
   * Stores `key:``value` in the map.
   * @param map A map
   * @param key The key to store in the map
   * @param value The value to store for `key`
   */
  function mapSet(map: map_t, key: codepoint_t, value: codepoint_t): void
  /**
   * Add the contents of `other` to `map`.
   * @param map A map
   * @param other Another map
   */
  function mapUpdate(map: map_t, other: map_t): void
  /**
   * Add the values of `map` to `values`.
   * @param map A map
   * @param values A set
   */
  function mapValues(map: map_t, values: set_t): void
  /**
   * Fetches a list of all color layers for the specified glyph index in the specified
   * face. The list returned will begin at the offset provided.
   * @param face #hb_face_t to work upon
   * @param glyph The glyph index to query
   * @param startOffset offset of the first layer to retrieve
   * @returns Total number of layers available for the glyph index queried
   */
  function otColorGlyphGetLayers(
    face: face_t,
    glyph: codepoint_t,
    startOffset: number
  ): [/* returnType */ number, /* layers */ ot_color_layer_t[] | null]
  /**
   * Tests where a face includes COLRv1 paint
   * data for `glyph`.
   * @param face #hb_face_t to work upon
   * @param glyph The glyph index to query
   * @returns `true` if data found, `false` otherwise
   */
  function otColorGlyphHasPaint(face: face_t, glyph: codepoint_t): bool_t
  /**
   * Fetches the PNG image for a glyph. This function takes a font object, not a face object,
   * as input. To get an optimally sized PNG blob, the PPEM values must be set on the `font`
   * object. If PPEM is unset, the blob returned will be the largest PNG available.
   *
   * If the glyph has no PNG image, the singleton empty blob is returned.
   * @param font #hb_font_t to work upon
   * @param glyph a glyph index
   * @returns An #hb_blob_t containing the PNG image for the glyph, if available
   */
  function otColorGlyphReferencePng(font: font_t, glyph: codepoint_t): blob_t
  /**
   * Fetches the SVG document for a glyph. The blob may be either plain text or gzip-encoded.
   *
   * If the glyph has no SVG document, the singleton empty blob is returned.
   * @param face #hb_face_t to work upon
   * @param glyph a svg glyph index
   * @returns An #hb_blob_t containing the SVG document of the glyph, if available
   */
  function otColorGlyphReferenceSvg(face: face_t, glyph: codepoint_t): blob_t
  /**
   * Tests whether a face includes a `COLR` table
   * with data according to COLRv0.
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function otColorHasLayers(face: face_t): bool_t
  /**
   * Tests where a face includes a `COLR` table
   * with data according to COLRv1.
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function otColorHasPaint(face: face_t): bool_t
  /**
   * Tests whether a face includes a `CPAL` color-palette table.
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function otColorHasPalettes(face: face_t): bool_t
  /**
   * Tests whether a face has PNG glyph images (either in `CBDT` or `sbix` tables).
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function otColorHasPng(face: face_t): bool_t
  /**
   * Tests whether a face includes any `SVG` glyph images.
   * @param face #hb_face_t to work upon.
   * @returns `true` if data found, `false` otherwise.
   */
  function otColorHasSvg(face: face_t): bool_t
  /**
   * Fetches the `name` table Name ID that provides display names for
   * the specified color in a face's `CPAL` color palette.
   *
   * Display names can be generic (e.g., "Background") or specific
   * (e.g., "Eye color").
   * @param face #hb_face_t to work upon
   * @param colorIndex The index of the color
   * @returns the Name ID found for the color.
   */
  function otColorPaletteColorGetNameId(
    face: face_t,
    colorIndex: number
  ): ot_name_id_t
  /**
   * Fetches a list of the colors in a color palette.
   *
   * After calling this function, `colors` will be filled with the palette
   * colors. If `colors` is NULL, the function will just return the number
   * of total colors without storing any actual colors; this can be used
   * for allocating a buffer of suitable size before calling
   * hb_ot_color_palette_get_colors() a second time.
   *
   * The RGBA values in the palette are unpremultiplied. See the
   * OpenType spec [CPAL](https://learn.microsoft.com/en-us/typography/opentype/spec/cpal)
   * section for details.
   * @param face #hb_face_t to work upon
   * @param paletteIndex the index of the color palette to query
   * @param startOffset offset of the first color to retrieve
   * @returns the total number of colors in the palette
   */
  function otColorPaletteGetColors(
    face: face_t,
    paletteIndex: number,
    startOffset: number
  ): [/* returnType */ number, /* colors */ color_t[] | null]
  /**
   * Fetches the number of color palettes in a face.
   * @param face #hb_face_t to work upon
   * @returns the number of palettes found
   */
  function otColorPaletteGetCount(face: face_t): number
  /**
   * Fetches the flags defined for a color palette.
   * @param face #hb_face_t to work upon
   * @param paletteIndex The index of the color palette
   * @returns the #hb_ot_color_palette_flags_t of the requested color palette
   */
  function otColorPaletteGetFlags(
    face: face_t,
    paletteIndex: number
  ): ot_color_palette_flags_t
  /**
   * Fetches the `name` table Name ID that provides display names for
   * a `CPAL` color palette.
   *
   * Palette display names can be generic (e.g., "Default") or provide
   * specific, themed names (e.g., "Spring", "Summer", "Fall", and "Winter").
   * @param face #hb_face_t to work upon
   * @param paletteIndex The index of the color palette
   * @returns the Named ID found for the palette. If the requested palette has no name the result is #HB_OT_NAME_ID_INVALID.
   */
  function otColorPaletteGetNameId(
    face: face_t,
    paletteIndex: number
  ): ot_name_id_t
  /**
   * Sets the font functions to use when working with `font`.
   * @param font #hb_font_t to work upon
   */
  function otFontSetFuncs(font: font_t): void
  /**
   * Fetches a list of all feature indexes in the specified face's GSUB table
   * or GPOS table, underneath the specified scripts, languages, and features.
   * If no list of scripts is provided, all scripts will be queried. If no list
   * of languages is provided, all languages will be queried. If no list of
   * features is provided, all features will be queried.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scripts The array of scripts to collect features for,   terminated by %HB_TAG_NONE
   * @param languages The array of languages to collect features for,   terminated by %HB_TAG_NONE
   * @param features The array of features to collect,   terminated by %HB_TAG_NONE
   */
  function otLayoutCollectFeatures(
    face: face_t,
    tableTag: tag_t,
    scripts: tag_t[] | null,
    languages: tag_t[] | null,
    features: tag_t[] | null
  ): /* featureIndexes */ set_t
  /**
   * Fetches the mapping from feature tags to feature indexes for
   * the specified script and language.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageIndex The index of the requested language tag
   */
  function otLayoutCollectFeaturesMap(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageIndex: number
  ): /* featureMap */ map_t
  /**
   * Fetches a list of all feature-lookup indexes in the specified face's GSUB
   * table or GPOS table, underneath the specified scripts, languages, and
   * features. If no list of scripts is provided, all scripts will be queried.
   * If no list of languages is provided, all languages will be queried. If no
   * list of features is provided, all features will be queried.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scripts The array of scripts to collect lookups for,   terminated by %HB_TAG_NONE
   * @param languages The array of languages to collect lookups for,   terminated by %HB_TAG_NONE
   * @param features The array of features to collect lookups for,   terminated by %HB_TAG_NONE
   */
  function otLayoutCollectLookups(
    face: face_t,
    tableTag: tag_t,
    scripts: tag_t[] | null,
    languages: tag_t[] | null,
    features: tag_t[] | null
  ): /* lookupIndexes */ set_t
  /**
   * Fetches a list of the characters defined as having a variant under the specified
   * "Character Variant" ("cvXX") feature tag.
   * @param face #hb_face_t to work upon
   * @param tableTag table tag to query, "GSUB" or "GPOS".
   * @param featureIndex index of feature to query.
   * @param startOffset offset of the first character to retrieve
   * @returns Number of total sample characters in the cvXX feature.
   */
  function otLayoutFeatureGetCharacters(
    face: face_t,
    tableTag: tag_t,
    featureIndex: number,
    startOffset: number
  ): [/* returnType */ number, /* characters */ codepoint_t[]]
  /**
   * Fetches a list of all lookups enumerated for the specified feature, in
   * the specified face's GSUB table or GPOS table. The list returned will
   * begin at the offset provided.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param featureIndex The index of the requested feature
   * @param startOffset offset of the first lookup to retrieve
   * @returns Total number of lookups.
   */
  function otLayoutFeatureGetLookups(
    face: face_t,
    tableTag: tag_t,
    featureIndex: number,
    startOffset: number
  ): [/* returnType */ number, /* lookupIndexes */ number[]]
  /**
   * Fetches name indices from feature parameters for "Stylistic Set" ('ssXX') or
   * "Character Variant" ('cvXX') features.
   * @param face #hb_face_t to work upon
   * @param tableTag table tag to query, "GSUB" or "GPOS".
   * @param featureIndex index of feature to query.
   * @returns `true` if data found, `false` otherwise
   */
  function otLayoutFeatureGetNameIds(
    face: face_t,
    tableTag: tag_t,
    featureIndex: number
  ): [
    /* returnType */ bool_t,
    /* labelId */ ot_name_id_t,
    /* tooltipId */ ot_name_id_t,
    /* sampleId */ ot_name_id_t,
    /* numNamedParameters */ number,
    /* firstParamId */ ot_name_id_t,
  ]
  /**
   * Fetches a list of all lookups enumerated for the specified feature, in
   * the specified face's GSUB table or GPOS table, enabled at the specified
   * variations index. The list returned will begin at the offset provided.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param featureIndex The index of the feature to query
   * @param variationsIndex The index of the feature variation to query
   * @param startOffset offset of the first lookup to retrieve
   * @returns Total number of lookups.
   */
  function otLayoutFeatureWithVariationsGetLookups(
    face: face_t,
    tableTag: tag_t,
    featureIndex: number,
    variationsIndex: number,
    startOffset: number
  ): [/* returnType */ number, /* lookupIndexes */ number[]]
  /**
   * Fetches a list of all attachment points for the specified glyph in the GDEF
   * table of the face. The list returned will begin at the offset provided.
   *
   * Useful if the client program wishes to cache the list.
   * @param face The #hb_face_t to work on
   * @param glyph The #hb_codepoint_t code point to query
   * @param startOffset offset of the first attachment point to retrieve
   * @returns Total number of attachment points for @glyph.
   */
  function otLayoutGetAttachPoints(
    face: face_t,
    glyph: codepoint_t,
    startOffset: number
  ): [/* returnType */ number, /* pointArray */ number[]]
  /**
   * Fetches a baseline value from the face.
   * @param font a font
   * @param baselineTag a baseline tag
   * @param direction text direction.
   * @param scriptTag script tag.
   * @param languageTag language tag, currently unused.
   * @returns `true` if found baseline value in the font.
   */
  function otLayoutGetBaseline(
    font: font_t,
    baselineTag: ot_layout_baseline_tag_t,
    direction: direction_t,
    scriptTag: tag_t,
    languageTag: tag_t
  ): [/* returnType */ bool_t, /* coord */ position_t | null]
  /**
   * Fetches a baseline value from the face.
   *
   * This function is like hb_ot_layout_get_baseline() but takes
   * #hb_script_t and #hb_language_t instead of OpenType #hb_tag_t.
   * @param font a font
   * @param baselineTag a baseline tag
   * @param direction text direction.
   * @param script script.
   * @param language language, currently unused.
   * @returns `true` if found baseline value in the font.
   */
  function otLayoutGetBaseline2(
    font: font_t,
    baselineTag: ot_layout_baseline_tag_t,
    direction: direction_t,
    script: script_t,
    language: language_t | null
  ): [/* returnType */ bool_t, /* coord */ position_t | null]
  /**
   * Fetches a baseline value from the face, and synthesizes
   * it if the font does not have it.
   * @param font a font
   * @param baselineTag a baseline tag
   * @param direction text direction.
   * @param scriptTag script tag.
   * @param languageTag language tag, currently unused.
   */
  function otLayoutGetBaselineWithFallback(
    font: font_t,
    baselineTag: ot_layout_baseline_tag_t,
    direction: direction_t,
    scriptTag: tag_t,
    languageTag: tag_t
  ): /* coord */ position_t
  /**
   * Fetches a baseline value from the face, and synthesizes
   * it if the font does not have it.
   *
   * This function is like hb_ot_layout_get_baseline_with_fallback() but takes
   * #hb_script_t and #hb_language_t instead of OpenType #hb_tag_t.
   * @param font a font
   * @param baselineTag a baseline tag
   * @param direction text direction.
   * @param script script.
   * @param language language, currently unused.
   */
  function otLayoutGetBaselineWithFallback2(
    font: font_t,
    baselineTag: ot_layout_baseline_tag_t,
    direction: direction_t,
    script: script_t,
    language: language_t | null
  ): /* coord */ position_t
  /**
   * Fetches script/language-specific font extents.  These values are
   * looked up in the `BASE` table's `MinMax` records.
   *
   * If no such extents are found, the default extents for the font are
   * fetched. As such, the return value of this function can for the
   * most part be ignored.  Note that the per-script/language extents
   * do not have a line-gap value, and the line-gap is set to zero in
   * that case.
   * @param font a font
   * @param direction text direction.
   * @param scriptTag script tag.
   * @param languageTag language tag.
   * @returns `true` if found script/language-specific font extents.
   */
  function otLayoutGetFontExtents(
    font: font_t,
    direction: direction_t,
    scriptTag: tag_t,
    languageTag: tag_t
  ): [/* returnType */ bool_t, /* extents */ font_extents_t | null]
  /**
   * Fetches script/language-specific font extents.  These values are
   * looked up in the `BASE` table's `MinMax` records.
   *
   * If no such extents are found, the default extents for the font are
   * fetched. As such, the return value of this function can for the
   * most part be ignored.  Note that the per-script/language extents
   * do not have a line-gap value, and the line-gap is set to zero in
   * that case.
   *
   * This function is like hb_ot_layout_get_font_extents() but takes
   * #hb_script_t and #hb_language_t instead of OpenType #hb_tag_t.
   * @param font a font
   * @param direction text direction.
   * @param script script.
   * @param language language.
   * @returns `true` if found script/language-specific font extents.
   */
  function otLayoutGetFontExtents2(
    font: font_t,
    direction: direction_t,
    script: script_t,
    language: language_t | null
  ): [/* returnType */ bool_t, /* extents */ font_extents_t | null]
  /**
   * Fetches the GDEF class of the requested glyph in the specified face.
   * @param face The #hb_face_t to work on
   * @param glyph The #hb_codepoint_t code point to query
   * @returns The #hb_ot_layout_glyph_class_t glyph class of the given code point in the GDEF table of the face.
   */
  function otLayoutGetGlyphClass(
    face: face_t,
    glyph: codepoint_t
  ): ot_layout_glyph_class_t
  /**
   * Retrieves the set of all glyphs from the face that belong to the requested
   * glyph class in the face's GDEF table.
   * @param face The #hb_face_t to work on
   * @param klass The #hb_ot_layout_glyph_class_t GDEF class to retrieve
   */
  function otLayoutGetGlyphsInClass(
    face: face_t,
    klass: ot_layout_glyph_class_t
  ): /* glyphs */ set_t
  /**
   * Fetches the dominant horizontal baseline tag used by `script`.
   * @param script a script tag.
   * @returns dominant baseline tag for the @script.
   */
  function otLayoutGetHorizontalBaselineTagForScript(
    script: script_t
  ): ot_layout_baseline_tag_t
  /**
   * Fetches a list of the caret positions defined for a ligature glyph in the GDEF
   * table of the font. The list returned will begin at the offset provided.
   *
   * Note that a ligature that is formed from n characters will have n-1
   * caret positions. The first character is not represented in the array,
   * since its caret position is the glyph position.
   *
   * The positions returned by this function are 'unshaped', and will have to
   * be fixed up for kerning that may be applied to the ligature glyph.
   * @param font The #hb_font_t to work on
   * @param direction The #hb_direction_t text direction to use
   * @param glyph The #hb_codepoint_t code point to query
   * @param startOffset offset of the first caret position to retrieve
   * @returns Total number of ligature caret positions for @glyph.
   */
  function otLayoutGetLigatureCarets(
    font: font_t,
    direction: direction_t,
    glyph: codepoint_t,
    startOffset: number
  ): [/* returnType */ number, /* caretArray */ position_t[]]
  /**
   * Fetches optical-size feature data (i.e., the `size` feature from GPOS). Note that
   * the subfamily_id and the subfamily name string (accessible via the subfamily_name_id)
   * as used here are defined as pertaining only to fonts within a font family that differ
   * specifically in their respective size ranges; other ways to differentiate fonts within
   * a subfamily are not covered by the `size` feature.
   *
   * For more information on this distinction, see the [`size` feature documentation](
   * https://docs.microsoft.com/en-us/typography/opentype/spec/features_pt#tag-size).
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function otLayoutGetSizeParams(
    face: face_t
  ): [
    /* returnType */ bool_t,
    /* designSize */ number,
    /* subfamilyId */ number,
    /* subfamilyNameId */ ot_name_id_t,
    /* rangeStart */ number,
    /* rangeEnd */ number,
  ]
  /**
   * Tests whether a face has any glyph classes defined in its GDEF table.
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function otLayoutHasGlyphClasses(face: face_t): bool_t
  /**
   * Tests whether the specified face includes any GPOS positioning.
   * @param face #hb_face_t to work upon
   * @returns `true` if the face has GPOS data, `false` otherwise
   */
  function otLayoutHasPositioning(face: face_t): bool_t
  /**
   * Tests whether the specified face includes any GSUB substitutions.
   * @param face #hb_face_t to work upon
   * @returns `true` if data found, `false` otherwise
   */
  function otLayoutHasSubstitution(face: face_t): bool_t
  /**
   * Fetches the index of a given feature tag in the specified face's GSUB table
   * or GPOS table, underneath the specified script and language.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageIndex The index of the requested language tag
   * @param featureTag #hb_tag_t of the feature tag requested
   * @returns `true` if the feature is found, `false` otherwise
   */
  function otLayoutLanguageFindFeature(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageIndex: number,
    featureTag: tag_t
  ): [/* returnType */ bool_t, /* featureIndex */ number]
  /**
   * Fetches a list of all features in the specified face's GSUB table
   * or GPOS table, underneath the specified script and language. The list
   * returned will begin at the offset provided.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageIndex The index of the requested language tag
   * @param startOffset offset of the first feature tag to retrieve
   * @returns Total number of features.
   */
  function otLayoutLanguageGetFeatureIndexes(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageIndex: number,
    startOffset: number
  ): [/* returnType */ number, /* featureIndexes */ number[]]
  /**
   * Fetches a list of all features in the specified face's GSUB table
   * or GPOS table, underneath the specified script and language. The list
   * returned will begin at the offset provided.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageIndex The index of the requested language tag
   * @param startOffset offset of the first feature tag to retrieve
   * @returns Total number of feature tags.
   */
  function otLayoutLanguageGetFeatureTags(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageIndex: number,
    startOffset: number
  ): [/* returnType */ number, /* featureTags */ tag_t[]]
  /**
   * Fetches the tag of a requested feature index in the given face's GSUB or GPOS table,
   * underneath the specified script and language.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageIndex The index of the requested language tag
   * @returns `true` if the feature is found, `false` otherwise
   */
  function otLayoutLanguageGetRequiredFeature(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageIndex: number
  ): [
    /* returnType */ bool_t,
    /* featureIndex */ number,
    /* featureTag */ tag_t,
  ]
  /**
   * Fetches the index of a requested feature in the given face's GSUB or GPOS table,
   * underneath the specified script and language.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageIndex The index of the requested language tag
   * @returns `true` if the feature is found, `false` otherwise
   */
  function otLayoutLanguageGetRequiredFeatureIndex(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageIndex: number
  ): [/* returnType */ bool_t, /* featureIndex */ number]
  /**
   * Fetches a list of all glyphs affected by the specified lookup in the
   * specified face's GSUB table or GPOS table.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param lookupIndex The index of the feature lookup to query
   */
  function otLayoutLookupCollectGlyphs(
    face: face_t,
    tableTag: tag_t,
    lookupIndex: number
  ): [
    /* glyphsBefore */ set_t,
    /* glyphsInput */ set_t,
    /* glyphsAfter */ set_t,
    /* glyphsOutput */ set_t,
  ]
  /**
   * Fetches alternates of a glyph from a given GSUB lookup index.
   * @param face a face.
   * @param lookupIndex index of the feature lookup to query.
   * @param glyph a glyph id.
   * @param startOffset starting offset.
   * @returns Total number of alternates found in the specific lookup index for the given glyph id.
   */
  function otLayoutLookupGetGlyphAlternates(
    face: face_t,
    lookupIndex: number,
    glyph: codepoint_t,
    startOffset: number
  ): [/* returnType */ number, /* alternateGlyphs */ codepoint_t[]]
  /**
   * Fetches the optical bound of a glyph positioned at the margin of text.
   * The direction identifies which edge of the glyph to query.
   * @param font a font.
   * @param lookupIndex index of the feature lookup to query.
   * @param direction edge of the glyph to query.
   * @param glyph a glyph id.
   * @returns Adjustment value. Negative values mean the glyph will stick out of the margin.
   */
  function otLayoutLookupGetOpticalBound(
    font: font_t,
    lookupIndex: number,
    direction: direction_t,
    glyph: codepoint_t
  ): position_t
  /**
   * Compute the transitive closure of glyphs needed for a
   * specified lookup.
   * @param face #hb_face_t to work upon
   * @param lookupIndex index of the feature lookup to query
   */
  function otLayoutLookupSubstituteClosure(
    face: face_t,
    lookupIndex: number
  ): /* glyphs */ set_t
  /**
   * Tests whether a specified lookup in the specified face would
   * trigger a substitution on the given glyph sequence.
   * @param face #hb_face_t to work upon
   * @param lookupIndex The index of the lookup to query
   * @param glyphs The sequence of glyphs to query for substitution
   * @param glyphsLength The length of the glyph sequence
   * @param zeroContext #hb_bool_t indicating whether pre-/post-context are disallowed in substitutions
   * @returns `true` if a substitution would be triggered, `false` otherwise
   */
  function otLayoutLookupWouldSubstitute(
    face: face_t,
    lookupIndex: number,
    glyphs: codepoint_t,
    glyphsLength: number,
    zeroContext: bool_t
  ): bool_t
  /**
   * Compute the transitive closure of glyphs needed for all of the
   * provided lookups.
   * @param face #hb_face_t to work upon
   * @param lookups The set of lookups to query
   */
  function otLayoutLookupsSubstituteClosure(
    face: face_t,
    lookups: set_t
  ): /* glyphs */ set_t
  /**
   * Fetches the index of a given language tag in the specified face's GSUB table
   * or GPOS table, underneath the specified script tag.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageTag The #hb_tag_t of the requested language
   * @param languageIndex The index of the requested language
   * @returns `true` if the language tag is found, `false` otherwise
   */
  function otLayoutScriptFindLanguage(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageTag: tag_t,
    languageIndex: number
  ): bool_t
  /**
   * Fetches a list of language tags in the given face's GSUB or GPOS table, underneath
   * the specified script index. The list returned will begin at the offset provided.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param startOffset offset of the first language tag to retrieve
   * @returns Total number of language tags.
   */
  function otLayoutScriptGetLanguageTags(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    startOffset: number
  ): [/* returnType */ number, /* languageTags */ tag_t[]]
  /**
   * Fetches the index of the first language tag fom `language_tags` that is present
   * in the specified face's GSUB or GPOS table, underneath the specified script
   * index.
   *
   * If none of the given language tags is found, `false` is returned and
   * `language_index` is set to the default language index.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageCount The number of languages in the specified script
   * @param languageTags The array of language tags
   * @returns `true` if one of the given language tags is found, `false` otherwise
   */
  function otLayoutScriptSelectLanguage(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageCount: number,
    languageTags: tag_t
  ): [/* returnType */ bool_t, /* languageIndex */ number]
  /**
   * Fetches the index of the first language tag fom `language_tags` that is present
   * in the specified face's GSUB or GPOS table, underneath the specified script
   * index.
   *
   * If none of the given language tags is found, `false` is returned and
   * `language_index` is set to #HB_OT_LAYOUT_DEFAULT_LANGUAGE_INDEX and
   * `chosen_language` is set to #HB_TAG_NONE.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptIndex The index of the requested script tag
   * @param languageCount The number of languages in the specified script
   * @param languageTags The array of language tags
   * @returns `true` if one of the given language tags is found, `false` otherwise
   */
  function otLayoutScriptSelectLanguage2(
    face: face_t,
    tableTag: tag_t,
    scriptIndex: number,
    languageCount: number,
    languageTags: tag_t
  ): [
    /* returnType */ bool_t,
    /* languageIndex */ number,
    /* chosenLanguage */ tag_t,
  ]
  /**
   * Deprecated since 2.0.0
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptTags Array of #hb_tag_t script tags
   */
  function otLayoutTableChooseScript(
    face: face_t,
    tableTag: tag_t,
    scriptTags: tag_t
  ): [
    /* returnType */ bool_t,
    /* scriptIndex */ number,
    /* chosenScript */ tag_t,
  ]
  /**
   * Fetches a list of feature variations in the specified face's GSUB table
   * or GPOS table, at the specified variation coordinates.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param coords The variation coordinates to query
   * @param numCoords The number of variation coordinates
   * @returns `true` if feature variations were found, `false` otherwise.
   */
  function otLayoutTableFindFeatureVariations(
    face: face_t,
    tableTag: tag_t,
    coords: number,
    numCoords: number
  ): [/* returnType */ bool_t, /* variationsIndex */ number]
  /**
   * Fetches the index if a given script tag in the specified face's GSUB table
   * or GPOS table.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptTag #hb_tag_t of the script tag requested
   * @returns `true` if the script is found, `false` otherwise
   */
  function otLayoutTableFindScript(
    face: face_t,
    tableTag: tag_t,
    scriptTag: tag_t
  ): [/* returnType */ bool_t, /* scriptIndex */ number]
  /**
   * Fetches a list of all feature tags in the given face's GSUB or GPOS table.
   * Note that there might be duplicate feature tags, belonging to different
   * script/language-system pairs of the table.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param startOffset offset of the first feature tag to retrieve
   * @returns Total number of feature tags.
   */
  function otLayoutTableGetFeatureTags(
    face: face_t,
    tableTag: tag_t,
    startOffset: number
  ): [/* returnType */ number, /* featureTags */ tag_t[]]
  /**
   * Fetches the total number of lookups enumerated in the specified
   * face's GSUB table or GPOS table.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @returns Total number of lookups.
   */
  function otLayoutTableGetLookupCount(face: face_t, tableTag: tag_t): number
  /**
   * Fetches a list of all scripts enumerated in the specified face's GSUB table
   * or GPOS table. The list returned will begin at the offset provided.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param startOffset offset of the first script tag to retrieve
   * @returns Total number of script tags.
   */
  function otLayoutTableGetScriptTags(
    face: face_t,
    tableTag: tag_t,
    startOffset: number
  ): [/* returnType */ number, /* scriptTags */ tag_t[]]
  /**
   * Selects an OpenType script for `table_tag` from the `script_tags` array.
   *
   * If the table does not have any of the requested scripts, then `DFLT`,
   * `dflt`, and `latn` tags are tried in that order. If the table still does not
   * have any of these scripts, `script_index` is set to
   * #HB_OT_LAYOUT_NO_SCRIPT_INDEX and `chosen_script` is set to #HB_TAG_NONE.
   * @param face #hb_face_t to work upon
   * @param tableTag #HB_OT_TAG_GSUB or #HB_OT_TAG_GPOS
   * @param scriptCount Number of script tags in the array
   * @param scriptTags Array of #hb_tag_t script tags
   * @returns `true` if one of the requested scripts is selected, `false` if a fallback script is selected or if no scripts are selected.
   */
  function otLayoutTableSelectScript(
    face: face_t,
    tableTag: tag_t,
    scriptCount: number,
    scriptTags: tag_t
  ): [
    /* returnType */ bool_t,
    /* scriptIndex */ number,
    /* chosenScript */ tag_t,
  ]
  /**
   * Fetches the specified math constant. For most constants, the value returned
   * is an #hb_position_t.
   *
   * However, if the requested constant is #HB_OT_MATH_CONSTANT_SCRIPT_PERCENT_SCALE_DOWN,
   * #HB_OT_MATH_CONSTANT_SCRIPT_SCRIPT_PERCENT_SCALE_DOWN or
   * #HB_OT_MATH_CONSTANT_RADICAL_DEGREE_BOTTOM_RAISE_PERCENT, then the return value is
   * an integer between 0 and 100 representing that percentage.
   * @param font #hb_font_t to work upon
   * @param constant #hb_ot_math_constant_t the constant to retrieve
   * @returns the requested constant or zero
   */
  function otMathGetConstant(
    font: font_t,
    constant: ot_math_constant_t
  ): position_t
  /**
   * Fetches the GlyphAssembly for the specified font, glyph index, and direction.
   * Returned are a list of #hb_ot_math_glyph_part_t glyph parts that can be
   * used to draw the glyph and an italics-correction value (if one is defined
   * in the font).
   *
   * <note>The `direction` parameter is only used to select between horizontal
   * or vertical directions for the construction. Even though all #hb_direction_t
   * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
   * considered.</note>
   * @param font #hb_font_t to work upon
   * @param glyph The index of the glyph to stretch
   * @param direction direction of the stretching (horizontal or vertical)
   * @param startOffset offset of the first glyph part to retrieve
   * @returns the total number of parts in the glyph assembly
   */
  function otMathGetGlyphAssembly(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t,
    startOffset: number
  ): [
    /* returnType */ number,
    /* parts */ ot_math_glyph_part_t[],
    /* italicsCorrection */ position_t,
  ]
  /**
   * Fetches an italics-correction value (if one exists) for the specified
   * glyph index.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph index from which to retrieve the value
   * @returns the italics correction of the glyph or zero
   */
  function otMathGetGlyphItalicsCorrection(
    font: font_t,
    glyph: codepoint_t
  ): position_t
  /**
   * Fetches the math kerning (cut-ins) value for the specified font, glyph index, and
   * `kern`.
   *
   * If the MathKern table is found, the function examines it to find a height
   * value that is greater or equal to `correction_height`. If such a height
   * value is found, corresponding kerning value from the table is returned. If
   * no such height value is found, the last kerning value is returned.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph index from which to retrieve the value
   * @param kern The #hb_ot_math_kern_t from which to retrieve the value
   * @param correctionHeight the correction height to use to determine the kerning.
   * @returns requested kerning value or zero
   */
  function otMathGetGlyphKerning(
    font: font_t,
    glyph: codepoint_t,
    kern: ot_math_kern_t,
    correctionHeight: position_t
  ): position_t
  /**
   * Fetches the raw MathKern (cut-in) data for the specified font, glyph index,
   * and `kern`. The corresponding list of kern values and correction heights is
   * returned as a list of #hb_ot_math_kern_entry_t structs.
   *
   * See also #hb_ot_math_get_glyph_kerning, which handles selecting the
   * appropriate kern value for a given correction height.
   *
   * <note>For a glyph with `n` defined kern values (where `n` > 0), there are only
   * `n−`1 defined correction heights, as each correction height defines a boundary
   * past which the next kern value should be selected. Therefore, only the
   * #hb_ot_math_kern_entry_t.kern_value of the uppermost #hb_ot_math_kern_entry_t
   * actually comes from the font; its corresponding
   * #hb_ot_math_kern_entry_t.max_correction_height is always set to
   * <code>INT32_MAX</code>.</note>
   * @param font #hb_font_t to work upon
   * @param glyph The glyph index from which to retrieve the kernings
   * @param kern The #hb_ot_math_kern_t from which to retrieve the kernings
   * @param startOffset offset of the first kern entry to retrieve
   * @returns the total number of kern values available or zero
   */
  function otMathGetGlyphKernings(
    font: font_t,
    glyph: codepoint_t,
    kern: ot_math_kern_t,
    startOffset: number
  ): [/* returnType */ number, /* kernEntries */ ot_math_kern_entry_t[]]
  /**
   * Fetches a top-accent-attachment value (if one exists) for the specified
   * glyph index.
   *
   * For any glyph that does not have a top-accent-attachment value - that is,
   * a glyph not covered by the `MathTopAccentAttachment` table (or, when
   * `font` has no `MathTopAccentAttachment` table or no `MATH` table, any
   * glyph) - the function synthesizes a value, returning the position at
   * one-half the glyph's advance width.
   * @param font #hb_font_t to work upon
   * @param glyph The glyph index from which to retrieve the value
   * @returns the top accent attachment of the glyph or 0.5 * the advance               width of @glyph
   */
  function otMathGetGlyphTopAccentAttachment(
    font: font_t,
    glyph: codepoint_t
  ): position_t
  /**
   * Fetches the MathGlyphConstruction for the specified font, glyph index, and
   * direction. The corresponding list of size variants is returned as a list of
   * #hb_ot_math_glyph_variant_t structs.
   *
   * <note>The `direction` parameter is only used to select between horizontal
   * or vertical directions for the construction. Even though all #hb_direction_t
   * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
   * considered.</note>
   * @param font #hb_font_t to work upon
   * @param glyph The index of the glyph to stretch
   * @param direction The direction of the stretching (horizontal or vertical)
   * @param startOffset offset of the first variant to retrieve
   * @returns the total number of size variants available or zero
   */
  function otMathGetGlyphVariants(
    font: font_t,
    glyph: codepoint_t,
    direction: direction_t,
    startOffset: number
  ): [/* returnType */ number, /* variants */ ot_math_glyph_variant_t[]]
  /**
   * Fetches the MathVariants table for the specified font and returns the
   * minimum overlap of connecting glyphs that are required to draw a glyph
   * assembly in the specified direction.
   *
   * <note>The `direction` parameter is only used to select between horizontal
   * or vertical directions for the construction. Even though all #hb_direction_t
   * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
   * considered.</note>
   * @param font #hb_font_t to work upon
   * @param direction direction of the stretching (horizontal or vertical)
   * @returns requested minimum connector overlap or zero
   */
  function otMathGetMinConnectorOverlap(
    font: font_t,
    direction: direction_t
  ): position_t
  /**
   * Tests whether a face has a `MATH` table.
   * @param face #hb_face_t to test
   * @returns `true` if the table is found, `false` otherwise
   */
  function otMathHasData(face: face_t): bool_t
  /**
   * Tests whether the given glyph index is an extended shape in the face.
   * @param face #hb_face_t to work upon
   * @param glyph The glyph index to test
   * @returns `true` if the glyph is an extended shape, `false` otherwise
   */
  function otMathIsGlyphExtendedShape(face: face_t, glyph: codepoint_t): bool_t
  /**
   * Fetches all available feature types.
   * @param face a face object
   * @param startOffset iteration's start offset
   * @returns Number of all available feature types.
   */
  function otMetaGetEntryTags(
    face: face_t,
    startOffset: number
  ): [/* returnType */ number, /* entries */ ot_meta_tag_t[]]
  /**
   * It fetches metadata entry of a given tag from a font.
   * @param face a #hb_face_t object.
   * @param metaTag tag of metadata you like to have.
   * @returns A blob containing the blob.
   */
  function otMetaReferenceEntry(face: face_t, metaTag: ot_meta_tag_t): blob_t
  /**
   * Fetches metrics value corresponding to `metrics_tag` from `font`.
   * @param font an #hb_font_t object.
   * @param metricsTag tag of metrics value you like to fetch.
   * @returns Whether found the requested metrics in the font.
   */
  function otMetricsGetPosition(
    font: font_t,
    metricsTag: ot_metrics_tag_t
  ): [/* returnType */ bool_t, /* position */ position_t]
  /**
   * Fetches metrics value corresponding to `metrics_tag` from `font,`
   * and synthesizes a value if it the value is missing in the font.
   * @param font an #hb_font_t object.
   * @param metricsTag tag of metrics value you like to fetch.
   */
  function otMetricsGetPositionWithFallback(
    font: font_t,
    metricsTag: ot_metrics_tag_t
  ): /* position */ position_t
  /**
   * Fetches metrics value corresponding to `metrics_tag` from `font` with the
   * current font variation settings applied.
   * @param font an #hb_font_t object.
   * @param metricsTag tag of metrics value you like to fetch.
   * @returns The requested metric value.
   */
  function otMetricsGetVariation(
    font: font_t,
    metricsTag: ot_metrics_tag_t
  ): number
  /**
   * Fetches horizontal metrics value corresponding to `metrics_tag` from `font`
   * with the current font variation settings applied.
   * @param font an #hb_font_t object.
   * @param metricsTag tag of metrics value you like to fetch.
   * @returns The requested metric value.
   */
  function otMetricsGetXVariation(
    font: font_t,
    metricsTag: ot_metrics_tag_t
  ): position_t
  /**
   * Fetches vertical metrics value corresponding to `metrics_tag` from `font` with
   * the current font variation settings applied.
   * @param font an #hb_font_t object.
   * @param metricsTag tag of metrics value you like to fetch.
   * @returns The requested metric value.
   */
  function otMetricsGetYVariation(
    font: font_t,
    metricsTag: ot_metrics_tag_t
  ): position_t
  /**
   * Fetches a font name from the OpenType 'name' table.
   * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
   * Returns string in UTF-16 encoding. A NUL terminator is always written
   * for convenience, and isn't included in the output `text_size`.
   * @param face font face.
   * @param nameId OpenType name identifier to fetch.
   * @param language language to fetch the name for.
   * @returns full length of the requested string, or 0 if not found.
   */
  function otNameGetUtf16(
    face: face_t,
    nameId: ot_name_id_t,
    language: language_t
  ): [/* returnType */ number, /* text */ number[]]
  /**
   * Fetches a font name from the OpenType 'name' table.
   * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
   * Returns string in UTF-32 encoding. A NUL terminator is always written
   * for convenience, and isn't included in the output `text_size`.
   * @param face font face.
   * @param nameId OpenType name identifier to fetch.
   * @param language language to fetch the name for.
   * @returns full length of the requested string, or 0 if not found.
   */
  function otNameGetUtf32(
    face: face_t,
    nameId: ot_name_id_t,
    language: language_t
  ): [/* returnType */ number, /* text */ number[]]
  /**
   * Fetches a font name from the OpenType 'name' table.
   * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
   * Returns string in UTF-8 encoding. A NUL terminator is always written
   * for convenience, and isn't included in the output `text_size`.
   * @param face font face.
   * @param nameId OpenType name identifier to fetch.
   * @param language language to fetch the name for.
   * @returns full length of the requested string, or 0 if not found.
   */
  function otNameGetUtf8(
    face: face_t,
    nameId: ot_name_id_t,
    language: language_t
  ): [/* returnType */ number, /* text */ string[]]
  /**
   * Enumerates all available name IDs and language combinations. Returned
   * array is owned by the `face` and should not be modified.  It can be
   * used as long as `face` is alive.
   * @param face font face.
   * @returns Array of available name entries.
   */
  function otNameListNames(face: face_t): ot_name_entry_t[]
  /**
   * Computes the transitive closure of glyphs needed for a specified
   * input buffer under the given font and feature list. The closure is
   * computed as a set, not as a list.
   * @param font #hb_font_t to work upon
   * @param buffer The input buffer to compute from
   * @param features The features enabled on the buffer
   */
  function otShapeGlyphsClosure(
    font: font_t,
    buffer: buffer_t,
    features: feature_t[]
  ): /* glyphs */ set_t
  /**
   * Computes the complete set of GSUB or GPOS lookups that are applicable
   * under a given `shape_plan`.
   * @param shapePlan #hb_shape_plan_t to query
   * @param tableTag GSUB or GPOS
   */
  function otShapePlanCollectLookups(
    shapePlan: shape_plan_t,
    tableTag: tag_t
  ): /* lookupIndexes */ set_t
  /**
   * Converts an #hb_language_t to an #hb_tag_t.
   * @param language an #hb_language_t to convert.
   */
  function otTagFromLanguage(language: language_t): tag_t
  /**
   * Converts a language tag to an #hb_language_t.
   * @param tag an language tag
   * @returns The #hb_language_t corresponding to @tag.
   */
  function otTagToLanguage(tag: tag_t): language_t | null
  /**
   * Converts a script tag to an #hb_script_t.
   * @param tag a script tag
   * @returns The #hb_script_t corresponding to @tag.
   */
  function otTagToScript(tag: tag_t): script_t
  /**
   * Converts an #hb_script_t to script tags.
   * @param script an #hb_script_t to convert.
   */
  function otTagsFromScript(
    script: script_t
  ): [/* scriptTag1 */ tag_t, /* scriptTag2 */ tag_t]
  /**
   * Converts an #hb_script_t and an #hb_language_t to script and language tags.
   * @param script an #hb_script_t to convert.
   * @param language an #hb_language_t to convert.
   * @param scriptCount maximum number of script tags to retrieve (IN) and actual number of script tags retrieved (OUT)
   * @param languageCount maximum number of language tags to retrieve (IN) and actual number of language tags retrieved (OUT)
   */
  function otTagsFromScriptAndLanguage(
    script: script_t,
    language: language_t | null,
    scriptCount?: number,
    languageCount?: number
  ): [
    /* scriptCount */ number,
    /* scriptTags */ tag_t,
    /* languageCount */ number,
    /* languageTags */ tag_t,
  ]
  /**
   * Converts a script tag and a language tag to an #hb_script_t and an
   * #hb_language_t.
   * @param scriptTag a script tag
   * @param languageTag a language tag
   */
  function otTagsToScriptAndLanguage(
    scriptTag: tag_t,
    languageTag: tag_t
  ): [/* script */ script_t, /* language */ language_t]
  /**
   * Fetches the variation-axis information corresponding to the specified axis tag
   * in the specified face.
   * @param face #hb_face_t to work upon
   * @param axisTag The #hb_tag_t of the variation axis to query
   * @param axisIndex The index of the variation axis
   */
  function otVarFindAxis(
    face: face_t,
    axisTag: tag_t,
    axisIndex: number
  ): [/* returnType */ bool_t, /* axisInfo */ ot_var_axis_t]
  /**
   * Fetches the variation-axis information corresponding to the specified axis tag
   * in the specified face.
   * @param face #hb_face_t to work upon
   * @param axisTag The #hb_tag_t of the variation axis to query
   * @returns `true` if data found, `false` otherwise
   */
  function otVarFindAxisInfo(
    face: face_t,
    axisTag: tag_t
  ): [/* returnType */ bool_t, /* axisInfo */ ot_var_axis_info_t]
  /**
   * Fetches a list of all variation axes in the specified face. The list returned will begin
   * at the offset provided.
   * @param face #hb_face_t to work upon
   * @param startOffset offset of the first lookup to retrieve
   */
  function otVarGetAxes(
    face: face_t,
    startOffset: number
  ): [/* returnType */ number, /* axesArray */ ot_var_axis_t[]]
  /**
   * Fetches the number of OpenType variation axes included in the face.
   * @param face The #hb_face_t to work on
   * @returns the number of variation axes defined
   */
  function otVarGetAxisCount(face: face_t): number
  /**
   * Fetches a list of all variation axes in the specified face. The list returned will begin
   * at the offset provided.
   * @param face #hb_face_t to work upon
   * @param startOffset offset of the first lookup to retrieve
   * @returns the number of variation axes in the face
   */
  function otVarGetAxisInfos(
    face: face_t,
    startOffset: number
  ): [/* returnType */ number, /* axesArray */ ot_var_axis_info_t[]]
  /**
   * Fetches the number of named instances included in the face.
   * @param face The #hb_face_t to work on
   * @returns the number of named instances defined
   */
  function otVarGetNamedInstanceCount(face: face_t): number
  /**
   * Tests whether a face includes any OpenType variation data in the `fvar` table.
   * @param face The #hb_face_t to work on
   * @returns `true` if data found, `false` otherwise
   */
  function otVarHasData(face: face_t): bool_t
  /**
   * Fetches the design-space coordinates corresponding to the given
   * named instance in the face.
   * @param face The #hb_face_t to work on
   * @param instanceIndex The index of the named instance to query
   * @returns the number of variation axes in the face
   */
  function otVarNamedInstanceGetDesignCoords(
    face: face_t,
    instanceIndex: number
  ): [/* returnType */ number, /* coords */ number[]]
  /**
   * Fetches the `name` table Name ID that provides display names for
   * the "PostScript name" defined for the given named instance in the face.
   * @param face The #hb_face_t to work on
   * @param instanceIndex The index of the named instance to query
   * @returns the Name ID found for the PostScript name
   */
  function otVarNamedInstanceGetPostscriptNameId(
    face: face_t,
    instanceIndex: number
  ): ot_name_id_t
  /**
   * Fetches the `name` table Name ID that provides display names for
   * the "Subfamily name" defined for the given named instance in the face.
   * @param face The #hb_face_t to work on
   * @param instanceIndex The index of the named instance to query
   * @returns the Name ID found for the Subfamily name
   */
  function otVarNamedInstanceGetSubfamilyNameId(
    face: face_t,
    instanceIndex: number
  ): ot_name_id_t
  /**
   * Normalizes the given design-space coordinates. The minimum and maximum
   * values for the axis are mapped to the interval [-1,1], with the default
   * axis value mapped to 0.
   *
   * The normalized values have 14 bits of fixed-point sub-integer precision as per
   * OpenType specification.
   *
   * Any additional scaling defined in the face's `avar` table is also
   * applied, as described at https://docs.microsoft.com/en-us/typography/opentype/spec/avar
   * @param face The #hb_face_t to work on
   * @param coordsLength The length of the coordinate array
   * @param designCoords The design-space coordinates to normalize
   */
  function otVarNormalizeCoords(
    face: face_t,
    coordsLength: number,
    designCoords: number
  ): /* normalizedCoords */ number
  /**
   * Normalizes all of the coordinates in the given list of variation axes.
   * @param face The #hb_face_t to work on
   * @param variations The array of variations to normalize
   * @param variationsLength The number of variations to normalize
   */
  function otVarNormalizeVariations(
    face: face_t,
    variations: variation_t,
    variationsLength: number
  ): /* coords */ number[]
  /**
   * Perform a "color" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param isForeground whether the color is the foreground
   * @param color The color to use
   */
  function paintColor(
    funcs: paint_funcs_t,
    paintData: any | null,
    isForeground: bool_t,
    color: color_t
  ): void
  /**
   * Perform a "color-glyph" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param glyph the glyph ID
   * @param font the font
   */
  function paintColorGlyph(
    funcs: paint_funcs_t,
    paintData: any | null,
    glyph: codepoint_t,
    font: font_t
  ): bool_t
  /**
   * Gets the custom palette color for `color_index`.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param colorIndex color index
   * @returns `true` if found, `false` otherwise
   */
  function paintCustomPaletteColor(
    funcs: paint_funcs_t,
    paintData: any | null,
    colorIndex: number
  ): [/* returnType */ bool_t, /* color */ color_t]
  /**
   * Creates a new #hb_paint_funcs_t structure of paint functions.
   *
   * The initial reference count of 1 should be released with hb_paint_funcs_destroy()
   * when you are done using the #hb_paint_funcs_t. This function never returns
   * `NULL`. If memory cannot be allocated, a special singleton #hb_paint_funcs_t
   * object will be returned.
   * @returns the paint-functions structure
   */
  function paintFuncsCreate(): paint_funcs_t
  /**
   * Fetches the singleton empty paint-functions structure.
   * @returns The empty paint-functions structure
   */
  function paintFuncsGetEmpty(): paint_funcs_t
  /**
   * Tests whether a paint-functions structure is immutable.
   * @param funcs The paint-functions structure
   * @returns `true` if @funcs is immutable, `false` otherwise
   */
  function paintFuncsIsImmutable(funcs: paint_funcs_t): bool_t
  /**
   * Makes a paint-functions structure immutable.
   *
   * After this call, all attempts to set one of the callbacks
   * on `funcs` will fail.
   * @param funcs The paint-functions structure
   */
  function paintFuncsMakeImmutable(funcs: paint_funcs_t): void
  /**
   * Sets the paint-color callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The paint-color callback
   */
  function paintFuncsSetColorFunc(
    funcs: paint_funcs_t,
    func: paint_color_func_t
  ): void
  /**
   * Sets the color-glyph callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The color-glyph callback
   */
  function paintFuncsSetColorGlyphFunc(
    funcs: paint_funcs_t,
    func: paint_color_glyph_func_t
  ): void
  /**
   * Sets the custom-palette-color callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The custom-palette-color callback
   */
  function paintFuncsSetCustomPaletteColorFunc(
    funcs: paint_funcs_t,
    func: paint_custom_palette_color_func_t
  ): void
  /**
   * Sets the paint-image callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The paint-image callback
   */
  function paintFuncsSetImageFunc(
    funcs: paint_funcs_t,
    func: paint_image_func_t
  ): void
  /**
   * Sets the linear-gradient callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The linear-gradient callback
   */
  function paintFuncsSetLinearGradientFunc(
    funcs: paint_funcs_t,
    func: paint_linear_gradient_func_t
  ): void
  /**
   * Sets the pop-clip callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The pop-clip callback
   */
  function paintFuncsSetPopClipFunc(
    funcs: paint_funcs_t,
    func: paint_pop_clip_func_t
  ): void
  /**
   * Sets the pop-group callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The pop-group callback
   */
  function paintFuncsSetPopGroupFunc(
    funcs: paint_funcs_t,
    func: paint_pop_group_func_t
  ): void
  /**
   * Sets the pop-transform callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The pop-transform callback
   */
  function paintFuncsSetPopTransformFunc(
    funcs: paint_funcs_t,
    func: paint_pop_transform_func_t
  ): void
  /**
   * Sets the push-clip-glyph callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The push-clip-glyph callback
   */
  function paintFuncsSetPushClipGlyphFunc(
    funcs: paint_funcs_t,
    func: paint_push_clip_glyph_func_t
  ): void
  /**
   * Sets the push-clip-rect callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The push-clip-rectangle callback
   */
  function paintFuncsSetPushClipRectangleFunc(
    funcs: paint_funcs_t,
    func: paint_push_clip_rectangle_func_t
  ): void
  /**
   * Sets the push-group callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The push-group callback
   */
  function paintFuncsSetPushGroupFunc(
    funcs: paint_funcs_t,
    func: paint_push_group_func_t
  ): void
  /**
   * Sets the push-transform callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The push-transform callback
   */
  function paintFuncsSetPushTransformFunc(
    funcs: paint_funcs_t,
    func: paint_push_transform_func_t
  ): void
  /**
   * Sets the radial-gradient callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The radial-gradient callback
   */
  function paintFuncsSetRadialGradientFunc(
    funcs: paint_funcs_t,
    func: paint_radial_gradient_func_t
  ): void
  /**
   * Sets the sweep-gradient callback on the paint functions struct.
   * @param funcs A paint functions struct
   * @param func The sweep-gradient callback
   */
  function paintFuncsSetSweepGradientFunc(
    funcs: paint_funcs_t,
    func: paint_sweep_gradient_func_t
  ): void
  /**
   * Perform a "image" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param image image data
   * @param width width of the raster image in pixels, or 0
   * @param height height of the raster image in pixels, or 0
   * @param format the image format as a tag
   * @param slant the synthetic slant ratio to be applied to the image during rendering
   * @param extents the extents of the glyph
   */
  function paintImage(
    funcs: paint_funcs_t,
    paintData: any | null,
    image: blob_t,
    width: number,
    height: number,
    format: tag_t,
    slant: number,
    extents: glyph_extents_t | null
  ): void
  /**
   * Perform a "linear-gradient" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param colorLine Color information for the gradient
   * @param x0 X coordinate of the first point
   * @param y0 Y coordinate of the first point
   * @param x1 X coordinate of the second point
   * @param y1 Y coordinate of the second point
   * @param x2 X coordinate of the third point
   * @param y2 Y coordinate of the third point
   */
  function paintLinearGradient(
    funcs: paint_funcs_t,
    paintData: any | null,
    colorLine: color_line_t,
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): void
  /**
   * Perform a "pop-clip" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   */
  function paintPopClip(funcs: paint_funcs_t, paintData: any | null): void
  /**
   * Perform a "pop-group" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param mode the compositing mode to use
   */
  function paintPopGroup(
    funcs: paint_funcs_t,
    paintData: any | null,
    mode: paint_composite_mode_t
  ): void
  /**
   * Perform a "pop-transform" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   */
  function paintPopTransform(funcs: paint_funcs_t, paintData: any | null): void
  /**
   * Perform a "push-clip-glyph" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param glyph the glyph ID
   * @param font the font
   */
  function paintPushClipGlyph(
    funcs: paint_funcs_t,
    paintData: any | null,
    glyph: codepoint_t,
    font: font_t
  ): void
  /**
   * Perform a "push-clip-rect" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param xmin min X for the rectangle
   * @param ymin min Y for the rectangle
   * @param xmax max X for the rectangle
   * @param ymax max Y for the rectangle
   */
  function paintPushClipRectangle(
    funcs: paint_funcs_t,
    paintData: any | null,
    xmin: number,
    ymin: number,
    xmax: number,
    ymax: number
  ): void
  /**
   * Perform a "push-group" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   */
  function paintPushGroup(funcs: paint_funcs_t, paintData: any | null): void
  /**
   * Perform a "push-transform" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param xx xx component of the transform matrix
   * @param yx yx component of the transform matrix
   * @param xy xy component of the transform matrix
   * @param yy yy component of the transform matrix
   * @param dx dx component of the transform matrix
   * @param dy dy component of the transform matrix
   */
  function paintPushTransform(
    funcs: paint_funcs_t,
    paintData: any | null,
    xx: number,
    yx: number,
    xy: number,
    yy: number,
    dx: number,
    dy: number
  ): void
  /**
   * Perform a "radial-gradient" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param colorLine Color information for the gradient
   * @param x0 X coordinate of the first circle's center
   * @param y0 Y coordinate of the first circle's center
   * @param r0 radius of the first circle
   * @param x1 X coordinate of the second circle's center
   * @param y1 Y coordinate of the second circle's center
   * @param r1 radius of the second circle
   */
  function paintRadialGradient(
    funcs: paint_funcs_t,
    paintData: any | null,
    colorLine: color_line_t,
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number
  ): void
  /**
   * Perform a "sweep-gradient" paint operation.
   * @param funcs paint functions
   * @param paintData associated data passed by the caller
   * @param colorLine Color information for the gradient
   * @param x0 X coordinate of the circle's center
   * @param y0 Y coordinate of the circle's center
   * @param startAngle the start angle
   * @param endAngle the end angle
   */
  function paintSweepGradient(
    funcs: paint_funcs_t,
    paintData: any | null,
    colorLine: color_line_t,
    x0: number,
    y0: number,
    startAngle: number,
    endAngle: number
  ): void
  /**
   * Converts an ISO 15924 script tag to a corresponding #hb_script_t.
   * @param tag an #hb_tag_t representing an ISO 15924 tag.
   * @returns An #hb_script_t corresponding to the ISO 15924 tag.
   */
  function scriptFromIso15924Tag(tag: tag_t): script_t
  /**
   * Converts a string `str` representing an ISO 15924 script tag to a
   * corresponding #hb_script_t. Shorthand for hb_tag_from_string() then
   * hb_script_from_iso15924_tag().
   * @param str a string representing an       ISO 15924 tag.
   * @returns An #hb_script_t corresponding to the ISO 15924 tag.
   */
  function scriptFromString(str: number[]): script_t
  /**
   * Fetches the #hb_direction_t of a script when it is
   * set horizontally. All right-to-left scripts will return
   * #HB_DIRECTION_RTL. All left-to-right scripts will return
   * #HB_DIRECTION_LTR.  Scripts that can be written either
   * horizontally or vertically will return #HB_DIRECTION_INVALID.
   * Unknown scripts will return #HB_DIRECTION_LTR.
   * @param script The #hb_script_t to query
   * @returns The horizontal #hb_direction_t of @script
   */
  function scriptGetHorizontalDirection(script: script_t): direction_t
  /**
   * Converts an #hb_script_t to a corresponding ISO 15924 script tag.
   * @param script an #hb_script_t to convert.
   * @returns An #hb_tag_t representing an ISO 15924 script tag.
   */
  function scriptToIso15924Tag(script: script_t): tag_t
  /**
   * Checks the equality of two #hb_segment_properties_t's.
   * @param a first #hb_segment_properties_t to compare.
   * @param b second #hb_segment_properties_t to compare.
   * @returns `true` if all properties of @a equal those of @b, `false` otherwise.
   */
  function segmentPropertiesEqual(
    a: segment_properties_t,
    b: segment_properties_t
  ): bool_t
  /**
   * Creates a hash representing `p`.
   * @param p #hb_segment_properties_t to hash.
   * @returns A hash of @p.
   */
  function segmentPropertiesHash(p: segment_properties_t): number
  /**
   * Fills in missing fields of `p` from `src` in a considered manner.
   *
   * First, if `p` does not have direction set, direction is copied from `src`.
   *
   * Next, if `p` and `src` have the same direction (which can be unset), if `p`
   * does not have script set, script is copied from `src`.
   *
   * Finally, if `p` and `src` have the same direction and script (which either
   * can be unset), if `p` does not have language set, language is copied from
   * `src`.
   * @param p #hb_segment_properties_t to fill in.
   * @param src #hb_segment_properties_t to fill in from.
   */
  function segmentPropertiesOverlay(
    p: segment_properties_t,
    src: segment_properties_t
  ): void
  /**
   * Adds `codepoint` to `set`.
   * @param set A set
   * @param codepoint The element to add to `set`
   */
  function setAdd(set: set_t, codepoint: codepoint_t): void
  /**
   * Adds all of the elements from `first` to `last`
   * (inclusive) to `set`.
   * @param set A set
   * @param first The first element to add to `set`
   * @param last The final element to add to `set`
   */
  function setAddRange(set: set_t, first: codepoint_t, last: codepoint_t): void
  /**
   * Adds `num_codepoints` codepoints to a set at once.
   * The codepoints array must be in increasing order,
   * with size at least `num_codepoints`.
   * @param set A set
   * @param sortedCodepoints Array of codepoints to add
   */
  function setAddSortedArray(set: set_t, sortedCodepoints: codepoint_t[]): void
  /**
   * Tests whether memory allocation for a set was successful.
   * @param set A set
   * @returns `true` if allocation succeeded, `false` otherwise
   */
  function setAllocationSuccessful(set: set_t): bool_t
  /**
   * Clears out the contents of a set.
   * @param set A set
   */
  function setClear(set: set_t): void
  /**
   * Allocate a copy of `set`.
   * @param set A set
   * @returns Newly-allocated set.
   */
  function setCopy(set: set_t): set_t
  /**
   * Creates a new, initially empty set.
   * @returns The new #hb_set_t
   */
  function setCreate(): set_t
  /**
   * Removes `codepoint` from `set`.
   * @param set A set
   * @param codepoint Removes `codepoint` from `set`
   */
  function setDel(set: set_t, codepoint: codepoint_t): void
  /**
   * Removes all of the elements from `first` to `last`
   * (inclusive) from `set`.
   *
   * If `last` is #HB_SET_VALUE_INVALID, then all values
   * greater than or equal to `first` are removed.
   * @param set A set
   * @param first The first element to remove from `set`
   * @param last The final element to remove from `set`
   */
  function setDelRange(set: set_t, first: codepoint_t, last: codepoint_t): void
  /**
   * Fetches the singleton empty #hb_set_t.
   * @returns The empty #hb_set_t
   */
  function setGetEmpty(): set_t
  /**
   * Finds the largest element in the set.
   * @param set A set
   * @returns maximum of @set, or #HB_SET_VALUE_INVALID if @set is empty.
   */
  function setGetMax(set: set_t): codepoint_t
  /**
   * Finds the smallest element in the set.
   * @param set A set
   * @returns minimum of @set, or #HB_SET_VALUE_INVALID if @set is empty.
   */
  function setGetMin(set: set_t): codepoint_t
  /**
   * Returns the number of elements in the set.
   * @param set A set
   * @returns The population of @set
   */
  function setGetPopulation(set: set_t): number
  /**
   * Tests whether `codepoint` belongs to `set`.
   * @param set A set
   * @param codepoint The element to query
   * @returns `true` if @codepoint is in @set, `false` otherwise
   */
  function setHas(set: set_t, codepoint: codepoint_t): bool_t
  /**
   * Creates a hash representing `set`.
   * @param set A set
   * @returns A hash of @set.
   */
  function setHash(set: set_t): number
  /**
   * Makes `set` the intersection of `set` and `other`.
   * @param set A set
   * @param other Another set
   */
  function setIntersect(set: set_t, other: set_t): void
  /**
   * Inverts the contents of `set`.
   * @param set A set
   */
  function setInvert(set: set_t): void
  /**
   * Tests whether a set is empty (contains no elements).
   * @param set a set.
   * @returns `true` if @set is empty
   */
  function setIsEmpty(set: set_t): bool_t
  /**
   * Tests whether `set` and `other` are equal (contain the same
   * elements).
   * @param set A set
   * @param other Another set
   * @returns `true` if the two sets are equal, `false` otherwise.
   */
  function setIsEqual(set: set_t, other: set_t): bool_t
  /**
   * Returns whether the set is inverted.
   * @param set A set
   * @returns `true` if the set is inverted, `false` otherwise
   */
  function setIsInverted(set: set_t): bool_t
  /**
   * Tests whether `set` is a subset of `larger_set`.
   * @param set A set
   * @param largerSet Another set
   * @returns `true` if the @set is a subset of (or equal to) @larger_set, `false` otherwise.
   */
  function setIsSubset(set: set_t, largerSet: set_t): bool_t
  /**
   * Fetches the next element in `set` that is greater than current value of `codepoint`.
   *
   * Set `codepoint` to #HB_SET_VALUE_INVALID to get started.
   * @param set A set
   * @param codepoint Input = Code point to query             Output = Code point retrieved
   * @returns `true` if there was a next value, `false` otherwise
   */
  function setNext(
    set: set_t,
    codepoint: codepoint_t
  ): [/* returnType */ bool_t, /* codepoint */ codepoint_t]
  /**
   * Finds the next element in `set` that is greater than `codepoint`. Writes out
   * codepoints to `out,` until either the set runs out of elements, or `size`
   * codepoints are written, whichever comes first.
   * @param set A set
   * @param codepoint Outputting codepoints starting after this one.             Use #HB_SET_VALUE_INVALID to get started.
   * @param out An array of codepoints to write to.
   * @returns the number of values written.
   */
  function setNextMany(
    set: set_t,
    codepoint: codepoint_t,
    out: codepoint_t[]
  ): number
  /**
   * Fetches the next consecutive range of elements in `set` that
   * are greater than current value of `last`.
   *
   * Set `last` to #HB_SET_VALUE_INVALID to get started.
   * @param set A set
   * @param last Input = The current last code point in the range         Output = The last code point in the range
   * @returns `true` if there was a next range, `false` otherwise
   */
  function setNextRange(
    set: set_t,
    last: codepoint_t
  ): [/* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t]
  /**
   * Fetches the previous element in `set` that is lower than current value of `codepoint`.
   *
   * Set `codepoint` to #HB_SET_VALUE_INVALID to get started.
   * @param set A set
   * @param codepoint Input = Code point to query             Output = Code point retrieved
   * @returns `true` if there was a previous value, `false` otherwise
   */
  function setPrevious(
    set: set_t,
    codepoint: codepoint_t
  ): [/* returnType */ bool_t, /* codepoint */ codepoint_t]
  /**
   * Fetches the previous consecutive range of elements in `set` that
   * are greater than current value of `last`.
   *
   * Set `first` to #HB_SET_VALUE_INVALID to get started.
   * @param set A set
   * @param first Input = The current first code point in the range         Output = The first code point in the range
   * @returns `true` if there was a previous range, `false` otherwise
   */
  function setPreviousRange(
    set: set_t,
    first: codepoint_t
  ): [/* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t]
  /**
   * Makes the contents of `set` equal to the contents of `other`.
   * @param set A set
   * @param other Another set
   */
  function setSet(set: set_t, other: set_t): void
  /**
   * Subtracts the contents of `other` from `set`.
   * @param set A set
   * @param other Another set
   */
  function setSubtract(set: set_t, other: set_t): void
  /**
   * Makes `set` the symmetric difference of `set`
   * and `other`.
   * @param set A set
   * @param other Another set
   */
  function setSymmetricDifference(set: set_t, other: set_t): void
  /**
   * Makes `set` the union of `set` and `other`.
   * @param set A set
   * @param other Another set
   */
  function setUnion(set: set_t, other: set_t): void
  /**
   * Shapes `buffer` using `font` turning its Unicode characters content to
   * positioned glyphs. If `features` is not `NULL`, it will be used to control the
   * features applied during shaping. If two `features` have the same tag but
   * overlapping ranges the value of the feature with the higher index takes
   * precedence.
   * @param font an #hb_font_t to use for shaping
   * @param buffer an #hb_buffer_t to shape
   * @param features an array of user    specified #hb_feature_t or `NULL`
   */
  function shape(
    font: font_t,
    buffer: buffer_t,
    features: feature_t[] | null
  ): void
  /**
   * See hb_shape() for details. If `shaper_list` is not `NULL`, the specified
   * shapers will be used in the given order, otherwise the default shapers list
   * will be used.
   * @param font an #hb_font_t to use for shaping
   * @param buffer an #hb_buffer_t to shape
   * @param features an array of user    specified #hb_feature_t or `NULL`
   * @param shaperList a `NULL`-terminated    array of shapers to use or `NULL`
   * @returns false if all shapers failed, true otherwise
   */
  function shapeFull(
    font: font_t,
    buffer: buffer_t,
    features: feature_t[] | null,
    shaperList: string[] | null
  ): bool_t
  /**
   * See hb_shape_full() for basic details. If `shaper_list` is not `NULL`, the specified
   * shapers will be used in the given order, otherwise the default shapers list
   * will be used.
   *
   * In addition, justify the shaping results such that the shaping results reach
   * the target advance width/height, depending on the buffer direction.
   *
   * If the advance of the buffer shaped with hb_shape_full() is already known,
   * put that in *advance. Otherwise set *advance to zero.
   *
   * This API is currently experimental and will probably change in the future.
   * @param font a mutable #hb_font_t to use for shaping
   * @param buffer an #hb_buffer_t to shape
   * @param features an array of user    specified #hb_feature_t or `NULL`
   * @param shaperList a `NULL`-terminated    array of shapers to use or `NULL`
   * @param minTargetAdvance Minimum advance width/height to aim for.
   * @param maxTargetAdvance Maximum advance width/height to aim for.
   * @param advance Input/output advance width/height of the buffer.
   * @returns false if all shapers failed, true otherwise XSince: EXPERIMENTAL
   */
  function shapeJustify(
    font: font_t,
    buffer: buffer_t,
    features: feature_t[] | null,
    shaperList: string[] | null,
    minTargetAdvance: number,
    maxTargetAdvance: number,
    advance: number
  ): [
    /* returnType */ bool_t,
    /* advance */ number,
    /* varTag */ tag_t,
    /* varValue */ number,
  ]
  /**
   * Retrieves the list of shapers supported by HarfBuzz.
   * @returns an array of    constant strings
   */
  function shapeListShapers(): string[]
  /**
   * Constructs a shaping plan for a combination of `face,` `user_features,` `props,`
   * and `shaper_list`.
   * @param face #hb_face_t to use
   * @param props The #hb_segment_properties_t of the segment
   * @param userFeatures The list of user-selected features
   * @param shaperList List of shapers to try
   * @returns The shaping plan
   */
  function shapePlanCreate(
    face: face_t,
    props: segment_properties_t,
    userFeatures: feature_t[],
    shaperList: string[]
  ): shape_plan_t
  /**
   * The variable-font version of #hb_shape_plan_create.
   * Constructs a shaping plan for a combination of `face,` `user_features,` `props,`
   * and `shaper_list,` plus the variation-space coordinates `coords`.
   * @param face #hb_face_t to use
   * @param props The #hb_segment_properties_t of the segment
   * @param userFeatures The list of user-selected features
   * @param coords The list of variation-space coordinates
   * @param shaperList List of shapers to try
   * @returns The shaping plan
   */
  function shapePlanCreate2(
    face: face_t,
    props: segment_properties_t,
    userFeatures: feature_t[],
    coords: number[],
    shaperList: string[]
  ): shape_plan_t
  /**
   * Creates a cached shaping plan suitable for reuse, for a combination
   * of `face,` `user_features,` `props,` and `shaper_list`.
   * @param face #hb_face_t to use
   * @param props The #hb_segment_properties_t of the segment
   * @param userFeatures The list of user-selected features
   * @param shaperList List of shapers to try
   * @returns The shaping plan
   */
  function shapePlanCreateCached(
    face: face_t,
    props: segment_properties_t,
    userFeatures: feature_t[],
    shaperList: string[]
  ): shape_plan_t
  /**
   * The variable-font version of #hb_shape_plan_create_cached.
   * Creates a cached shaping plan suitable for reuse, for a combination
   * of `face,` `user_features,` `props,` and `shaper_list,` plus the
   * variation-space coordinates `coords`.
   * @param face #hb_face_t to use
   * @param props The #hb_segment_properties_t of the segment
   * @param userFeatures The list of user-selected features
   * @param coords The list of variation-space coordinates
   * @param shaperList List of shapers to try
   * @returns The shaping plan
   */
  function shapePlanCreateCached2(
    face: face_t,
    props: segment_properties_t,
    userFeatures: feature_t[],
    coords: number[],
    shaperList: string[]
  ): shape_plan_t
  /**
   * Executes the given shaping plan on the specified buffer, using
   * the given `font` and `features`.
   * @param shapePlan A shaping plan
   * @param font The #hb_font_t to use
   * @param buffer The #hb_buffer_t to work upon
   * @param features Features to enable
   * @returns `true` if success, `false` otherwise.
   */
  function shapePlanExecute(
    shapePlan: shape_plan_t,
    font: font_t,
    buffer: buffer_t,
    features: feature_t[]
  ): bool_t
  /**
   * Fetches the singleton empty shaping plan.
   * @returns The empty shaping plan
   */
  function shapePlanGetEmpty(): shape_plan_t
  /**
   * Fetches the shaper from a given shaping plan.
   * @param shapePlan A shaping plan
   * @returns The shaper
   */
  function shapePlanGetShaper(shapePlan: shape_plan_t): string
  /**
   * Searches variation axes of a #hb_font_t object for a specific axis first,
   * if not set, then tries to get default style values from different
   * tables of the font.
   * @param font a #hb_font_t object.
   * @param styleTag a style tag.
   * @returns Corresponding axis or default value to a style tag.
   */
  function styleGetValue(font: font_t, styleTag: style_tag_t): number
  /**
   * Converts a string into an #hb_tag_t. Valid tags
   * are four characters. Shorter input strings will be
   * padded with spaces. Longer input strings will be
   * truncated.
   * @param str String to convert
   * @returns The #hb_tag_t corresponding to @str
   */
  function tagFromString(str: number[]): tag_t
  /**
   * Converts an #hb_tag_t to a string and returns it in `buf`.
   * Strings will be four characters long.
   * @param tag #hb_tag_t to convert
   */
  function tagToString(tag: tag_t): /* buf */ number[]
  /**
   * Retrieves the Canonical Combining Class (ccc) property
   * of code point `unicode`.
   * @param ufuncs The Unicode-functions structure
   * @param unicode The code point to query
   * @returns The #hb_unicode_combining_class_t of @unicode
   */
  function unicodeCombiningClass(
    ufuncs: unicode_funcs_t,
    unicode: codepoint_t
  ): unicode_combining_class_t
  /**
   * Fetches the composition of a sequence of two Unicode
   * code points.
   *
   * Calls the composition function of the specified
   * Unicode-functions structure `ufuncs`.
   * @param ufuncs The Unicode-functions structure
   * @param a The first Unicode code point to compose
   * @param b The second Unicode code point to compose
   * @returns `true` if @a and @b composed, `false` otherwise
   */
  function unicodeCompose(
    ufuncs: unicode_funcs_t,
    a: codepoint_t,
    b: codepoint_t
  ): [/* returnType */ bool_t, /* ab */ codepoint_t]
  /**
   * Fetches the decomposition of a Unicode code point.
   *
   * Calls the decomposition function of the specified
   * Unicode-functions structure `ufuncs`.
   * @param ufuncs The Unicode-functions structure
   * @param ab Unicode code point to decompose
   * @returns `true` if @ab was decomposed, `false` otherwise
   */
  function unicodeDecompose(
    ufuncs: unicode_funcs_t,
    ab: codepoint_t
  ): [/* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t]
  /**
   * Fetches the compatibility decomposition of a Unicode
   * code point. Deprecated.
   * @param ufuncs The Unicode-functions structure
   * @param u Code point to decompose
   * @returns length of @decomposed.
   */
  function unicodeDecomposeCompatibility(
    ufuncs: unicode_funcs_t,
    u: codepoint_t
  ): [/* returnType */ number, /* decomposed */ codepoint_t]
  /**
   * Don't use. Not used by HarfBuzz.
   * @param ufuncs a Unicode-function structure
   * @param unicode The code point to query
   */
  function unicodeEastasianWidth(
    ufuncs: unicode_funcs_t,
    unicode: codepoint_t
  ): number
  /**
   * Creates a new #hb_unicode_funcs_t structure of Unicode functions.
   * @param parent Parent Unicode-functions structure
   * @returns The Unicode-functions structure
   */
  function unicodeFuncsCreate(parent: unicode_funcs_t | null): unicode_funcs_t
  /**
   * Fetches a pointer to the default Unicode-functions structure that is used
   * when no functions are explicitly set on #hb_buffer_t.
   * @returns a pointer to the #hb_unicode_funcs_t Unicode-functions structure
   */
  function unicodeFuncsGetDefault(): unicode_funcs_t
  /**
   * Fetches the singleton empty Unicode-functions structure.
   * @returns The empty Unicode-functions structure
   */
  function unicodeFuncsGetEmpty(): unicode_funcs_t
  /**
   * Fetches the parent of the Unicode-functions structure
   * `ufuncs`.
   * @param ufuncs The Unicode-functions structure
   * @returns The parent Unicode-functions structure
   */
  function unicodeFuncsGetParent(ufuncs: unicode_funcs_t): unicode_funcs_t
  /**
   * Tests whether the specified Unicode-functions structure
   * is immutable.
   * @param ufuncs The Unicode-functions structure
   * @returns `true` if @ufuncs is immutable, `false` otherwise
   */
  function unicodeFuncsIsImmutable(ufuncs: unicode_funcs_t): bool_t
  /**
   * Makes the specified Unicode-functions structure
   * immutable.
   * @param ufuncs The Unicode-functions structure
   */
  function unicodeFuncsMakeImmutable(ufuncs: unicode_funcs_t): void
  /**
   * Sets the implementation function for #hb_unicode_combining_class_func_t.
   * @param ufuncs A Unicode-functions structure
   * @param func The callback function to assign
   */
  function unicodeFuncsSetCombiningClassFunc(
    ufuncs: unicode_funcs_t,
    func: unicode_combining_class_func_t
  ): void
  /**
   * Sets the implementation function for #hb_unicode_compose_func_t.
   * @param ufuncs A Unicode-functions structure
   * @param func The callback function to assign
   */
  function unicodeFuncsSetComposeFunc(
    ufuncs: unicode_funcs_t,
    func: unicode_compose_func_t
  ): void
  /**
   * Sets the implementation function for #hb_unicode_decompose_compatibility_func_t.
   * @param ufuncs A Unicode-functions structure
   * @param func The callback function to assign
   */
  function unicodeFuncsSetDecomposeCompatibilityFunc(
    ufuncs: unicode_funcs_t,
    func: unicode_decompose_compatibility_func_t
  ): void
  /**
   * Sets the implementation function for #hb_unicode_decompose_func_t.
   * @param ufuncs A Unicode-functions structure
   * @param func The callback function to assign
   */
  function unicodeFuncsSetDecomposeFunc(
    ufuncs: unicode_funcs_t,
    func: unicode_decompose_func_t
  ): void
  /**
   * Sets the implementation function for #hb_unicode_eastasian_width_func_t.
   * @param ufuncs a Unicode-function structure
   * @param func The callback function to assign
   */
  function unicodeFuncsSetEastasianWidthFunc(
    ufuncs: unicode_funcs_t,
    func: unicode_eastasian_width_func_t
  ): void
  /**
   * Sets the implementation function for #hb_unicode_general_category_func_t.
   * @param ufuncs A Unicode-functions structure
   * @param func The callback function to assign
   */
  function unicodeFuncsSetGeneralCategoryFunc(
    ufuncs: unicode_funcs_t,
    func: unicode_general_category_func_t
  ): void
  /**
   * Sets the implementation function for #hb_unicode_mirroring_func_t.
   * @param ufuncs A Unicode-functions structure
   * @param func The callback function to assign
   */
  function unicodeFuncsSetMirroringFunc(
    ufuncs: unicode_funcs_t,
    func: unicode_mirroring_func_t
  ): void
  /**
   * Sets the implementation function for #hb_unicode_script_func_t.
   * @param ufuncs A Unicode-functions structure
   * @param func The callback function to assign
   */
  function unicodeFuncsSetScriptFunc(
    ufuncs: unicode_funcs_t,
    func: unicode_script_func_t
  ): void
  /**
   * Retrieves the General Category (gc) property
   * of code point `unicode`.
   * @param ufuncs The Unicode-functions structure
   * @param unicode The code point to query
   * @returns The #hb_unicode_general_category_t of @unicode
   */
  function unicodeGeneralCategory(
    ufuncs: unicode_funcs_t,
    unicode: codepoint_t
  ): unicode_general_category_t
  /**
   * Retrieves the Bi-directional Mirroring Glyph code
   * point defined for code point `unicode`.
   * @param ufuncs The Unicode-functions structure
   * @param unicode The code point to query
   * @returns The #hb_codepoint_t of the Mirroring Glyph for @unicode
   */
  function unicodeMirroring(
    ufuncs: unicode_funcs_t,
    unicode: codepoint_t
  ): codepoint_t
  /**
   * Retrieves the #hb_script_t script to which code
   * point `unicode` belongs.
   * @param ufuncs The Unicode-functions structure
   * @param unicode The code point to query
   * @returns The #hb_script_t of @unicode
   */
  function unicodeScript(
    ufuncs: unicode_funcs_t,
    unicode: codepoint_t
  ): script_t
  /**
   * Parses a string into a #hb_variation_t.
   *
   * The format for specifying variation settings follows. All valid CSS
   * font-variation-settings values other than 'normal' and 'inherited' are also
   * accepted, though, not documented below.
   *
   * The format is a tag, optionally followed by an equals sign, followed by a
   * number. For example `wght=500`, or `slnt=-7.5`.
   * @param str a string to parse
   * @returns `true` if @str is successfully parsed, `false` otherwise
   */
  function variationFromString(
    str: number[]
  ): [/* returnType */ bool_t, /* variation */ variation_t]
  /**
   * Converts an #hb_variation_t into a `NULL`-terminated string in the format
   * understood by hb_variation_from_string(). The client in responsible for
   * allocating big enough size for `buf,` 128 bytes is more than enough.
   * @param variation an #hb_variation_t to convert
   */
  function variationToString(variation: variation_t): /* buf */ string[]
  /**
   * A callback method for #hb_buffer_t. The method gets called with the
   * #hb_buffer_t it was set on, the #hb_font_t the buffer is shaped with and a
   * message describing what step of the shaping process will be performed.
   * Returning `false` from this method will skip this shaping step and move to
   * the next one.
   * @callback
   * @param buffer An #hb_buffer_t to work upon
   * @param font The #hb_font_t the `buffer` is shaped with
   * @param message `NULL`-terminated message passed to the function
   * @returns `true` to perform the shaping step, `false` to skip it.
   */
  interface buffer_message_func_t {
    (buffer: buffer_t, font: font_t, message: string): bool_t
  }
  /**
   * A virtual method for the #hb_color_line_t to fetch color stops.
   * @callback
   * @param colorLine a #hb_color_line_t object
   * @param colorLineData the data accompanying `color_line`
   * @param start the index of the first color stop to return
   * @returns the total number of color stops in @color_line
   */
  interface color_line_get_color_stops_func_t {
    (colorLine: color_line_t, colorLineData: any | null, start: number): number
  }
  /**
   * A virtual method for the `hb_color_line_t` to fetches the extend mode.
   * @callback
   * @param colorLine a #hb_color_line_t object
   * @param colorLineData the data accompanying `color_line`
   * @returns the extend mode of @color_line
   */
  interface color_line_get_extend_func_t {
    (colorLine: color_line_t, colorLineData: any | null): paint_extend_t
  }
  /**
   * A virtual method for destroy user-data callbacks.
   * @callback
   */
  interface destroy_func_t {
    (): void
  }
  /**
   * A virtual method for the #hb_draw_funcs_t to perform a "close-path" draw
   * operation.
   * @callback
   * @param dfuncs draw functions object
   * @param drawData The data accompanying the draw functions in hb_font_draw_glyph()
   * @param st current draw state
   */
  interface draw_close_path_func_t {
    (dfuncs: draw_funcs_t, drawData: any | null, st: draw_state_t): void
  }
  /**
   * A virtual method for the #hb_draw_funcs_t to perform a "cubic-to" draw
   * operation.
   * @callback
   * @param dfuncs draw functions object
   * @param drawData The data accompanying the draw functions in hb_font_draw_glyph()
   * @param st current draw state
   * @param control1X X component of first control point
   * @param control1Y Y component of first control point
   * @param control2X X component of second control point
   * @param control2Y Y component of second control point
   * @param toX X component of target point
   * @param toY Y component of target point
   */
  interface draw_cubic_to_func_t {
    (
      dfuncs: draw_funcs_t,
      drawData: any | null,
      st: draw_state_t,
      control1X: number,
      control1Y: number,
      control2X: number,
      control2Y: number,
      toX: number,
      toY: number
    ): void
  }
  /**
   * A virtual method for the #hb_draw_funcs_t to perform a "line-to" draw
   * operation.
   * @callback
   * @param dfuncs draw functions object
   * @param drawData The data accompanying the draw functions in hb_font_draw_glyph()
   * @param st current draw state
   * @param toX X component of target point
   * @param toY Y component of target point
   */
  interface draw_line_to_func_t {
    (
      dfuncs: draw_funcs_t,
      drawData: any | null,
      st: draw_state_t,
      toX: number,
      toY: number
    ): void
  }
  /**
   * A virtual method for the #hb_draw_funcs_t to perform a "move-to" draw
   * operation.
   * @callback
   * @param dfuncs draw functions object
   * @param drawData The data accompanying the draw functions in hb_font_draw_glyph()
   * @param st current draw state
   * @param toX X component of target point
   * @param toY Y component of target point
   */
  interface draw_move_to_func_t {
    (
      dfuncs: draw_funcs_t,
      drawData: any | null,
      st: draw_state_t,
      toX: number,
      toY: number
    ): void
  }
  /**
   * A virtual method for the #hb_draw_funcs_t to perform a "quadratic-to" draw
   * operation.
   * @callback
   * @param dfuncs draw functions object
   * @param drawData The data accompanying the draw functions in hb_font_draw_glyph()
   * @param st current draw state
   * @param controlX X component of control point
   * @param controlY Y component of control point
   * @param toX X component of target point
   * @param toY Y component of target point
   */
  interface draw_quadratic_to_func_t {
    (
      dfuncs: draw_funcs_t,
      drawData: any | null,
      st: draw_state_t,
      controlX: number,
      controlY: number,
      toX: number,
      toY: number
    ): void
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param glyph The glyph ID to query
   * @param drawFuncs The draw functions to send the shape data to
   * @param drawData The data accompanying the draw functions
   */
  interface font_draw_glyph_func_t {
    (
      font: font_t,
      fontData: any | null,
      glyph: codepoint_t,
      drawFuncs: draw_funcs_t,
      drawData: any | null
    ): void
  }
  /**
   * This method should retrieve the extents for a font.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   */
  interface font_get_font_extents_func_t {
    (font: font_t, fontData: any | null): bool_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the advance for a specified glyph. The
   * method must return an #hb_position_t.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param glyph The glyph ID to query
   * @returns The advance of @glyph within @font
   */
  interface font_get_glyph_advance_func_t {
    (font: font_t, fontData: any | null, glyph: codepoint_t): position_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the advances for a sequence of glyphs.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param count The number of glyph IDs in the sequence queried
   * @param firstGlyph The first glyph ID to query
   * @param glyphStride The stride between successive glyph IDs
   * @param advanceStride The stride between successive advances
   */
  interface font_get_glyph_advances_func_t {
    (
      font: font_t,
      fontData: any | null,
      count: number,
      firstGlyph: codepoint_t,
      glyphStride: number,
      advanceStride: number
    ): void
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the (X,Y) coordinates (in font units) for a
   * specified contour point in a glyph. Each coordinate must be returned as
   * an #hb_position_t output parameter.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param glyph The glyph ID to query
   * @param pointIndex The contour-point index to query
   * @returns `true` if data found, `false` otherwise
   */
  interface font_get_glyph_contour_point_func_t {
    (
      font: font_t,
      fontData: any | null,
      glyph: codepoint_t,
      pointIndex: number
    ): bool_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the extents for a specified glyph. Extents must be
   * returned in an #hb_glyph_extents output parameter.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param glyph The glyph ID to query
   * @returns `true` if data found, `false` otherwise
   */
  interface font_get_glyph_extents_func_t {
    (font: font_t, fontData: any | null, glyph: codepoint_t): bool_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the glyph ID that corresponds to a glyph-name
   * string.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param name The name string to query
   * @returns `true` if data found, `false` otherwise
   */
  interface font_get_glyph_from_name_func_t {
    (font: font_t, fontData: any | null, name: string[]): bool_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the glyph ID for a specified Unicode code point
   * font, with an optional variation selector.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param unicode The Unicode code point to query
   * @param variationSelector The  variation-selector code point to query
   * @returns `true` if data found, `false` otherwise
   */
  interface font_get_glyph_func_t {
    (
      font: font_t,
      fontData: any | null,
      unicode: codepoint_t,
      variationSelector: codepoint_t
    ): bool_t
  }
  /**
   * This method should retrieve the kerning-adjustment value for a glyph-pair in
   * the specified font, for horizontal text segments.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param firstGlyph The glyph ID of the first glyph in the glyph pair
   * @param secondGlyph The glyph ID of the second glyph in the glyph pair
   */
  interface font_get_glyph_kerning_func_t {
    (
      font: font_t,
      fontData: any | null,
      firstGlyph: codepoint_t,
      secondGlyph: codepoint_t
    ): position_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the glyph name that corresponds to a
   * glyph ID. The name should be returned in a string output parameter.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param glyph The glyph ID to query
   * @returns `true` if data found, `false` otherwise
   */
  interface font_get_glyph_name_func_t {
    (font: font_t, fontData: any | null, glyph: codepoint_t): bool_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the (X,Y) coordinates (in font units) of the
   * origin for a glyph. Each coordinate must be returned in an #hb_position_t
   * output parameter.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param glyph The glyph ID to query
   * @returns `true` if data found, `false` otherwise
   */
  interface font_get_glyph_origin_func_t {
    (font: font_t, fontData: any | null, glyph: codepoint_t): bool_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param glyph The glyph ID to query
   * @param drawFuncs The draw functions to send the shape data to
   * @param drawData The data accompanying the draw functions
   */
  interface font_get_glyph_shape_func_t {
    (
      font: font_t,
      fontData: any | null,
      glyph: codepoint_t,
      drawFuncs: draw_funcs_t,
      drawData: any | null
    ): void
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the nominal glyph ID for a specified Unicode code
   * point. Glyph IDs must be returned in a #hb_codepoint_t output parameter.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param unicode The Unicode code point to query
   * @returns `true` if data found, `false` otherwise
   */
  interface font_get_nominal_glyph_func_t {
    (font: font_t, fontData: any | null, unicode: codepoint_t): bool_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the nominal glyph IDs for a sequence of
   * Unicode code points. Glyph IDs must be returned in a #hb_codepoint_t
   * output parameter.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param count number of code points to query
   * @param firstUnicode The first Unicode code point to query
   * @param unicodeStride The stride between successive code points
   * @param glyphStride The stride between successive glyph IDs
   * @returns the number of code points processed
   */
  interface font_get_nominal_glyphs_func_t {
    (
      font: font_t,
      fontData: any | null,
      count: number,
      firstUnicode: codepoint_t,
      unicodeStride: number,
      glyphStride: number
    ): number
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   *
   * This method should retrieve the glyph ID for a specified Unicode code point
   * followed by a specified Variation Selector code point. Glyph IDs must be
   * returned in a #hb_codepoint_t output parameter.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param unicode The Unicode code point to query
   * @param variationSelector The  variation-selector code point to query
   * @returns `true` if data found, `false` otherwise
   */
  interface font_get_variation_glyph_func_t {
    (
      font: font_t,
      fontData: any | null,
      unicode: codepoint_t,
      variationSelector: codepoint_t
    ): bool_t
  }
  /**
   * A virtual method for the #hb_font_funcs_t of an #hb_font_t object.
   * @callback
   * @param font #hb_font_t to work upon
   * @param fontData `font` user data pointer
   * @param glyph The glyph ID to query
   * @param paintFuncs The paint functions to use
   * @param paintData The data accompanying the paint functions
   * @param paletteIndex The color palette to use
   * @param foreground The foreground color
   */
  interface font_paint_glyph_func_t {
    (
      font: font_t,
      fontData: any | null,
      glyph: codepoint_t,
      paintFuncs: paint_funcs_t,
      paintData: any | null,
      paletteIndex: number,
      foreground: color_t
    ): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to paint a
   * color everywhere within the current clip.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param isForeground whether the color is the foreground
   * @param color The color to use, unpremultiplied
   */
  interface paint_color_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      isForeground: bool_t,
      color: color_t
    ): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to render a color glyph by glyph index.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param glyph the glyph ID
   * @param font the font
   * @returns %true if the glyph was painted, %false otherwise.
   */
  interface paint_color_glyph_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      glyph: codepoint_t,
      font: font_t
    ): bool_t
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to fetch a color from the custom
   * color palette.
   *
   * Custom palette colors override the colors from the fonts selected color
   * palette. It is not necessary to override all palette entries; for entries
   * that should be taken from the font palette, return `false`.
   *
   * This function might get called multiple times, but the custom palette is
   * expected to remain unchanged for duration of a hb_font_paint_glyph() call.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param colorIndex the color index
   * @returns `true` if found, `false` otherwise
   */
  interface paint_custom_palette_color_func_t {
    (funcs: paint_funcs_t, paintData: any | null, colorIndex: number): bool_t
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to paint a glyph image.
   *
   * This method is called for glyphs with image blobs in the CBDT,
   * sbix or SVG tables. The `format` identifies the kind of data that
   * is contained in `image`. Possible values include #HB_PAINT_IMAGE_FORMAT_PNG,
   * #HB_PAINT_IMAGE_FORMAT_SVG and #HB_PAINT_IMAGE_FORMAT_BGRA.
   *
   * The image dimensions and glyph extents are provided if available,
   * and should be used to size and position the image.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param image the image data
   * @param width width of the raster image in pixels, or 0
   * @param height height of the raster image in pixels, or 0
   * @param format the image format as a tag
   * @param slant the synthetic slant ratio to be applied to the image during rendering
   * @param extents glyph extents for desired rendering
   * @returns Whether the operation was successful.
   */
  interface paint_image_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      image: blob_t,
      width: number,
      height: number,
      format: tag_t,
      slant: number,
      extents: glyph_extents_t | null
    ): bool_t
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to paint a linear
   * gradient everywhere within the current clip.
   *
   * The `color_line` object contains information about the colors of the gradients.
   * It is only valid for the duration of the callback, you cannot keep it around.
   *
   * The coordinates of the points are interpreted according
   * to the current transform.
   *
   * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
   * section for details on how the points define the direction
   * of the gradient, and how to interpret the `color_line`.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param colorLine Color information for the gradient
   * @param x0 X coordinate of the first point
   * @param y0 Y coordinate of the first point
   * @param x1 X coordinate of the second point
   * @param y1 Y coordinate of the second point
   * @param x2 X coordinate of the third point
   * @param y2 Y coordinate of the third point
   */
  interface paint_linear_gradient_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      colorLine: color_line_t,
      x0: number,
      y0: number,
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to undo
   * the effect of a prior call to the #hb_paint_funcs_push_clip_glyph_func_t
   * or #hb_paint_funcs_push_clip_rectangle_func_t vfuncs.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   */
  interface paint_pop_clip_func_t {
    (funcs: paint_funcs_t, paintData: any | null): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to undo
   * the effect of a prior call to the #hb_paint_funcs_push_group_func_t
   * vfunc.
   *
   * This call stops the redirection to the intermediate surface,
   * and then composites it on the previous surface, using the
   * compositing mode passed to this call.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param mode the compositing mode to use
   */
  interface paint_pop_group_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      mode: paint_composite_mode_t
    ): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to undo
   * the effect of a prior call to the #hb_paint_funcs_push_transform_func_t
   * vfunc.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   */
  interface paint_pop_transform_func_t {
    (funcs: paint_funcs_t, paintData: any | null): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to clip
   * subsequent paint calls to the outline of a glyph.
   *
   * The coordinates of the glyph outline are interpreted according
   * to the current transform.
   *
   * This clip is applied in addition to the current clip,
   * and remains in effect until a matching call to
   * the #hb_paint_funcs_pop_clip_func_t vfunc.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param glyph the glyph ID
   * @param font the font
   */
  interface paint_push_clip_glyph_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      glyph: codepoint_t,
      font: font_t
    ): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to clip
   * subsequent paint calls to a rectangle.
   *
   * The coordinates of the rectangle are interpreted according
   * to the current transform.
   *
   * This clip is applied in addition to the current clip,
   * and remains in effect until a matching call to
   * the #hb_paint_funcs_pop_clip_func_t vfunc.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param xmin min X for the rectangle
   * @param ymin min Y for the rectangle
   * @param xmax max X for the rectangle
   * @param ymax max Y for the rectangle
   */
  interface paint_push_clip_rectangle_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      xmin: number,
      ymin: number,
      xmax: number,
      ymax: number
    ): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to use
   * an intermediate surface for subsequent paint calls.
   *
   * The drawing will be redirected to an intermediate surface
   * until a matching call to the #hb_paint_funcs_pop_group_func_t
   * vfunc.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   */
  interface paint_push_group_func_t {
    (funcs: paint_funcs_t, paintData: any | null): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to apply
   * a transform to subsequent paint calls.
   *
   * This transform is applied after the current transform,
   * and remains in effect until a matching call to
   * the #hb_paint_funcs_pop_transform_func_t vfunc.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param xx xx component of the transform matrix
   * @param yx yx component of the transform matrix
   * @param xy xy component of the transform matrix
   * @param yy yy component of the transform matrix
   * @param dx dx component of the transform matrix
   * @param dy dy component of the transform matrix
   */
  interface paint_push_transform_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      xx: number,
      yx: number,
      xy: number,
      yy: number,
      dx: number,
      dy: number
    ): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to paint a radial
   * gradient everywhere within the current clip.
   *
   * The `color_line` object contains information about the colors of the gradients.
   * It is only valid for the duration of the callback, you cannot keep it around.
   *
   * The coordinates of the points are interpreted according
   * to the current transform.
   *
   * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
   * section for details on how the points define the direction
   * of the gradient, and how to interpret the `color_line`.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param colorLine Color information for the gradient
   * @param x0 X coordinate of the first circle's center
   * @param y0 Y coordinate of the first circle's center
   * @param r0 radius of the first circle
   * @param x1 X coordinate of the second circle's center
   * @param y1 Y coordinate of the second circle's center
   * @param r1 radius of the second circle
   */
  interface paint_radial_gradient_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      colorLine: color_line_t,
      x0: number,
      y0: number,
      r0: number,
      x1: number,
      y1: number,
      r1: number
    ): void
  }
  /**
   * A virtual method for the #hb_paint_funcs_t to paint a sweep
   * gradient everywhere within the current clip.
   *
   * The `color_line` object contains information about the colors of the gradients.
   * It is only valid for the duration of the callback, you cannot keep it around.
   *
   * The coordinates of the points are interpreted according
   * to the current transform.
   *
   * See the OpenType spec [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
   * section for details on how the points define the direction
   * of the gradient, and how to interpret the `color_line`.
   * @callback
   * @param funcs paint functions object
   * @param paintData The data accompanying the paint functions in hb_font_paint_glyph()
   * @param colorLine Color information for the gradient
   * @param x0 X coordinate of the circle's center
   * @param y0 Y coordinate of the circle's center
   * @param startAngle the start angle, in radians
   * @param endAngle the end angle, in radians
   */
  interface paint_sweep_gradient_func_t {
    (
      funcs: paint_funcs_t,
      paintData: any | null,
      colorLine: color_line_t,
      x0: number,
      y0: number,
      startAngle: number,
      endAngle: number
    ): void
  }
  /**
   * Callback function for hb_face_create_for_tables().
   * @callback
   * @param face an #hb_face_t to reference table for
   * @param tag the tag of the table to reference
   * @returns A pointer to the @tag table within @face
   */
  interface reference_table_func_t {
    (face: face_t, tag: tag_t): blob_t
  }
  /**
   * A virtual method for the #hb_unicode_funcs_t structure.
   *
   * This method should retrieve the Canonical Combining Class (ccc)
   * property for a specified Unicode code point.
   * @callback
   * @param ufuncs A Unicode-functions structure
   * @param unicode The code point to query
   * @returns The #hb_unicode_combining_class_t of @unicode
   */
  interface unicode_combining_class_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
  }
  /**
   * A virtual method for the #hb_unicode_funcs_t structure.
   *
   * This method should compose a sequence of two input Unicode code
   * points by canonical equivalence, returning the composed code
   * point in a #hb_codepoint_t output parameter (if successful).
   * The method must return an #hb_bool_t indicating the success
   * of the composition.
   * @callback
   * @param ufuncs A Unicode-functions structure
   * @param a The first code point to compose
   * @param b The second code point to compose
   * @returns `true` is @a,@b composed, `false` otherwise
   */
  interface unicode_compose_func_t {
    (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): bool_t
  }
  /**
   * Fully decompose `u` to its Unicode compatibility decomposition. The codepoints of the decomposition will be written to `decomposed`.
   * The complete length of the decomposition will be returned.
   *
   * If `u` has no compatibility decomposition, zero should be returned.
   *
   * The Unicode standard guarantees that a buffer of length #HB_UNICODE_MAX_DECOMPOSITION_LEN codepoints will always be sufficient for any
   * compatibility decomposition plus an terminating value of 0.  Consequently, `decompose` must be allocated by the caller to be at least this length.  Implementations
   * of this function type must ensure that they do not write past the provided array.
   * @callback
   * @param ufuncs a Unicode function structure
   * @param u codepoint to decompose
   * @param decomposed address of codepoint array (of length #HB_UNICODE_MAX_DECOMPOSITION_LEN) to write decomposition into
   * @returns number of codepoints in the full compatibility decomposition of @u, or 0 if no decomposition available.
   */
  interface unicode_decompose_compatibility_func_t {
    (ufuncs: unicode_funcs_t, u: codepoint_t, decomposed: codepoint_t): number
  }
  /**
   * A virtual method for the #hb_unicode_funcs_t structure.
   *
   * This method should decompose an input Unicode code point,
   * returning the two decomposed code points in #hb_codepoint_t
   * output parameters (if successful). The method must return an
   * #hb_bool_t indicating the success of the composition.
   * @callback
   * @param ufuncs A Unicode-functions structure
   * @param ab The code point to decompose
   * @returns `true` if @ab decomposed, `false` otherwise
   */
  interface unicode_decompose_func_t {
    (ufuncs: unicode_funcs_t, ab: codepoint_t): bool_t
  }
  /**
   * A virtual method for the #hb_unicode_funcs_t structure.
   * @callback
   * @param ufuncs A Unicode-functions structure
   * @param unicode The code point to query
   */
  interface unicode_eastasian_width_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): number
  }
  /**
   * A virtual method for the #hb_unicode_funcs_t structure.
   *
   * This method should retrieve the General Category property for
   * a specified Unicode code point.
   * @callback
   * @param ufuncs A Unicode-functions structure
   * @param unicode The code point to query
   * @returns The #hb_unicode_general_category_t of @unicode
   */
  interface unicode_general_category_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
  }
  /**
   * A virtual method for the #hb_unicode_funcs_t structure.
   *
   * This method should retrieve the Bi-Directional Mirroring Glyph
   * code point for a specified Unicode code point.
   *
   * <note>Note: If a code point does not have a specified
   * Bi-Directional Mirroring Glyph defined, the method should
   * return the original code point.</note>
   * @callback
   * @param ufuncs A Unicode-functions structure
   * @param unicode The code point to query
   * @returns The #hb_codepoint_t of the Mirroring Glyph for @unicode
   */
  interface unicode_mirroring_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
  }
  /**
   * A virtual method for the #hb_unicode_funcs_t structure.
   *
   * This method should retrieve the Script property for a
   * specified Unicode code point.
   * @callback
   * @param ufuncs A Unicode-functions structure
   * @param unicode The code point to query
   * @returns The #hb_script_t of @unicode
   */
  interface unicode_script_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
  }
  interface aat_layout_feature_selector_info_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.aat_layout_feature_selector_info_t

    /**
     * The selector's name identifier
     * @field
     */
    nameId: ot_name_id_t
    /**
     * The value to turn the selector on
     * @field
     */
    enable: aat_layout_feature_selector_t
    /**
     * The value to turn the selector off
     * @field
     */
    disable: aat_layout_feature_selector_t
  }

  /**
   * Structure representing a setting for an #hb_aat_layout_feature_type_t.
   * @record
   */
  class aat_layout_feature_selector_info_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.aat_layout_feature_selector_info_t

    static name: string
  }

  interface blob_t {}

  /**
   * Data type for blobs. A blob wraps a chunk of binary
   * data and facilitates its lifecycle management between
   * a client program and HarfBuzz.
   * @record
   */
  class blob_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.blob_t

    static name: string
  }

  interface buffer_t {}

  /**
   * The main structure holding the input text and its properties before shaping,
   * and output glyphs and their information after shaping.
   * @record
   */
  class buffer_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.buffer_t

    static name: string
  }

  interface color_line_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.color_line_t

    data: any
    getColorStops: color_line_get_color_stops_func_t
    getColorStopsUserData: any
    getExtend: color_line_get_extend_func_t
    getExtendUserData: any
    reserved0: any
    reserved1: any
    reserved2: any
    reserved3: any
    reserved5: any
    reserved6: any
    reserved7: any
    reserved8: any
  }

  /**
   * A struct containing color information for a gradient.
   * @record
   */
  class color_line_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.color_line_t

    static name: string
  }

  interface color_stop_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.color_stop_t

    /**
     * the offset of the color stop
     * @field
     */
    offset: number
    /**
     * whether the color is the foreground
     * @field
     */
    isForeground: bool_t
    /**
     * the color, unpremultiplied
     * @field
     */
    color: color_t
  }

  /**
   * Information about a color stop on a color line.
   *
   * Color lines typically have offsets ranging between 0 and 1,
   * but that is not required.
   *
   * Note: despite `color` being unpremultiplied here, interpolation in
   * gradients shall happen in premultiplied space. See the OpenType spec
   * [COLR](https://learn.microsoft.com/en-us/typography/opentype/spec/colr)
   * section for details.
   * @record
   */
  class color_stop_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.color_stop_t

    static name: string
  }

  interface draw_funcs_t {}

  /**
   * Glyph draw callbacks.
   *
   * #hb_draw_move_to_func_t, #hb_draw_line_to_func_t and
   * #hb_draw_cubic_to_func_t calls are necessary to be defined but we translate
   * #hb_draw_quadratic_to_func_t calls to #hb_draw_cubic_to_func_t if the
   * callback isn't defined.
   * @record
   */
  class draw_funcs_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.draw_funcs_t

    static name: string
  }

  interface draw_state_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.draw_state_t

    /**
     * Whether there is an open path
     * @field
     */
    pathOpen: bool_t
    /**
     * X component of the start of current path
     * @field
     */
    pathStartX: number
    /**
     * Y component of the start of current path
     * @field
     */
    pathStartY: number
    /**
     * X component of current point
     * @field
     */
    currentX: number
    /**
     * Y component of current point
     * @field
     */
    currentY: number
  }

  /**
   * Current drawing state.
   * @record
   */
  class draw_state_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.draw_state_t

    static name: string
  }

  interface face_t {}

  /**
   * Data type for holding font faces.
   * @record
   */
  class face_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.face_t

    static name: string
  }

  interface feature_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.feature_t

    /**
     * The #hb_tag_t tag of the feature
     * @field
     */
    tag: tag_t
    /**
     * The value of the feature. 0 disables the feature, non-zero (usually
     * 1) enables the feature.  For features implemented as lookup type 3 (like
     * 'salt') the `value` is a one based index into the alternates.
     * @field
     */
    value: number
    /**
     * the cluster to start applying this feature setting (inclusive).
     * @field
     */
    start: number
    /**
     * the cluster to end applying this feature setting (exclusive).
     * @field
     */
    end: number

    // Owm methods of HarfBuzz-0.0.HarfBuzz.feature_t

    /**
     * Converts a #hb_feature_t into a `NULL`-terminated string in the format
     * understood by hb_feature_from_string(). The client in responsible for
     * allocating big enough size for `buf,` 128 bytes is more than enough.
     */
    string(): /* buf */ string[]
  }

  /**
   * The #hb_feature_t is the structure that holds information about requested
   * feature application. The feature will be applied with the given value to all
   * glyphs which are in clusters between `start` (inclusive) and `end` (exclusive).
   * Setting start to #HB_FEATURE_GLOBAL_START and end to #HB_FEATURE_GLOBAL_END
   * specifies that the feature always applies to the entire buffer.
   * @record
   */
  class feature_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.feature_t

    static name: string
  }

  interface font_extents_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.font_extents_t

    /**
     * The height of typographic ascenders.
     * @field
     */
    ascender: position_t
    /**
     * The depth of typographic descenders.
     * @field
     */
    descender: position_t
    /**
     * The suggested line-spacing gap.
     * @field
     */
    lineGap: position_t
  }

  /**
   * Font-wide extent values, measured in font units.
   *
   * Note that typically `ascender` is positive and `descender`
   * negative, in coordinate systems that grow up.
   * @record
   */
  class font_extents_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.font_extents_t

    static name: string
  }

  interface font_funcs_t {}

  /**
   * Data type containing a set of virtual methods used for
   * working on #hb_font_t font objects.
   *
   * HarfBuzz provides a lightweight default function for each of
   * the methods in #hb_font_funcs_t. Client programs can implement
   * their own replacements for the individual font functions, as
   * needed, and replace the default by calling the setter for a
   * method.
   * @record
   */
  class font_funcs_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.font_funcs_t

    static name: string
  }

  interface font_t {}

  /**
   * Data type for holding fonts.
   * @record
   */
  class font_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.font_t

    static name: string
  }

  interface glyph_extents_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_extents_t

    /**
     * Distance from the x-origin to the left extremum of the glyph.
     * @field
     */
    xBearing: position_t
    /**
     * Distance from the top extremum of the glyph to the y-origin.
     * @field
     */
    yBearing: position_t
    /**
     * Distance from the left extremum of the glyph to the right extremum.
     * @field
     */
    width: position_t
    /**
     * Distance from the top extremum of the glyph to the bottom extremum.
     * @field
     */
    height: position_t
  }

  /**
   * Glyph extent values, measured in font units.
   *
   * Note that `height` is negative, in coordinate systems that grow up.
   * @record
   */
  class glyph_extents_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_extents_t

    static name: string
  }

  interface glyph_info_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_info_t

    /**
     * either a Unicode code point (before shaping) or a glyph index
     *             (after shaping).
     * @field
     */
    codepoint: codepoint_t
    /**
     * the index of the character in the original text that corresponds
     *           to this #hb_glyph_info_t, or whatever the client passes to
     *           hb_buffer_add(). More than one #hb_glyph_info_t can have the same
     *           `cluster` value, if they resulted from the same character (e.g. one
     *           to many glyph substitution), and when more than one character gets
     *           merged in the same glyph (e.g. many to one glyph substitution) the
     *           #hb_glyph_info_t will have the smallest cluster value of them.
     *           By default some characters are merged into the same cluster
     *           (e.g. combining marks have the same cluster as their bases)
     *           even if they are separate glyphs, hb_buffer_set_cluster_level()
     *           allow selecting more fine-grained cluster handling.
     * @field
     */
    cluster: number
  }

  /**
   * The #hb_glyph_info_t is the structure that holds information about the
   * glyphs and their relation to input text.
   * @record
   */
  class glyph_info_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_info_t

    static name: string
  }

  interface glyph_position_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_position_t

    /**
     * how much the line advances after drawing this glyph when setting
     *             text in horizontal direction.
     * @field
     */
    xAdvance: position_t
    /**
     * how much the line advances after drawing this glyph when setting
     *             text in vertical direction.
     * @field
     */
    yAdvance: position_t
    /**
     * how much the glyph moves on the X-axis before drawing it, this
     *            should not affect how much the line advances.
     * @field
     */
    xOffset: position_t
    /**
     * how much the glyph moves on the Y-axis before drawing it, this
     *            should not affect how much the line advances.
     * @field
     */
    yOffset: position_t
  }

  /**
   * The #hb_glyph_position_t is the structure that holds the positions of the
   * glyph in both horizontal and vertical directions. All positions in
   * #hb_glyph_position_t are relative to the current point.
   * @record
   */
  class glyph_position_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_position_t

    static name: string
  }

  interface language_t {
    // Owm methods of HarfBuzz-0.0.HarfBuzz.language_t

    /**
     * Converts an #hb_language_t to a string.
     * @returns A `NULL`-terminated string representing the @language. Must not be freed by the caller.
     */
    string(): string
  }

  /**
   * Data type for languages. Each #hb_language_t corresponds to a BCP 47
   * language tag.
   * @record
   */
  class language_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.language_t

    static name: string
  }

  interface map_t {}

  /**
   * Data type for holding integer-to-integer hash maps.
   * @record
   */
  class map_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.map_t

    static name: string
  }

  interface ot_color_layer_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t

    /**
     * the glyph ID of the layer
     * @field
     */
    glyph: codepoint_t
    /**
     * the palette color index of the layer
     * @field
     */
    colorIndex: number
  }

  /**
   * Pairs of glyph and color index.
   *
   * A color index of 0xFFFF does not refer to a palette
   * color, but indicates that the foreground color should
   * be used.
   * @record
   */
  class ot_color_layer_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t

    static name: string
  }

  interface ot_math_glyph_part_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t

    /**
     * The glyph index of the variant part
     * @field
     */
    glyph: codepoint_t
    /**
     * The length of the connector on the starting side of the variant part
     * @field
     */
    startConnectorLength: position_t
    /**
     * The length of the connector on the ending side of the variant part
     * @field
     */
    endConnectorLength: position_t
    /**
     * The total advance of the part
     * @field
     */
    fullAdvance: position_t
    /**
     * #hb_ot_math_glyph_part_flags_t flags for the part
     * @field
     */
    flags: ot_math_glyph_part_flags_t
  }

  /**
   * Data type to hold information for a "part" component of a math-variant glyph.
   * Large variants for stretchable math glyphs (such as parentheses) can be constructed
   * on the fly from parts.
   * @record
   */
  class ot_math_glyph_part_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t

    static name: string
  }

  interface ot_math_glyph_variant_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t

    /**
     * The glyph index of the variant
     * @field
     */
    glyph: codepoint_t
    /**
     * The advance width of the variant
     * @field
     */
    advance: position_t
  }

  /**
   * Data type to hold math-variant information for a glyph.
   * @record
   */
  class ot_math_glyph_variant_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t

    static name: string
  }

  interface ot_math_kern_entry_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_kern_entry_t

    /**
     * The maximum height at which this entry should be used
     * @field
     */
    maxCorrectionHeight: position_t
    /**
     * The kern value of the entry
     * @field
     */
    kernValue: position_t
  }

  /**
   * Data type to hold math kerning (cut-in) information for a glyph.
   * @record
   */
  class ot_math_kern_entry_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_kern_entry_t

    static name: string
  }

  interface ot_name_entry_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t

    /**
     * name ID
     * @field
     */
    nameId: ot_name_id_t
    /**
     * language
     * @field
     */
    language: language_t
  }

  /**
   * Structure representing a name ID in a particular language.
   * @record
   */
  class ot_name_entry_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t

    static name: string
  }

  interface ot_var_axis_info_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t

    /**
     * Index of the axis in the variation-axis array
     * @field
     */
    axisIndex: number
    /**
     * The #hb_tag_t tag identifying the design variation of the axis
     * @field
     */
    tag: tag_t
    /**
     * The `name` table Name ID that provides display names for the axis
     * @field
     */
    nameId: ot_name_id_t
    /**
     * The #hb_ot_var_axis_flags_t flags for the axis
     * @field
     */
    flags: ot_var_axis_flags_t
    /**
     * The minimum value on the variation axis that the font covers
     * @field
     */
    minValue: number
    /**
     * The position on the variation axis corresponding to the font's defaults
     * @field
     */
    defaultValue: number
    /**
     * The maximum value on the variation axis that the font covers
     * @field
     */
    maxValue: number
  }

  /**
   * Data type for holding variation-axis values.
   *
   * The minimum, default, and maximum values are in un-normalized, user scales.
   *
   * <note>Note: at present, the only flag defined for `flags` is
   * #HB_OT_VAR_AXIS_FLAG_HIDDEN.</note>
   * @record
   */
  class ot_var_axis_info_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t

    static name: string
  }

  interface ot_var_axis_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t

    /**
     * axis tag
     * @field
     */
    tag: tag_t
    /**
     * axis name identifier
     * @field
     */
    nameId: ot_name_id_t
    /**
     * minimum value of the axis
     * @field
     */
    minValue: number
    /**
     * default value of the axis
     * @field
     */
    defaultValue: number
    /**
     * maximum value of the axis
     * @field
     */
    maxValue: number
  }

  /**
   * Use #hb_ot_var_axis_info_t instead.
   * @record
   */
  class ot_var_axis_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t

    static name: string
  }

  interface paint_funcs_t {}

  /**
   * Glyph paint callbacks.
   *
   * The callbacks assume that the caller maintains a stack
   * of current transforms, clips and intermediate surfaces,
   * as evidenced by the pairs of push/pop callbacks. The
   * push/pop calls will be properly nested, so it is fine
   * to store the different kinds of object on a single stack.
   *
   * Not all callbacks are required for all kinds of glyphs.
   * For rendering COLRv0 or non-color outline glyphs, the
   * gradient callbacks are not needed, and the composite
   * callback only needs to handle simple alpha compositing
   * (#HB_PAINT_COMPOSITE_MODE_SRC_OVER).
   *
   * The paint-image callback is only needed for glyphs
   * with image blobs in the CBDT, sbix or SVG tables.
   *
   * The custom-palette-color callback is only necessary if
   * you want to override colors from the font palette with
   * custom colors.
   * @record
   */
  class paint_funcs_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.paint_funcs_t

    static name: string
  }

  interface segment_properties_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.segment_properties_t

    /**
     * the #hb_direction_t of the buffer, see hb_buffer_set_direction().
     * @field
     */
    direction: direction_t
    /**
     * the #hb_script_t of the buffer, see hb_buffer_set_script().
     * @field
     */
    script: script_t
    /**
     * the #hb_language_t of the buffer, see hb_buffer_set_language().
     * @field
     */
    language: language_t
  }

  /**
   * The structure that holds various text properties of an #hb_buffer_t. Can be
   * set and retrieved using hb_buffer_set_segment_properties() and
   * hb_buffer_get_segment_properties(), respectively.
   * @record
   */
  class segment_properties_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.segment_properties_t

    static name: string
  }

  interface set_t {}

  /**
   * Data type for holding a set of integers. #hb_set_t's are
   * used to gather and contain glyph IDs, Unicode code
   * points, and various other collections of discrete
   * values.
   * @record
   */
  class set_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.set_t

    static name: string
  }

  interface shape_plan_t {}

  /**
   * Data type for holding a shaping plan.
   *
   * Shape plans contain information about how HarfBuzz will shape a
   * particular text segment, based on the segment's properties and the
   * capabilities in the font face in use.
   *
   * Shape plans can be queried about how shaping will perform, given a set
   * of specific input parameters (script, language, direction, features,
   * etc.).
   * @record
   */
  class shape_plan_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.shape_plan_t

    static name: string
  }

  interface unicode_funcs_t {}

  /**
   * Data type containing a set of virtual methods used for
   * accessing various Unicode character properties.
   *
   * HarfBuzz provides a default function for each of the
   * methods in #hb_unicode_funcs_t. Client programs can implement
   * their own replacements for the individual Unicode functions, as
   * needed, and replace the default by calling the setter for a
   * method.
   * @record
   */
  class unicode_funcs_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.unicode_funcs_t

    static name: string
  }

  interface user_data_key_t {}

  /**
   * Data structure for holding user-data keys.
   * @record
   */
  class user_data_key_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.user_data_key_t

    static name: string
  }

  interface variation_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.variation_t

    /**
     * The #hb_tag_t tag of the variation-axis name
     * @field
     */
    tag: tag_t
    /**
     * The value of the variation axis
     * @field
     */
    value: number

    // Owm methods of HarfBuzz-0.0.HarfBuzz.variation_t

    /**
     * Converts an #hb_variation_t into a `NULL`-terminated string in the format
     * understood by hb_variation_from_string(). The client in responsible for
     * allocating big enough size for `buf,` 128 bytes is more than enough.
     */
    string(): /* buf */ string[]
  }

  /**
   * Data type for holding variation data. Registered OpenType
   * variation-axis tags are listed in
   * [OpenType Axis Tag Registry](https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg).
   * @record
   */
  class variation_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.variation_t

    static name: string
  }

  interface var_int_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.var_int_t

    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: number[]
    i8: number[]
  }

  class var_int_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.var_int_t

    static name: string
  }

  interface var_num_t {
    // Own fields of HarfBuzz-0.0.HarfBuzz.var_num_t

    f: number
    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: number[]
    i8: number[]
  }

  class var_num_t {
    // Own properties of HarfBuzz-0.0.HarfBuzz.var_num_t

    static name: string
  }

  type bool_t = number
  type codepoint_t = number
  type color_t = number
  type font_get_font_h_extents_func_t = font_get_font_extents_func_t
  type font_get_font_v_extents_func_t = font_get_font_extents_func_t
  type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t
  type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t
  type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t
  type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t
  type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t
  type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t
  type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t
  type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t
  type mask_t = number
  type ot_name_id_t = number
  type position_t = number
  type tag_t = number
}

export default HarfBuzz
// END
