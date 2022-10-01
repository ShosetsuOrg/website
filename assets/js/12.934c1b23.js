(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{314:function(t,e,a){"use strict";a.r(e);var s=a(13),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"creating-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-extensions"}},[t._v("#")]),t._v(" Creating Extensions")]),t._v(" "),e("p",[e("strong",[t._v("Shosetsu")]),t._v(" uses Lua extensions and an API on which the whole app is modeled.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.lua.org/about.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lua"),e("OutboundLink")],1),t._v(" is a simple interperated language. We recommend skimming through "),e("a",{attrs:{href:"https://www.lua.org/pil/contents.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Programming in Lua"),e("OutboundLink")],1),t._v(" and/or the "),e("a",{attrs:{href:"https://www.lua.org/manual/5.1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("reference manual"),e("OutboundLink")],1),t._v(" before trying to start writing extensions.")]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("ul",[e("li",[t._v("An internet connection.")]),t._v(" "),e("li",[t._v("Basic programming knowledge.")]),t._v(" "),e("li",[t._v("Any text editor "),e("em",[t._v("except Microsoft Notepad")]),t._v(", preferably an IDE.")])]),t._v(" "),e("div",{staticClass:"guide"},[e("p",{staticClass:"title"},[t._v("IDE Recommendation")]),e("p",[t._v("For this guide we recommend "),e("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA"),e("OutboundLink")],1),t._v(", as that is the one we've based our guide on.")]),t._v(" "),e("div",{staticClass:"custom-block aside"},[e("p",[t._v("Download "),e("a",{attrs:{href:"https://www.jetbrains.com/idea/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1)])])]),e("h2",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),e("ol",[e("li",[t._v("Fork the "),e("a",{attrs:{href:"https://github.com/ShosetsuOrg/extensions/fork",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions"),e("OutboundLink")],1),t._v(" repo and then clone it."),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/username/extensions.git\n")])])])]),t._v(" "),e("li",[e("strong",[t._v("OPTIONAL:")]),t._v(" Fork the "),e("a",{attrs:{href:"https://github.com/ShosetsuOrg/kotlin-lib",target:"_blank",rel:"noopener noreferrer"}},[t._v("kotlin-lib"),e("OutboundLink")],1),t._v(" repo and then clone it."),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/username/kotlin-lib.git\n")])])])])]),t._v(" "),e("h3",{attrs:{id:"intellij-idea"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intellij-idea"}},[t._v("#")]),t._v(" IntelliJ IDEA")]),t._v(" "),e("ol",[e("li",[t._v("Install the "),e("strong",[t._v("EmmyLua")]),t._v(" and "),e("strong",[t._v("Kotlin")]),t._v(" plugins ("),e("strong",[e("code",[t._v("Settings > Plugins > Marketplace")])]),t._v(") and restart "),e("strong",[t._v("IDEA")]),t._v(".")]),t._v(" "),e("li",[t._v("Open the directory of the extensions repo with "),e("strong",[e("code",[t._v("File > Open")])]),t._v(".")]),t._v(" "),e("li",[t._v("If you cloned "),e("strong",[t._v("kotlin-lib")]),t._v(", "),e("strong",[e("code",[t._v("File > New > Module from Existing Sources")])]),t._v(" and open the extension-lib directory.")]),t._v(" "),e("li",[e("strong",[e("code",[t._v("Edit Configurations")])]),t._v(".")]),t._v(" "),e("li",[t._v("Press the "),e("strong",[e("code",[t._v("+")])]),t._v(" button, select "),e("strong",[t._v("Kotlin")]),t._v(" and name the new configuration "),e("strong",[t._v("Test")]),t._v(".")]),t._v(" "),e("li",[t._v("Set "),e("strong",[t._v("Main Class")]),t._v(" to "),e("strong",[t._v("Test")]),t._v(" in "),e("strong",[e("code",[t._v("com.github.doomsdayrs.api.shosetsu.extensions.core")])]),t._v(" if you cloned the extension library, or "),e("strong",[e("code",[t._v("com.github.doomsdayrs.api.shosetsu.extensions")])]),t._v(".")]),t._v(" "),e("li",[t._v("Set the working directory to the directory of your cloned repository.")]),t._v(" "),e("li",[t._v("In the lib, select "),e("strong",[t._v("Test")]),t._v(" and open.")]),t._v(" "),e("li",[t._v("Change configuration according to your needs.")]),t._v(" "),e("li",[t._v("Run.")])]),t._v(" "),e("h2",{attrs:{id:"understanding-lua-extensions-and-libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understanding-lua-extensions-and-libraries"}},[t._v("#")]),t._v(" Understanding Lua Extensions and Libraries")]),t._v(" "),e("p",[t._v("Each Lua extension has the responsability for an individual site, but sites often use available software, which means they share the same codebase.\nThis is why extensions sometimes do not have any code but a call to "),e("code",[t._v("Require")]),t._v(".\nA good example is the plethora of extensions based on the "),e("strong",[t._v("Madara")]),t._v(" library, which defer all logic to the "),e("strong",[t._v("Madara")]),t._v(" library.")]),t._v(" "),e("h3",{attrs:{id:"extension-stucture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extension-stucture"}},[t._v("#")]),t._v(" Extension Stucture")]),t._v(" "),e("p",[t._v("A Commented JSON Header is included at the start of the file:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[t._v("-- "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9001")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TechnoJo4"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("An extension returns a table, the following fields are required:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("id")])]),t._v(" "),e("td",[e("code",[t._v("int")])]),t._v(" "),e("td",[t._v("Unique identifier to distinguish extensions")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("name")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("Name of the extension")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("baseURL")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("Base URL, usually a domain name prefixed with "),e("code",[t._v("https?://")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("listings")])]),t._v(" "),e("td",[e("code",[t._v("Listing[]")])]),t._v(" "),e("td",[t._v('The "pages" that the site provides that list novels. Sites usually only have a single one.')])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("getPassage")])]),t._v(" "),e("td",[e("code",[t._v("fun(string): string")])]),t._v(" "),e("td",[t._v("Gets a chapter's content")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("parseNovel")])]),t._v(" "),e("td",[e("code",[t._v("fun(string): NovelInfo")])]),t._v(" "),e("td",[t._v("Gets a novel's info")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("search")])]),t._v(" "),e("td",[e("code",[t._v("fun(table<int, any>): Novel[]")])]),t._v(" "),e("td",[t._v("Used to search for novels")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("updateSetting")])]),t._v(" "),e("td",[e("code",[t._v("fun(int, any): void")])]),t._v(" "),e("td",[t._v("Used to update settings")])])])]),t._v(" "),e("p",[t._v("The most important parts are listings, parseNovel and getPassage, but to write any of these you need to know how the create instances of the required types:")]),t._v(" "),e("h4",{attrs:{id:"the-listing-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-listing-type"}},[t._v("#")]),t._v(" The "),e("code",[t._v("Listing")]),t._v(" type:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Listing(\n    name: string,\n    isIncrementing: boolean,\n    filters: Filter[]?,\n    getListing: fun(data: table<int, any>?, inc: int?): Novel[]\n)\n")])])]),e("h4",{attrs:{id:"todo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" TODO:")]),t._v(" "),e("p",[t._v("EXPLAIN AND ADD OTHER TYPES")]),t._v(" "),e("h3",{attrs:{id:"optional-fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#optional-fields"}},[t._v("#")]),t._v(" Optional fields")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("imageURL")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[t._v("Logo of website")]),t._v(" "),e("td",[e("code",[t._v('""')])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("filters")])]),t._v(" "),e("td",[e("code",[t._v("Filter[]")])]),t._v(" "),e("td",[t._v("Search filters")]),t._v(" "),e("td",[e("code",[t._v("{}")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("settings")])]),t._v(" "),e("td",[e("code",[t._v("Filter[]")])]),t._v(" "),e("td",[t._v("Global filters")]),t._v(" "),e("td",[e("code",[t._v("{}")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hasSearch")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[t._v("Self-explanatory")]),t._v(" "),e("td",[e("code",[t._v("false")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("hasCloudFlare")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[t._v("Self-explanatory")]),t._v(" "),e("td",[e("code",[t._v("false")])])])])]),t._v(" "),e("h3",{attrs:{id:"different-methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#different-methods"}},[t._v("#")]),t._v(" Different Methods")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Input")]),t._v(" "),e("th",[t._v("Return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("Require")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("any")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("first")])]),t._v(" "),e("td",[e("code",[t._v("ArrayList|Elements")])]),t._v(" "),e("td",[e("code",[t._v("any")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("wrap")])]),t._v(" "),e("td",[e("code",[t._v("any")])]),t._v(" "),e("td",[e("code",[t._v("function")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("filter")])]),t._v(" "),e("td",[e("code",[t._v("ArrayList|Elements")])]),t._v(" "),e("td",[e("code",[t._v("table")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("map")])]),t._v(" "),e("td",[e("code",[t._v("ArrayList|Elements")])]),t._v(" "),e("td",[e("code",[t._v("table")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("mapNotNil")])]),t._v(" "),e("td",[e("code",[t._v("ArrayList|Elements")])]),t._v(" "),e("td",[e("code",[t._v("table")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("map2flat")])]),t._v(" "),e("td",[e("code",[t._v("ArrayList|Elements")])]),t._v(" "),e("td",[e("code",[t._v("table")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("GET")])]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v(","),e("code",[t._v("Headers")]),t._v(","),e("code",[t._v("CacheControl")])]),t._v(" "),e("td",[e("code",[t._v("Request")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Request")])]),t._v(" "),e("td",[e("code",[t._v("Request")])]),t._v(" "),e("td",[e("code",[t._v("Response")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("RequestDocument")])]),t._v(" "),e("td",[e("code",[t._v("Request")])]),t._v(" "),e("td",[e("code",[t._v("Document")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("GETDocument")])]),t._v(" "),e("td",[e("code",[t._v("string")])]),t._v(" "),e("td",[e("code",[t._v("Document")])])])])]),t._v(" "),e("h4",{attrs:{id:"require"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#require"}},[t._v("#")]),t._v(" Require")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"first"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#first"}},[t._v("#")]),t._v(" first")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"wrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wrap"}},[t._v("#")]),t._v(" wrap")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" filter")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" map")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"mapnotnil"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mapnotnil"}},[t._v("#")]),t._v(" mapNotNil")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"map2flat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map2flat"}},[t._v("#")]),t._v(" map2flat")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" GET")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"requestdocument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requestdocument"}},[t._v("#")]),t._v(" RequestDocument")]),t._v(" "),e("p",[t._v("STUD")]),t._v(" "),e("h4",{attrs:{id:"getdocument"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getdocument"}},[t._v("#")]),t._v(" GETDocument")]),t._v(" "),e("p",[e("code",[t._v("string")]),t._v(" URL of site\nMost basic way to get handle network recepts. Using default everything to return a Document.")]),t._v(" "),e("h3",{attrs:{id:"different-objects"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#different-objects"}},[t._v("#")]),t._v(" Different Objects")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Parameters")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("Listing")])]),t._v(" "),e("td",[e("code",[t._v("string")]),t._v(" "),e("code",[t._v("boolean")]),t._v(" "),e("code",[t._v("function():Novel.Listing[]")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Novel")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("NovelInfo")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("NovelChapter")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("NovelStatus")])]),t._v(" "),e("td",[e("code",[t._v("int")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("TextFilter")])]),t._v(" "),e("td",[e("code",[t._v("int")]),t._v(" "),e("code",[t._v("string")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("SwitchFilter")])]),t._v(" "),e("td",[e("code",[t._v("int")]),t._v(" "),e("code",[t._v("string")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("CheckBoxFilter")])]),t._v(" "),e("td",[e("code",[t._v("int")]),t._v(" "),e("code",[t._v("string")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("RadioGroupFilter")])]),t._v(" "),e("td",[e("code",[t._v("int")]),t._v(" "),e("code",[t._v("string")]),t._v(" "),e("code",[t._v("string[]")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("DropDownFilter")])]),t._v(" "),e("td",[e("code",[t._v("int")]),t._v(" "),e("code",[t._v("string")]),t._v(" "),e("code",[t._v("string[]")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("FilterGroup")])]),t._v(" "),e("td",[e("code",[t._v("int")]),t._v(" "),e("code",[t._v("string")]),t._v(" "),e("code",[t._v("Filter[]")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Element")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Elements")])]),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"listing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listing"}},[t._v("#")]),t._v(" Listing")]),t._v(" "),e("p",[e("code",[t._v("string")]),t._v("\t:\tName of the Listing\n"),e("code",[t._v("boolean")]),t._v(" \t:\tIf the listing increments (as in there is more then one page) \t:\n"),e("code",[t._v("function")]),t._v("\t:\tFunction that is called to retrieve the listing")]),t._v(" "),e("p",[t._v("A Listing is an abstract concept of a websites page.\nNot all websites have a single way to return a novel listing. Some have different pages that operate on different ways. To mitigate the issue with this, listings were introduced.\nMost sites do not have more then one listing of novels, so it is suggested to return a single listing, with a name of "),e("code",[t._v("default")])]),t._v(" "),e("h4",{attrs:{id:"novel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#novel"}},[t._v("#")]),t._v(" Novel")]),t._v(" "),e("p",[t._v("Actual class is "),e("code",[t._v("Novel.Listing()")]),t._v("\nRepresents a Listing entry of a novel")]),t._v(" "),e("h4",{attrs:{id:"novelinfo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#novelinfo"}},[t._v("#")]),t._v(" NovelInfo")]),t._v(" "),e("p",[t._v("Actual class is "),e("code",[t._v("Novel.Info()")]),t._v("\nThis is the information of a certain novel, used when a novel listing is clicked and Shosetsu opens an information view.")]),t._v(" "),e("h4",{attrs:{id:"novelchapter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#novelchapter"}},[t._v("#")]),t._v(" NovelChapter")]),t._v(" "),e("p",[t._v("Actual class is "),e("code",[t._v("Novel.Chapter()")]),t._v("\nThis represents each chapter of a novel.")]),t._v(" "),e("h4",{attrs:{id:"novelstatus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#novelstatus"}},[t._v("#")]),t._v(" NovelStatus")]),t._v(" "),e("p",[e("code",[t._v("int")]),t._v("\t:\tKey\nActual class is "),e("code",[t._v("Novel.Status()")]),t._v(". It is an enum of 4 different values.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Key")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("PUBLISHING")])]),t._v(" "),e("td",[e("code",[t._v("0")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("COMPLETED")])]),t._v(" "),e("td",[e("code",[t._v("1")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("PAUSED")])]),t._v(" "),e("td",[e("code",[t._v("2")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("UKNOWN")])]),t._v(" "),e("td",[e("code",[t._v("3")])])])])]),t._v(" "),e("h4",{attrs:{id:"textfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#textfilter"}},[t._v("#")]),t._v(" TextFilter")]),t._v(" "),e("p",[e("code",[t._v("int")]),t._v("\t:\tID\n"),e("code",[t._v("string")]),t._v(":\tName")]),t._v(" "),e("h4",{attrs:{id:"switchfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#switchfilter"}},[t._v("#")]),t._v(" SwitchFilter")]),t._v(" "),e("p",[e("code",[t._v("int")]),t._v("\t:\tID\n"),e("code",[t._v("string")]),t._v(":\tName")]),t._v(" "),e("h4",{attrs:{id:"checkboxfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#checkboxfilter"}},[t._v("#")]),t._v(" CheckBoxFilter")]),t._v(" "),e("p",[e("code",[t._v("int")]),t._v("\t:\tID\n"),e("code",[t._v("string")]),t._v(":\tName")]),t._v(" "),e("h4",{attrs:{id:"radiogroupfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#radiogroupfilter"}},[t._v("#")]),t._v(" RadioGroupFilter")]),t._v(" "),e("p",[e("code",[t._v("int")]),t._v("\t\t:\tID\n"),e("code",[t._v("string")]),t._v("\t:\tName\n"),e("code",[t._v("string[]")]),t._v("\t:\tDifferent options")]),t._v(" "),e("h4",{attrs:{id:"dropdownfilter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dropdownfilter"}},[t._v("#")]),t._v(" DropDownFilter")]),t._v(" "),e("p",[e("code",[t._v("int")]),t._v("\t\t:\tID\n"),e("code",[t._v("string")]),t._v("\t:\tName\n"),e("code",[t._v("string[]")]),t._v("\t:\tDifferent options")]),t._v(" "),e("h4",{attrs:{id:"filtergroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filtergroup"}},[t._v("#")]),t._v(" FilterGroup")]),t._v(" "),e("p",[e("code",[t._v("int")]),t._v("\t\t:\tID\n"),e("code",[t._v("string")]),t._v("\t:\tName\n"),e("code",[t._v("string[]")]),t._v("\t:\tDifferent options")]),t._v(" "),e("h4",{attrs:{id:"document"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[t._v("#")]),t._v(" Document")]),t._v(" "),e("p",[t._v("Is the java representation of an HTML page")]),t._v(" "),e("h4",{attrs:{id:"element"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element"}},[t._v("#")]),t._v(" Element")]),t._v(" "),e("p",[t._v("Is an element from a Document, such as "),e("code",[t._v("<a>")]),t._v(" or "),e("code",[t._v("<div>")]),t._v("\nReturned from either "),e("code",[t._v(':selectFirst("*")')]),t._v(" or a value from Elements")]),t._v(" "),e("h4",{attrs:{id:"elements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elements"}},[t._v("#")]),t._v(" Elements")]),t._v(" "),e("p",[t._v("Is technically "),e("code",[t._v("Element[]")]),t._v(". Returned from "),e("code",[t._v(':select("*")')])]),t._v(" "),e("h3",{attrs:{id:"constants-provided"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constants-provided"}},[t._v("#")]),t._v(" Constants provided")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Use")]),t._v(" "),e("th",[t._v("Value")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("QUERY")]),t._v(" "),e("td",[t._v("To retrieve the query data from a map")]),t._v(" "),e("td",[t._v("0")])])])]),t._v(" "),e("h3",{attrs:{id:"variable-naming"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variable-naming"}},[t._v("#")]),t._v(" Variable Naming")]),t._v(" "),e("p",[t._v("There are a few DO NOT's with creating extensions.")]),t._v(" "),e("ol",[e("li",[t._v("DO NOT name a local or global variable the same as any of the above")])]),t._v(" "),e("h2",{attrs:{id:"writing-your-extension"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-your-extension"}},[t._v("#")]),t._v(" Writing your extension")]),t._v(" "),e("p",[t._v("Now that you understand the basics, you can get to writing your extension:")]),t._v(" "),e("ol",[e("li",[t._v("Copy "),e("code",[t._v("DefaultStructure.lua")]),t._v(" to "),e("code",[t._v("src/LANG/NAME.lua")]),t._v(". LANG being the language of the website.")]),t._v(" "),e("li",[t._v("Fill in required fields.")]),t._v(" "),e("li",[t._v("Remove optionals that you do not need.")]),t._v(" "),e("li",[t._v("Create functions according to specification, then run the test loop on your extension.")]),t._v(" "),e("li",[t._v("TODO: COMPLETE")])])])}),[],!1,null,null,null);e.default=r.exports}}]);