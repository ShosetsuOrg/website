(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{316:function(t,e,s){"use strict";s.r(e);var a=s(13),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"repositories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repositories"}},[t._v("#")]),t._v(" Repositories")]),t._v(" "),e("p",[t._v("Shosetsu has repositories that provide extensions and libraries for its core functionality")]),t._v(" "),e("h2",{attrs:{id:"add-remove-repositories"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-remove-repositories"}},[t._v("#")]),t._v(" Add & Remove Repositories")]),t._v(" "),e("h3",{attrs:{id:"adding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding"}},[t._v("#")]),t._v(" Adding")]),t._v(" "),e("p",[t._v("If you would like to test developer repositories or other third party repositories, follow the directions below to add them to Shosetsu.")]),t._v(" "),e("h4",{attrs:{id:"steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),e("ol",[e("li",[t._v('Starting from your library, Tap "More"(...) on the navigation bar on the bottom.\n'),e("ul",[e("li",[t._v("Note: If you are using legacy navigation, open up the navigation drawer first.")])])]),t._v(" "),e("li",[t._v('In the new view, Select "Repositories" that is symbolized by a shopping cart.')]),t._v(" "),e("li",[t._v("Click the red circular button on the bottom with the plus sign (+).\n"),e("ol",[e("li",[t._v("Enter in the name of the repository")]),t._v(" "),e("li",[t._v("Enter in the URL of the repository.\n"),e("ul",[e("li",[t._v('Note: Ensure that if you put the URL into your browser with the ending of "/index.json" as so "YOUR_URL/index.json", you will be displayed json content of the repository index.')])])])])]),t._v(" "),e("li",[t._v('Click "OK", the repository should be added if nothing goes wrong.')]),t._v(" "),e("li",[t._v("Either click the prompt to refresh the repositories, or pull down on the list of repositories.")]),t._v(" "),e("li",[t._v("If all goes well, you have succesfully added a repository to your application.")])]),t._v(" "),e("h3",{attrs:{id:"removing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#removing"}},[t._v("#")]),t._v(" Removing")]),t._v(" "),e("p",[t._v('Note: You cannot remove the default "Main" / "Universe" repositories from Shosetsu. These are built in, do not attempt to remove them, they will be added back.')]),t._v(" "),e("p",[t._v("You can only disable the default repositories.")]),t._v(" "),e("h4",{attrs:{id:"steps-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps-2"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),e("ol",[e("li",[t._v('Starting from your library, Tap "More"(...) on the navigation bar on the bottom.\n'),e("ul",[e("li",[t._v("Note: If you are using legacy navigation, open up the navigation drawer first.")])])]),t._v(" "),e("li",[t._v('In the new view, Select "Repositories" that is symbolized by a shopping cart.\n'),e("ul",[e("li",[t._v("You will be provided a list of the repositories that are present in your application. Notice the (X) marks next to the switches.")])])]),t._v(" "),e("li",[t._v("First, Toggle the switch of the repository you want to remove, making sure it is set off and looks grey.")]),t._v(" "),e("li",[t._v("Either click the prompt to refresh the repositories, or pull down on the list of repositories.")]),t._v(" "),e("li",[t._v("After the repositories have been refreshed, click the (X) button on the repository you want to remove")]),t._v(" "),e("li",[t._v("Confirm that you want to remove said repository.")]),t._v(" "),e("li",[t._v("If all goes well, you have succesfully added a repository to your application.")])]),t._v(" "),e("h2",{attrs:{id:"creating-a-repository"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-repository"}},[t._v("#")]),t._v(" Creating a repository")]),t._v(" "),e("p",[t._v("A Shosetsu repository is a developer tool to host extensions, libraries, and styles so that users can acquire said resources.\nTo create a repository, one must either have a git repository or file server.")]),t._v(" "),e("h3",{attrs:{id:"create-the-repository-locally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-repository-locally"}},[t._v("#")]),t._v(" Create the repository locally")]),t._v(" "),e("p",[t._v("The first step is to ensure that you have the repository ready to be pushed over the internet.\nThus to creating a repository.\nA repository consists of the following standardized paths and files:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("deprecated/\nicons/\nlib/\nsrc/\nindex.json\n")])])]),e("h4",{attrs:{id:"explanation-of-parts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation-of-parts"}},[t._v("#")]),t._v(" Explanation of parts")]),t._v(" "),e("h5",{attrs:{id:"index-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index-json"}},[t._v("#")]),t._v(" index.json")]),t._v(" "),e("p",[t._v("This is the main file that makes a shosetsu repo, a repo.\nThis JSON file contains information on extensions, styles, and libraries available to download to Shosetsu.\nThe JSON file follows the following structure:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"styles"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h6",{attrs:{id:"libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#libraries"}},[t._v("#")]),t._v(" libraries")]),t._v(" "),e("p",[t._v("This property states shared files that extensions in Shosetsu use.")]),t._v(" "),e("p",[t._v("This property is optional.")]),t._v(" "),e("p",[t._v("The data contained is basic, a name and version.")]),t._v(" "),e("p",[t._v("The name is used to download the file matching said name under the "),e("code",[t._v("lib")]),t._v(" directory.")]),t._v(" "),e("p",[t._v("The following is an example:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libraries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"247truyen"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.1.2"')]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Note, Shosetsu uses "),e("a",{attrs:{href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("semantic versioning"),e("OutboundLink")],1),t._v(", specifically only 3 numbers separted by 2 periods. As show above. Do not use any other format.")])]),t._v(" "),e("h6",{attrs:{id:"scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[t._v("#")]),t._v(" scripts")]),t._v(" "),e("p",[t._v("This property states the extensions in the repository that can be downloaded.")]),t._v(" "),e("p",[t._v("This property is optional.")]),t._v(" "),e("p",[t._v("The data contained specify a variety of information, explained:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Explanation")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("name")]),t._v(" "),e("td",[t._v("Friendly name of the extension")])]),t._v(" "),e("tr",[e("td",[t._v("fileName")]),t._v(" "),e("td",[t._v("File name of the extension, must match with file under "),e("code",[t._v("src/$lang/")])])]),t._v(" "),e("tr",[e("td",[t._v("imageURL")]),t._v(" "),e("td",[t._v("URL of the image to display as extension icon, suggested to be under "),e("code",[t._v("icons/")])])]),t._v(" "),e("tr",[e("td",[t._v("id")]),t._v(" "),e("td",[t._v("Unique ID of the extension, Ensure this is 1000000% unique")])]),t._v(" "),e("tr",[e("td",[t._v("lang")]),t._v(" "),e("td",[t._v("Language of the extension, following "),e("a",{attrs:{href:"https://iso639-3.sil.org/code_tables/639/data",target:"_blank",rel:"noopener noreferrer"}},[t._v("ISO 639-2/639-3/639-5"),e("OutboundLink")],1),t._v(". This will be used to find the file under "),e("code",[t._v("src/")]),t._v(", ex: "),e("code",[t._v("src/eng/")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[t._v("ver")]),t._v(" "),e("td",[t._v("Version of the extension, following "),e("a",{attrs:{href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("semantic versioning"),e("OutboundLink")],1),t._v(", specifically only 3 numbers separted by 2 periods. Do not use any other format.")])]),t._v(" "),e("tr",[e("td",[t._v("libVer")]),t._v(" "),e("td",[t._v("Version of kotln-lib this extension was built for. If unsure, dump "),e("code",[t._v("1.0.0")])])]),t._v(" "),e("tr",[e("td",[t._v("md5")]),t._v(" "),e("td",[t._v("Hash of the extension, can be left blank. Primarily for security purposes.")])])])]),t._v(" "),e("p",[t._v("The following is an example:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CreativeNovels"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fileName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CreativeNovels"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"imageURL"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/shosetsuorg/extensions/raw/dev/icons/CreativeNovels.png"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("911")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lang"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ver"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.3"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"libVer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"md5"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2ac8b2379560dac51930790615c7095"')]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("ul",[e("li",[t._v("Note, Shosetsu uses "),e("a",{attrs:{href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("semantic versioning"),e("OutboundLink")],1),t._v(", specifically only 3 numbers separted by 2 periods. As show above. Do not use any other format.")])]),t._v(" "),e("h6",{attrs:{id:"styles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#styles"}},[t._v("#")]),t._v(" styles")]),t._v(" "),e("p",[t._v("This is not yet complete, come back another time ;p")]),t._v(" "),e("h5",{attrs:{id:"src"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#src"}},[t._v("#")]),t._v(" src")]),t._v(" "),e("p",[t._v("Folder to dump extensions under, ensure each extension is under a sub folder of its langauge code.\nExample:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("src/\n\teng/\n\t\tMyEnglish.lua\n\trus/\n\t\tMyRussian.lua\n\tcmn/\n\t\tMyMandarin.lua\n")])])]),e("h5",{attrs:{id:"lib"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lib"}},[t._v("#")]),t._v(" lib")]),t._v(" "),e("p",[t._v("Folder to dump libraries that shosetsu uses.")]),t._v(" "),e("h5",{attrs:{id:"icons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#icons"}},[t._v("#")]),t._v(" icons")]),t._v(" "),e("p",[t._v("Folder to organize all extension icons under.\nIt is good practice to have local copies of the extension icon,\nand subsequently also having a theme to them.")]),t._v(" "),e("h5",{attrs:{id:"deprecated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deprecated"}},[t._v("#")]),t._v(" deprecated")]),t._v(" "),e("p",[t._v("Folder to dump abandonded extensions, styles, and libs under. So you can continue working in the future.")]),t._v(" "),e("h4",{attrs:{id:"final-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#final-steps"}},[t._v("#")]),t._v(" Final steps")]),t._v(" "),e("p",[t._v("Now that you have the repo following the guidelines, review everything once more and move onto the next steps.")]),t._v(" "),e("h3",{attrs:{id:"creating-a-repository-via-gitlab-or-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-repository-via-gitlab-or-github"}},[t._v("#")]),t._v(" Creating a repository via GitLab or GitHub")]),t._v(" "),e("h4",{attrs:{id:"steps-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#steps-3"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),e("ol",[e("li",[t._v("Create a repository, Name it however you like")]),t._v(" "),e("li",[t._v("Follow instructions to push from your local directory to this repo.")]),t._v(" "),e("li",[t._v("Congrats, you have hosted your repo online. It will now be ava to add to your app via the following URLs. Note the branch should be main or whatever you named it.\n"),e("ul",[e("li",[t._v("GitLab: https://gitlab.com/YOUR_NAME/REPO_NAME/-/raw/BRANCH/")]),t._v(" "),e("li",[t._v("GitHub: https://raw.githubusercontent.com/YOUR_NAME/REPO_NAME/BRANCH/")])])])]),t._v(" "),e("h3",{attrs:{id:"creating-a-repository-via-file-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-repository-via-file-server"}},[t._v("#")]),t._v(" Creating a repository via file server")]),t._v(" "),e("h4",{attrs:{id:"locally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locally"}},[t._v("#")]),t._v(" Locally")]),t._v(" "),e("p",[t._v("On Linux, Run the following command in the terminal while in the directory of your repo.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("python "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" http.server\n")])])]),e("p",[t._v("Output should be like the following:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...\n")])])]),e("p",[t._v("Follow "),e("a",{attrs:{href:"#adding"}},[t._v("Adding")]),t._v(", but ensure the URL is your computers IP address, in the following format, with 8000 being the port python printed out\n"),e("code",[t._v("http://###.###.###.###:8000/")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"over-the-internet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#over-the-internet"}},[t._v("#")]),t._v(" Over the internet")]),t._v(" "),e("h5",{attrs:{id:"self"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#self"}},[t._v("#")]),t._v(" Self")]),t._v(" "),e("p",[t._v("Port foward, Have a domain, register with DNS, etc.")]),t._v(" "),e("h5",{attrs:{id:"vps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vps"}},[t._v("#")]),t._v(" VPS")]),t._v(" "),e("p",[t._v("Have a domain, register, etc.")])])}),[],!1,null,null,null);e.default=r.exports}}]);