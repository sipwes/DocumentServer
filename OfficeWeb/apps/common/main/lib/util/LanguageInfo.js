﻿/*
 * (c) Copyright Ascensio System SIA 2010-2015
 *
 * This program is a free software product. You can redistribute it and/or 
 * modify it under the terms of the GNU Affero General Public License (AGPL) 
 * version 3 as published by the Free Software Foundation. In accordance with 
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect 
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied 
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For 
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at Lubanas st. 125a-25, Riga, Latvia,
 * EU, LV-1021.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under 
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */
 if (Common === undefined) {
    var Common = {};
}
Common.util = Common.util || {};
Common.util.LanguageInfo = new(function () {
    var localLanguageName = {
        54: ["af", "Afrikaans"],
        1078: ["af-ZA", "Afrikaans (Suid Afrika)"],
        28: ["sq", "Shqipe"],
        1052: ["sq-AL", "Shqipe (Shqipëria)"],
        132: ["gsw", "Elsässisch"],
        1156: ["gsw-FR", "Elsässisch (Frànkrisch)"],
        94: ["am", "አማርኛ"],
        1118: ["am-ET", "አማርኛ (ኢትዮጵያ)"],
        1: ["ar", "العربية"],
        5121: ["ar-DZ", "العربية (الجزائر)"],
        15361: ["ar-BH", "العربية (البحرين)"],
        3073: ["ar-EG", "العربية (مصر)"],
        2049: ["ar-IQ", "العربية (العراق)"],
        11265: ["ar-JO", "العربية (الأردن)"],
        13313: ["ar-KW", "العربية (الكويت)"],
        12289: ["ar-LB", "العربية (لبنان)"],
        4097: ["ar-LY", "العربية (ليبيا)"],
        6145: ["ar-MA", "العربية (المملكة المغربية)"],
        8193: ["ar-OM", "العربية (عمان)"],
        16385: ["ar-QA", "العربية (قطر)"],
        1025: ["ar-SA", "العربية (المملكة العربية السعودية)"],
        10241: ["ar-SY", "العربية (سوريا)"],
        7169: ["ar-TN", "العربية (تونس)"],
        14337: ["ar-AE", "العربية (الإمارات العربية المتحدة)"],
        9217: ["ar-YE", "العربية (اليمن)"],
        43: ["hy", "Հայերեն"],
        1067: ["hy-AM", "Հայերեն (Հայաստան)"],
        77: ["as", "অসমীয়া"],
        1101: ["as-IN", "অসমীয়া (ভাৰত)"],
        44: ["az", "Azərbaycan­ılı"],
        29740: ["az-Cyrl", "Азәрбајҹан дили"],
        2092: ["az-Cyrl-AZ", "Азәрбајҹан (Азәрбајҹан)"],
        30764: ["az-Latn", "Azərbaycan­ılı"],
        1068: ["az-Latn-AZ", "Azərbaycan­ılı (Azərbaycan)"],
        109: ["ba", "Башҡорт"],
        1133: ["ba-RU", "Башҡорт (Россия)"],
        45: ["eu", "Euskara"],
        1069: ["eu-ES", "Euskara (Euskara)"],
        35: ["be", "Беларускі"],
        1059: ["be-BY", "Беларускі (Беларусь)"],
        69: ["bn", "বাংলা"],
        2117: ["bn-BD", "বাংলা (বাংলাদেশ)"],
        1093: ["bn-IN", "বাংলা (ভারত)"],
        30746: ["bs", "bosanski"],
        25626: ["bs-Cyrl", "Босански (Ћирилица)"],
        8218: ["bs-Cyrl-BA", "Босански (Босна и Херцеговина)"],
        26650: ["bs-Latn", "Bosanski (Latinica)"],
        5146: ["bs-Latn-BA", "Bosanski (Bosna i Hercegovina)"],
        126: ["br", "Brezhoneg"],
        1150: ["br-FR", "Brezhoneg (Frañs)"],
        2: ["bg", "Български"],
        1026: ["bg-BG", "Български (България)"],
        3: ["ca", "Català"],
        1027: ["ca-ES", "Català (Català)"],
        30724: ["zh", "中文"],
        4: ["zh-Hans", "中文(简体)"],
        2052: ["zh-CN", "中文(中华人民共和国)"],
        4100: ["zh-SG", "中文(新加坡)"],
        31748: ["zh-Hant", "中文(繁體)"],
        3076: ["zh-HK", "中文(香港特別行政區)"],
        5124: ["zh-MO", "中文(澳門特別行政區)"],
        1028: ["zh-TW", "中文(台灣)"],
        131: ["co", "Corsu"],
        1155: ["co-FR", "Corsu (France)"],
        26: ["hr", "Hrvatski"],
        1050: ["hr-HR", "Hrvatski (Hrvatska)"],
        4122: ["hr-BA", "Hrvatski (Bosna i Hercegovina)"],
        5: ["cs", "Čeština"],
        1029: ["cs-CZ", "Čeština (Česká republika)"],
        6: ["da", "Dansk"],
        1030: ["da-DK", "Dansk (Danmark)"],
        140: ["prs", "درى"],
        1164: ["prs-AF", "درى (افغانستان)"],
        101: ["dv", "ދިވެހިބަސް"],
        1125: ["dv-MV", "ދިވެހިބަސް (ދިވެހި ރާއްޖެ)"],
        19: ["nl", "Nederlands"],
        2067: ["nl-BE", "Nederlands (België)"],
        1043: ["nl-NL", "Nederlands (Nederland)"],
        9: ["en", "English"],
        3081: ["en-AU", "English (Australia)"],
        10249: ["en-BZ", "English (Belize)"],
        4105: ["en-CA", "English (Canada)"],
        9225: ["en-029", "English (Caribbean)"],
        16393: ["en-IN", "English (India)"],
        6153: ["en-IE", "English (Ireland)"],
        8201: ["en-JM", "English (Jamaica)"],
        17417: ["en-MY", "English (Malaysia)"],
        5129: ["en-NZ", "English (New Zealand)"],
        13321: ["en-PH", "English (Philippines)"],
        18441: ["en-SG", "English (Singapore)"],
        7177: ["en-ZA", "English (South Africa)"],
        11273: ["en-TT", "English (Trinidad y Tobago)"],
        2057: ["en-GB", "English (United Kingdom)"],
        1033: ["en-US", "English (United States)"],
        12297: ["en-ZW", "English (Zimbabwe)"],
        37: ["et", "Eesti"],
        1061: ["et-EE", "Eesti (Eesti)"],
        56: ["fo", "Føroyskt"],
        1080: ["fo-FO", "Føroyskt (Føroyar)"],
        100: ["fil", "Filipino"],
        1124: ["fil-PH", "Filipino (Pilipinas)"],
        11: ["fi", "Suomi"],
        1035: ["fi-FI", "Suomi (Suomi)"],
        12: ["fr", "Français"],
        2060: ["fr-BE", "Français (Belgique)"],
        3084: ["fr-CA", "Français (Canada)"],
        1036: ["fr-FR", "Français (France)"],
        5132: ["fr-LU", "Français (Luxembourg)"],
        6156: ["fr-MC", "Français (Principauté de Monaco)"],
        4108: ["fr-CH", "Français (Suisse)"],
        98: ["fy", "Frysk"],
        1122: ["fy-NL", "Frysk (Nederlân)"],
        86: ["gl", "Galego"],
        1110: ["gl-ES", "Galego (Galego)"],
        55: ["ka", "ქართული"],
        1079: ["ka-GE", "ქართული (საქართველო)"],
        7: ["de", "Deutsch"],
        3079: ["de-AT", "Deutsch (Österreich)"],
        1031: ["de-DE", "Deutsch (Deutschland)"],
        5127: ["de-LI", "Deutsch (Liechtenstein)"],
        4103: ["de-LU", "Deutsch (Luxemburg)"],
        2055: ["de-CH", "Deutsch (Schweiz)"],
        8: ["el", "Ελληνικά"],
        1032: ["el-GR", "Ελληνικά (Ελλάδα)"],
        111: ["kl", "Kalaallisut"],
        1135: ["kl-GL", "Kalaallisut (Kalaallit Nunaat)"],
        71: ["gu", "ગુજરાતી"],
        1095: ["gu-IN", "ગુજરાતી (ભારત)"],
        104: ["ha", "Hausa"],
        31848: ["ha-Latn", "Hausa (Latin)"],
        1128: ["ha-Latn-NG", "Hausa (Nigeria)"],
        13: ["he", "עברית"],
        1037: ["he-IL", "עברית (ישראל)"],
        57: ["hi", "हिंदी"],
        1081: ["hi-IN", "हिंदी (भारत)"],
        14: ["hu", "Magyar"],
        1038: ["hu-HU", "Magyar (Magyarország)"],
        15: ["is", "Íslenska"],
        1039: ["is-IS", "Íslenska (Ísland)"],
        112: ["ig", "Igbo"],
        1136: ["ig-NG", "Igbo (Nigeria)"],
        33: ["id", "Bahasa Indonesia"],
        1057: ["id-ID", "Bahasa Indonesia (Indonesia)"],
        93: ["iu", "Inuktitut"],
        31837: ["iu-Latn", "Inuktitut (Qaliujaaqpait)"],
        2141: ["iu-Latn-CA", "Inuktitut"],
        30813: ["iu-Cans", "ᐃᓄᒃᑎᑐᑦ (ᖃᓂᐅᔮᖅᐸᐃᑦ)"],
        1117: ["iu-Cans-CA", "ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕᒥ)"],
        60: ["ga", "Gaeilge"],
        2108: ["ga-IE", "Gaeilge (Éire)"],
        52: ["xh", "isiXhosa"],
        1076: ["xh-ZA", "isiXhosa (uMzantsi Afrika)"],
        53: ["zu", "isiZulu"],
        1077: ["zu-ZA", "isiZulu (iNingizimu Afrika)"],
        16: ["it", "Italiano"],
        1040: ["it-IT", "Italiano (Italia)"],
        2064: ["it-CH", "Italiano (Svizzera)"],
        17: ["ja", "日本語"],
        1041: ["ja-JP", "日本語 (日本)"],
        75: ["kn", "ಕನ್ನಡ"],
        1099: ["kn-IN", "ಕನ್ನಡ (ಭಾರತ)"],
        63: ["kk", "Қазақ"],
        1087: ["kk-KZ", "Қазақ (Қазақстан)"],
        83: ["km", "ខ្មែរ"],
        1107: ["km-KH", "ខ្មែរ (កម្ពុជា)"],
        134: ["qut", "K'iche"],
        1158: ["qut-GT", "K'iche (Guatemala)"],
        135: ["rw", "Kinyarwanda"],
        1159: ["rw-RW", "Kinyarwanda (Rwanda)"],
        65: ["sw", "Kiswahili"],
        1089: ["sw-KE", "Kiswahili (Kenya)"],
        87: ["kok", "कोंकणी"],
        1111: ["kok-IN", "कोंकणी (भारत)"],
        18: ["ko", "한국어"],
        1042: ["ko-KR", "한국어 (대한민국)"],
        64: ["ky", "Кыргыз"],
        1088: ["ky-KG", "Кыргыз (Кыргызстан)"],
        84: ["lo", "ລາວ"],
        1108: ["lo-LA", "ລາວ (ສ.ປ.ປ. ລາວ)"],
        38: ["lv", "Latviešu"],
        1062: ["lv-LV", "Latviešu (Latvija)"],
        39: ["lt", "Lietuvių"],
        1063: ["lt-LT", "Lietuvių (Lietuva)"],
        31790: ["dsb", "Dolnoserbšćina"],
        2094: ["dsb-DE", "Dolnoserbšćina (Nimska)"],
        110: ["lb", "Lëtzebuergesch"],
        1134: ["lb-LU", "Lëtzebuergesch (Luxembourg)"],
        1071: ["mk-MK", "Македонски јазик (Македонија)"],
        47: ["mk", "Македонски јазик"],
        62: ["ms", "Bahasa Melayu"],
        2110: ["ms-BN", "Bahasa Melayu (Brunei Darussalam)"],
        1086: ["ms-MY", "Bahasa Melayu (Malaysia)"],
        76: ["ml", "മലയാളം"],
        1100: ["ml-IN", "മലയാളം (ഭാരതം)"],
        58: ["mt", "Malti"],
        1082: ["mt-MT", "Malti (Malta)"],
        129: ["mi", "Reo Māori"],
        1153: ["mi-NZ", "Reo Māori (Aotearoa)"],
        122: ["arn", "Mapudungun"],
        1146: ["arn-CL", "Mapudungun (Chile)"],
        78: ["mr", "मराठी"],
        1102: ["mr-IN", "मराठी (भारत)"],
        124: ["moh", "Kanien'kéha"],
        1148: ["moh-CA", "Kanien'kéha"],
        80: ["mn", "Монгол хэл"],
        30800: ["mn-Cyrl", "Монгол хэл"],
        1104: ["mn-MN", "Монгол хэл (Монгол улс)"],
        31824: ["mn-Mong", "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ"],
        2128: ["mn-Mong-CN", "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)"],
        97: ["ne", "नेपाली"],
        1121: ["ne-NP", "नेपाली (नेपाल)"],
        20: ["no", "Norsk"],
        31764: ["nb", "Norsk (bokmål)"],
        30740: ["nn", "Norsk (Nynorsk)"],
        1044: ["nb-NO", "Norsk, bokmål (Norge)"],
        2068: ["nn-NO", "Norsk, nynorsk (Noreg)"],
        130: ["oc", "Occitan"],
        1154: ["oc-FR", "Occitan (França)"],
        72: ["or", "ଓଡ଼ିଆ"],
        1096: ["or-IN", "ଓଡ଼ିଆ (ଭାରତ)"],
        99: ["ps", "پښتو"],
        1123: ["ps-AF", "پښتو (افغانستان)"],
        41: ["fa", "فارسى"],
        1065: ["fa-IR", "فارسى (ایران)"],
        21: ["pl", "Polski"],
        1045: ["pl-PL", "Polski (Polska)"],
        22: ["pt", "Português"],
        1046: ["pt-BR", "Português (Brasil)"],
        2070: ["pt-PT", "Português (Portugal)"],
        70: ["pa", "ਪੰਜਾਬੀ"],
        1094: ["pa-IN", "ਪੰਜਾਬੀ (ਭਾਰਤ)"],
        107: ["quz", "Runasimi"],
        1131: ["quz-BO", "Runasimi (Qullasuyu)"],
        2155: ["quz-EC", "Runasimi (Ecuador)"],
        3179: ["quz-PE", "Runasimi (Piruw)"],
        24: ["ro", "Română"],
        1048: ["ro-RO", "Română (România)"],
        23: ["rm", "Rumantsch"],
        1047: ["rm-CH", "Rumantsch (Svizra)"],
        25: ["ru", "Русский"],
        1049: ["ru-RU", "Русский (Россия)"],
        28731: ["smn", "Sämikielâ"],
        31803: ["smj", "Julevusámegiella"],
        59: ["se", "Davvisámegiella"],
        29755: ["sms", "Sääm´ǩiõll"],
        30779: ["sma", "åarjelsaemiengiele"],
        9275: ["smn-FI", "Sämikielâ (Suomâ)"],
        4155: ["smj-NO", "Julevusámegiella (Vuodna)"],
        5179: ["smj-SE", "Julevusámegiella (Svierik)"],
        3131: ["se-FI", "Davvisámegiella (Suopma)"],
        1083: ["se-NO", "Davvisámegiella (Norga)"],
        2107: ["se-SE", "Davvisámegiella (Ruoŧŧa)"],
        8251: ["sms-FI", "Sääm´ǩiõll (Lää´ddjânnam)"],
        6203: ["sma-NO", "åarjelsaemiengiele (Nöörje)"],
        7227: ["sma-SE", "åarjelsaemiengiele (Sveerje)"],
        79: ["sa", "संस्कृत"],
        1103: ["sa-IN", "संस्कृत (भारतम्)"],
        145: ["gd", "Gàidhlig"],
        1169: ["gd-GB", "Gàidhlig (An Rìoghachd Aonaichte)"],
        31770: ["sr", "Srpski"],
        27674: ["sr-Cyrl", "Српски (Ћирилица)"],
        7194: ["sr-Cyrl-BA", "Српски (Босна и Херцеговина)"],
        12314: ["sr-Cyrl-ME", "Српски (Црна Гора)"],
        3098: ["sr-Cyrl-CS", "Српски (Србија и Црна Гора (Претходно))"],
        10266: ["sr-Cyrl-RS", "Српски (Србија)"],
        28698: ["sr-Latn", "Srpski (Latinica)"],
        6170: ["sr-Latn-BA", "Srpski (Bosna i Hercegovina)"],
        11290: ["sr-Latn-ME", "Srpski (Crna Gora)"],
        2074: ["sr-Latn-CS", "Srpski (Srbija i Crna Gora (Prethodno))"],
        9242: ["sr-Latn-RS", "Srpski (Srbija)"],
        108: ["nso", "Sesotho sa Leboa"],
        1132: ["nso-ZA", "Sesotho sa Leboa (Afrika Borwa)"],
        50: ["tn", "Setswana"],
        1074: ["tn-ZA", "Setswana (Aforika Borwa)"],
        91: ["si", "සිංහ"],
        1115: ["si-LK", "සිංහ (ශ්රී ලංකා)"],
        27: ["sk", "Slovenčina"],
        1051: ["sk-SK", "Slovenčina (Slovenská republika)"],
        36: ["sl", "Slovenski"],
        1060: ["sl-SI", "Slovenski (Slovenija)"],
        10: ["es", "Español"],
        11274: ["es-AR", "Español (Argentina)"],
        16394: ["es-BO", "Español (Bolivia)"],
        13322: ["es-CL", "Español (Chile)"],
        9226: ["es-CO", "Español (Colombia)"],
        5130: ["es-CR", "Español (Costa Rica)"],
        7178: ["es-DO", "Español (República Dominicana)"],
        12298: ["es-EC", "Español (Ecuador)"],
        17418: ["es-SV", "Español (El Salvador)"],
        4106: ["es-GT", "Español (Guatemala)"],
        18442: ["es-HN", "Español (Honduras)"],
        2058: ["es-MX", "Español (México)"],
        19466: ["es-NI", "Español (Nicaragua)"],
        6154: ["es-PA", "Español (Panamá)"],
        15370: ["es-PY", "Español (Paraguay)"],
        10250: ["es-PE", "Español (Perú)"],
        20490: ["es-PR", "Español (Puerto Rico)"],
        3082: ["es-ES", "Español (España, alfabetización internacional)"],
        21514: ["es-US", "Español (Estados Unidos)"],
        14346: ["es-UY", "Español (Uruguay)"],
        8202: ["es-VE", "Español (Republica Bolivariana de Venezuela)"],
        29: ["sv", "Svenska"],
        2077: ["sv-FI", "Svenska (Finland)"],
        1053: ["sv-SE", "Svenska (Sverige)"],
        90: ["syr", "ܣܘܪܝܝܐ"],
        1114: ["syr-SY", "ܣܘܪܝܝܐ (سوريا)"],
        40: ["tg", "Тоҷикӣ"],
        31784: ["tg-Cyrl", "Тоҷикӣ"],
        1064: ["tg-Cyrl-TJ", "Тоҷикӣ (Тоҷикистон)"],
        95: ["tzm", "Tamazight"],
        31839: ["tzm-Latn", "Tamazight (Latin)"],
        2143: ["tzm-Latn-DZ", "Tamazight (Djazaïr)"],
        73: ["ta", "தமிழ்"],
        1097: ["ta-IN", "தமிழ் (இந்தியா)"],
        68: ["tt", "Татар"],
        1092: ["tt-RU", "Татар (Россия)"],
        74: ["te", "తెలుగు"],
        1098: ["te-IN", "తెలుగు (భారత దేశం)"],
        30: ["th", "ไทย"],
        1054: ["th-TH", "ไทย (ไทย)"],
        81: ["bo", "བོད་ཡིག"],
        1105: ["bo-CN", "བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)"],
        31: ["tr", "Türkçe"],
        1055: ["tr-TR", "Türkçe (Türkiye)"],
        66: ["tk", "Türkmençe"],
        1090: ["tk-TM", "Türkmençe (Türkmenistan)"],
        34: ["uk", "Українська"],
        1058: ["uk-UA", "Українська (Україна)"],
        46: ["hsb", "Hornjoserbšćina"],
        1070: ["hsb-DE", "Hornjoserbšćina (Němska)"],
        32: ["ur", "اُردو"],
        1056: ["ur-PK", "اُردو (پاکستان)"],
        128: ["ug", "ئۇيغۇر يېزىقى"],
        1152: ["ug-CN", "(ئۇيغۇر يېزىقى (جۇڭخۇا خەلق جۇمھۇرىيىتى"],
        30787: ["uz-Cyrl", "Ўзбек"],
        2115: ["uz-Cyrl-UZ", "Ўзбек (Ўзбекистон)"],
        67: ["uz", "U'zbek"],
        31811: ["uz-Latn", "U'zbek"],
        1091: ["uz-Latn-UZ", "U'zbek (U'zbekiston Respublikasi)"],
        42: ["vi", "Tiếng Việt"],
        1066: ["vi-VN", "Tiếng Việt (Việt Nam)"],
        82: ["cy", "Cymraeg"],
        1106: ["cy-GB", "Cymraeg (y Deyrnas Unedig)"],
        136: ["wo", "Wolof"],
        1160: ["wo-SN", "Wolof (Sénégal)"],
        133: ["sah", "Саха"],
        1157: ["sah-RU", "Саха (Россия)"],
        120: ["ii", "ꆈꌠꁱꂷ"],
        1144: ["ii-CN", "ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)"],
        106: ["yo", "Yoruba"],
        1130: ["yo-NG", "Yoruba (Nigeria)"],
        2129: ["bo-BT", "Tibetan, Bhutan"],
        1126: ["bin-NG", "Bini, Nigeria"],
        1116: ["chr-US", "Cherokee, United States"],
        15369: ["en-HK", "English, Hong Kong"],
        14345: ["en-ID", "English, Indonesia"],
        1034: ["es-ES_tradnl", "Spanish"],
        15372: ["fr-HT", "French, Haiti"],
        9228: ["fr-CG", "French, Congo"],
        12300: ["fr-CI", "French, Cote d'Ivoire"],
        11276: ["fr-CM", "French, Cameroon"],
        14348: ["fr-MA", "French, Morocco"],
        13324: ["fr-ML", "French, Mali"],
        8204: ["fr-RE", "French, Reunion"],
        10252: ["fr-SN", "French, Senegal"],
        7180: ["fr-West", "French"],
        1127: ["fuv-NG", "Nigerian Fulfulde, Nigeria"],
        1138: ["gaz-ET", "West Central Oromo, Ethiopia"],
        1140: ["gn-PY", "Guarani, Paraguay"],
        1141: ["haw-US", "Hawaiian, UnitedStates"],
        1129: ["ibb-NG", "Ibibio, Nigeria"],
        1137: ["kr-NG", "Kanuri, Nigeria"],
        1112: ["mni", "Manipuri"],
        1109: ["my-MM", "Burmese, Myanmar"],
        2145: ["ne-IN", "Nepali, India"],
        1145: ["pap-AN", "Papiamento, Netherlands Antilles"],
        2118: ["pa-PK", "Panjabi, Pakistan"],
        1165: ["plt-MG", "Plateau Malagasy, Madagascar"],
        2072: ["ro-MO", "Romanian, Macao"],
        2073: ["ru-MO", "Russian, Macao"],
        1113: ["sd-IN", "Sindhi, India"],
        2137: ["sd-PK", "Sindhi, Pakistan"],
        1143: ["so-SO", "Somali, Somalia"],
        1072: ["st-ZA", "Southern Sotho, South Africa"],
        1139: ["ti-ER", "Tigrinya, Eritrea"],
        2163: ["ti-ET", "Tigrinya, Ethiopia"],
        1119: ["tmz", "Tamanaku"],
        3167: ["tmz-MA", "Tamanaku, Morocco"],
        1073: ["ts-ZA", "Tsonga, South Africa"],
        2080: ["ur-IN", "Urdu, India"],
        1075: ["ven-ZA", "South Africa"]
    };
    return {
        getLocalLanguageName: function (code) {
            return localLanguageName[code] || ["", code];
        }
    };
})();