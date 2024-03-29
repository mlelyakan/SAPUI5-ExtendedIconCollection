var SimpleLineIcons = {
   getIcons: function (callback) {
      var icons = [
         {
            "name": "User",
            "id": "user",
            "unicode": "e005",
            "created": 1
         },
         {
            "name": "People",
            "id": "people",
            "unicode": "e001",
            "created": 1
         },
         {
            "name": "User-female",
            "id": "user-female",
            "unicode": "e000",
            "created": 1
         },
         {
            "name": "User-follow",
            "id": "user-follow",
            "unicode": "e002",
            "created": 1
         },
         {
            "name": "User-following",
            "id": "user-following",
            "unicode": "e003",
            "created": 1
         },
         {
            "name": "User-unfollow",
            "id": "user-unfollow",
            "unicode": "e004",
            "created": 1
         },
         {
            "name": "Login",
            "id": "login",
            "unicode": "e066",
            "created": 1
         },
         {
            "name": "Logout",
            "id": "logout",
            "unicode": "e065",
            "created": 1
         },
         {
            "name": "Emotsmile",
            "id": "emotsmile",
            "unicode": "e021",
            "created": 1
         },
         {
            "name": "Phone",
            "id": "phone",
            "unicode": "e600",
            "created": 1
         },
         {
            "name": "Call-end",
            "id": "call-end",
            "unicode": "e048",
            "created": 1
         },
         {
            "name": "Call-in",
            "id": "call-in",
            "unicode": "e047",
            "created": 1
         },
         {
            "name": "Call-out",
            "id": "call-out",
            "unicode": "e046",
            "created": 1
         },
         {
            "name": "Map",
            "id": "map",
            "unicode": "e033",
            "created": 1
         },
         {
            "name": "Location-pin",
            "id": "location-pin",
            "unicode": "e096",
            "created": 1
         },
         {
            "name": "Direction",
            "id": "direction",
            "unicode": "e042",
            "created": 1
         },
         {
            "name": "Directions",
            "id": "directions",
            "unicode": "e041",
            "created": 1
         },
         {
            "name": "Compass",
            "id": "compass",
            "unicode": "e045",
            "created": 1
         },
         {
            "name": "Layers",
            "id": "layers",
            "unicode": "e034",
            "created": 1
         },
         {
            "name": "Menu",
            "id": "menu",
            "unicode": "e601",
            "created": 1
         },
         {
            "name": "List",
            "id": "list",
            "unicode": "e067",
            "created": 1
         },
         {
            "name": "Options-vertical",
            "id": "options-vertical",
            "unicode": "e602",
            "created": 1
         },
         {
            "name": "Options",
            "id": "options",
            "unicode": "e603",
            "created": 1
         },
         {
            "name": "Arrow-down",
            "id": "arrow-down",
            "unicode": "e604",
            "created": 1
         },
         {
            "name": "Arrow-left",
            "id": "arrow-left",
            "unicode": "e605",
            "created": 1
         },
         {
            "name": "Arrow-right",
            "id": "arrow-right",
            "unicode": "e606",
            "created": 1
         },
         {
            "name": "Arrow-up",
            "id": "arrow-up",
            "unicode": "e607",
            "created": 1
         },
         {
            "name": "Arrow-up-circle",
            "id": "arrow-up-circle",
            "unicode": "e078",
            "created": 1
         },
         {
            "name": "Arrow-left-circle",
            "id": "arrow-left-circle",
            "unicode": "e07a",
            "created": 1
         },
         {
            "name": "Arrow-right-circle",
            "id": "arrow-right-circle",
            "unicode": "e079",
            "created": 1
         },
         {
            "name": "Arrow-down-circle",
            "id": "arrow-down-circle",
            "unicode": "e07b",
            "created": 1
         },
         {
            "name": "Check",
            "id": "check",
            "unicode": "e080",
            "created": 1
         },
         {
            "name": "Clock",
            "id": "clock",
            "unicode": "e081",
            "created": 1
         },
         {
            "name": "Plus",
            "id": "plus",
            "unicode": "e095",
            "created": 1
         },
         {
            "name": "Close",
            "id": "close",
            "unicode": "e082",
            "created": 1
         },
         {
            "name": "Trophy",
            "id": "trophy",
            "unicode": "e006",
            "created": 1
         },
         {
            "name": "Screen-smartphone",
            "id": "screen-smartphone",
            "unicode": "e010",
            "created": 1
         },
         {
            "name": "Screen-desktop",
            "id": "screen-desktop",
            "unicode": "e011",
            "created": 1
         },
         {
            "name": "Plane",
            "id": "plane",
            "unicode": "e012",
            "created": 1
         },
         {
            "name": "Notebook",
            "id": "notebook",
            "unicode": "e013",
            "created": 1
         },
         {
            "name": "Mustache",
            "id": "mustache",
            "unicode": "e014",
            "created": 1
         },
         {
            "name": "Mouse",
            "id": "mouse",
            "unicode": "e015",
            "created": 1
         },
         {
            "name": "Magnet",
            "id": "magnet",
            "unicode": "e016",
            "created": 1
         },
         {
            "name": "Energy",
            "id": "energy",
            "unicode": "e020",
            "created": 1
         },
         {
            "name": "Disc",
            "id": "disc",
            "unicode": "e022",
            "created": 1
         },
         {
            "name": "Cursor",
            "id": "cursor",
            "unicode": "e06e",
            "created": 1
         },
         {
            "name": "Cursor-move",
            "id": "cursor-move",
            "unicode": "e023",
            "created": 1
         },
         {
            "name": "Crop",
            "id": "crop",
            "unicode": "e024",
            "created": 1
         },
         {
            "name": "Chemistry",
            "id": "chemistry",
            "unicode": "e026",
            "created": 1
         },
         {
            "name": "Speedometer",
            "id": "speedometer",
            "unicode": "e007",
            "created": 1
         },
         {
            "name": "Shield",
            "id": "shield",
            "unicode": "e00e",
            "created": 1
         },
         {
            "name": "Screen-tablet",
            "id": "screen-tablet",
            "unicode": "e00f",
            "created": 1
         },
         {
            "name": "Magic-wand",
            "id": "magic-wand",
            "unicode": "e017",
            "created": 1
         },
         {
            "name": "Hourglass",
            "id": "hourglass",
            "unicode": "e018",
            "created": 1
         },
         {
            "name": "Graduation",
            "id": "graduation",
            "unicode": "e019",
            "created": 1
         },
         {
            "name": "Ghost",
            "id": "ghost",
            "unicode": "e01a",
            "created": 1
         },
         {
            "name": "Game-controller",
            "id": "game-controller",
            "unicode": "e01b",
            "created": 1
         },
         {
            "name": "Fire",
            "id": "fire",
            "unicode": "e01c",
            "created": 1
         },
         {
            "name": "Eyeglass",
            "id": "eyeglass",
            "unicode": "e01d",
            "created": 1
         },
         {
            "name": "Envelope-open",
            "id": "envelope-open",
            "unicode": "e01e",
            "created": 1
         },
         {
            "name": "Envelope-letter",
            "id": "envelope-letter",
            "unicode": "e01f",
            "created": 1
         },
         {
            "name": "Bell",
            "id": "bell",
            "unicode": "e027",
            "created": 1
         },
         {
            "name": "Badge",
            "id": "badge",
            "unicode": "e028",
            "created": 1
         },
         {
            "name": "Anchor",
            "id": "anchor",
            "unicode": "e029",
            "created": 1
         },
         {
            "name": "Wallet",
            "id": "wallet",
            "unicode": "e02a",
            "created": 1
         },
         {
            "name": "Vector",
            "id": "vector",
            "unicode": "e02b",
            "created": 1
         },
         {
            "name": "Speech",
            "id": "speech",
            "unicode": "e02c",
            "created": 1
         },
         {
            "name": "Puzzle",
            "id": "puzzle",
            "unicode": "e02d",
            "created": 1
         },
         {
            "name": "Printer",
            "id": "printer",
            "unicode": "e02e",
            "created": 1
         },
         {
            "name": "Present",
            "id": "present",
            "unicode": "e02f",
            "created": 1
         },
         {
            "name": "Playlist",
            "id": "playlist",
            "unicode": "e030",
            "created": 1
         },
         {
            "name": "Pin",
            "id": "pin",
            "unicode": "e031",
            "created": 1
         },
         {
            "name": "Picture",
            "id": "picture",
            "unicode": "e032",
            "created": 1
         },
         {
            "name": "Handbag",
            "id": "handbag",
            "unicode": "e035",
            "created": 1
         },
         {
            "name": "Globe-alt",
            "id": "globe-alt",
            "unicode": "e036",
            "created": 1
         },
         {
            "name": "Globe",
            "id": "globe",
            "unicode": "e037",
            "created": 1
         },
         {
            "name": "Folder-alt",
            "id": "folder-alt",
            "unicode": "e039",
            "created": 1
         },
         {
            "name": "Folder",
            "id": "folder",
            "unicode": "e089",
            "created": 1
         },
         {
            "name": "Film",
            "id": "film",
            "unicode": "e03a",
            "created": 1
         },
         {
            "name": "Feed",
            "id": "feed",
            "unicode": "e03b",
            "created": 1
         },
         {
            "name": "Drop",
            "id": "drop",
            "unicode": "e03e",
            "created": 1
         },
         {
            "name": "Drawar",
            "id": "drawar",
            "unicode": "e03f",
            "created": 1
         },
         {
            "name": "Docs",
            "id": "docs",
            "unicode": "e040",
            "created": 1
         },
         {
            "name": "Doc",
            "id": "doc",
            "unicode": "e085",
            "created": 1
         },
         {
            "name": "Diamond",
            "id": "diamond",
            "unicode": "e043",
            "created": 1
         },
         {
            "name": "Cup",
            "id": "cup",
            "unicode": "e044",
            "created": 1
         },
         {
            "name": "Calculator",
            "id": "calculator",
            "unicode": "e049",
            "created": 1
         },
         {
            "name": "Bubbles",
            "id": "bubbles",
            "unicode": "e04a",
            "created": 1
         },
         {
            "name": "Briefcase",
            "id": "briefcase",
            "unicode": "e04b",
            "created": 1
         },
         {
            "name": "Book-open",
            "id": "book-open",
            "unicode": "e04c",
            "created": 1
         },
         {
            "name": "Basket-loaded",
            "id": "basket-loaded",
            "unicode": "e04d",
            "created": 1
         },
         {
            "name": "Basket",
            "id": "basket",
            "unicode": "e04e",
            "created": 1
         },
         {
            "name": "Bag",
            "id": "bag",
            "unicode": "e04f",
            "created": 1
         },
         {
            "name": "Action-undo",
            "id": "action-undo",
            "unicode": "e050",
            "created": 1
         },
         {
            "name": "Action-redo",
            "id": "action-redo",
            "unicode": "e051",
            "created": 1
         },
         {
            "name": "Wrench",
            "id": "wrench",
            "unicode": "e052",
            "created": 1
         },
         {
            "name": "Umbrella",
            "id": "umbrella",
            "unicode": "e053",
            "created": 1
         },
         {
            "name": "Trash",
            "id": "trash",
            "unicode": "e054",
            "created": 1
         },
         {
            "name": "Tag",
            "id": "tag",
            "unicode": "e055",
            "created": 1
         },
         {
            "name": "Support",
            "id": "support",
            "unicode": "e056",
            "created": 1
         },
         {
            "name": "Frame",
            "id": "frame",
            "unicode": "e038",
            "created": 1
         },
         {
            "name": "Size-fullscreen",
            "id": "size-fullscreen",
            "unicode": "e057",
            "created": 1
         },
         {
            "name": "Size-actual",
            "id": "size-actual",
            "unicode": "e058",
            "created": 1
         },
         {
            "name": "Shuffle",
            "id": "shuffle",
            "unicode": "e059",
            "created": 1
         },
         {
            "name": "Share-alt",
            "id": "share-alt",
            "unicode": "e05a",
            "created": 1
         },
         {
            "name": "Share",
            "id": "share",
            "unicode": "e05b",
            "created": 1
         },
         {
            "name": "Rocket",
            "id": "rocket",
            "unicode": "e05c",
            "created": 1
         },
         {
            "name": "Question",
            "id": "question",
            "unicode": "e05d",
            "created": 1
         },
         {
            "name": "Pie-chart",
            "id": "pie-chart",
            "unicode": "e05e",
            "created": 1
         },
         {
            "name": "Pencil",
            "id": "pencil",
            "unicode": "e05f",
            "created": 1
         },
         {
            "name": "Note",
            "id": "note",
            "unicode": "e060",
            "created": 1
         },
         {
            "name": "Loop",
            "id": "loop",
            "unicode": "e064",
            "created": 1
         },
         {
            "name": "Home",
            "id": "home",
            "unicode": "e069",
            "created": 1
         },
         {
            "name": "Grid",
            "id": "grid",
            "unicode": "e06a",
            "created": 1
         },
         {
            "name": "Graph",
            "id": "graph",
            "unicode": "e06b",
            "created": 1
         },
         {
            "name": "Microphone",
            "id": "microphone",
            "unicode": "e063",
            "created": 1
         },
         {
            "name": "Music-tone-alt",
            "id": "music-tone-alt",
            "unicode": "e061",
            "created": 1
         },
         {
            "name": "Music-tone",
            "id": "music-tone",
            "unicode": "e062",
            "created": 1
         },
         {
            "name": "Earphones-alt",
            "id": "earphones-alt",
            "unicode": "e03c",
            "created": 1
         },
         {
            "name": "Earphones",
            "id": "earphones",
            "unicode": "e03d",
            "created": 1
         },
         {
            "name": "Equalizer",
            "id": "equalizer",
            "unicode": "e06c",
            "created": 1
         },
         {
            "name": "Like",
            "id": "like",
            "unicode": "e068",
            "created": 1
         },
         {
            "name": "Dislike",
            "id": "dislike",
            "unicode": "e06d",
            "created": 1
         },
         {
            "name": "Control-start",
            "id": "control-start",
            "unicode": "e06f",
            "created": 1
         },
         {
            "name": "Control-rewind",
            "id": "control-rewind",
            "unicode": "e070",
            "created": 1
         },
         {
            "name": "Control-play",
            "id": "control-play",
            "unicode": "e071",
            "created": 1
         },
         {
            "name": "Control-pause",
            "id": "control-pause",
            "unicode": "e072",
            "created": 1
         },
         {
            "name": "Control-forward",
            "id": "control-forward",
            "unicode": "e073",
            "created": 1
         },
         {
            "name": "Control-end",
            "id": "control-end",
            "unicode": "e074",
            "created": 1
         },
         {
            "name": "Volume-1",
            "id": "volume-1",
            "unicode": "e09f",
            "created": 1
         },
         {
            "name": "Volume-2",
            "id": "volume-2",
            "unicode": "e0a0",
            "created": 1
         },
         {
            "name": "Volume-off",
            "id": "volume-off",
            "unicode": "e0a1",
            "created": 1
         },
         {
            "name": "Calendar",
            "id": "calendar",
            "unicode": "e075",
            "created": 1
         },
         {
            "name": "Bulb",
            "id": "bulb",
            "unicode": "e076",
            "created": 1
         },
         {
            "name": "Chart",
            "id": "chart",
            "unicode": "e077",
            "created": 1
         },
         {
            "name": "Ban",
            "id": "ban",
            "unicode": "e07c",
            "created": 1
         },
         {
            "name": "Bubble",
            "id": "bubble",
            "unicode": "e07d",
            "created": 1
         },
         {
            "name": "Camcorder",
            "id": "camcorder",
            "unicode": "e07e",
            "created": 1
         },
         {
            "name": "Camera",
            "id": "camera",
            "unicode": "e07f",
            "created": 1
         },
         {
            "name": "Cloud-download",
            "id": "cloud-download",
            "unicode": "e083",
            "created": 1
         },
         {
            "name": "Cloud-upload",
            "id": "cloud-upload",
            "unicode": "e084",
            "created": 1
         },
         {
            "name": "Envelope",
            "id": "envelope",
            "unicode": "e086",
            "created": 1
         },
         {
            "name": "Eye",
            "id": "eye",
            "unicode": "e087",
            "created": 1
         },
         {
            "name": "Flag",
            "id": "flag",
            "unicode": "e088",
            "created": 1
         },
         {
            "name": "Heart",
            "id": "heart",
            "unicode": "e08a",
            "created": 1
         },
         {
            "name": "Info",
            "id": "info",
            "unicode": "e08b",
            "created": 1
         },
         {
            "name": "Key",
            "id": "key",
            "unicode": "e08c",
            "created": 1
         },
         {
            "name": "Link",
            "id": "link",
            "unicode": "e08d",
            "created": 1
         },
         {
            "name": "Lock",
            "id": "lock",
            "unicode": "e08e",
            "created": 1
         },
         {
            "name": "Lock-open",
            "id": "lock-open",
            "unicode": "e08f",
            "created": 1
         },
         {
            "name": "Magnifier",
            "id": "magnifier",
            "unicode": "e090",
            "created": 1
         },
         {
            "name": "Magnifier-add",
            "id": "magnifier-add",
            "unicode": "e091",
            "created": 1
         },
         {
            "name": "Magnifier-remove",
            "id": "magnifier-remove",
            "unicode": "e092",
            "created": 1
         },
         {
            "name": "Paper-clip",
            "id": "paper-clip",
            "unicode": "e093",
            "created": 1
         },
         {
            "name": "Paper-plane",
            "id": "paper-plane",
            "unicode": "e094",
            "created": 1
         },
         {
            "name": "Power",
            "id": "power",
            "unicode": "e097",
            "created": 1
         },
         {
            "name": "Refresh",
            "id": "refresh",
            "unicode": "e098",
            "created": 1
         },
         {
            "name": "Reload",
            "id": "reload",
            "unicode": "e099",
            "created": 1
         },
         {
            "name": "Settings",
            "id": "settings",
            "unicode": "e09a",
            "created": 1
         },
         {
            "name": "Star",
            "id": "star",
            "unicode": "e09b",
            "created": 1
         },
         {
            "name": "Symbol-female",
            "id": "Symbol-female",
            "unicode": "e09c",
            "created": 1
         },
         {
            "name": "Symbol-male",
            "id": "symbol-male",
            "unicode": "e09d",
            "created": 1
         },
         {
            "name": "Target",
            "id": "target",
            "unicode": "e09e",
            "created": 1
         },
         {
            "name": "Credit-card",
            "id": "credit-card",
            "unicode": "e025",
            "created": 1
         },
         {
            "name": "Paypal",
            "id": "paypal",
            "unicode": "e608",
            "created": 1
         },
         {
            "name": "Social-tumblr",
            "id": "social-tumblr",
            "unicode": "e00a",
            "created": 1
         },
         {
            "name": "Social-twitter",
            "id": "social-twitter",
            "unicode": "e009",
            "created": 1
         },
         {
            "name": "Social-facebook",
            "id": "social-facebook",
            "unicode": "e00b",
            "created": 1
         },
         {
            "name": "Social-instagram",
            "id": "social-instagram",
            "unicode": "e609",
            "created": 1
         },
         {
            "name": "Social-linkedin",
            "id": "social-linkedin",
            "unicode": "e60a",
            "created": 1
         },
         {
            "name": "Social-pinterest",
            "id": "social-pinterest",
            "unicode": "e60b",
            "created": 1
         },
         {
            "name": "Social-github",
            "id": "social-github",
            "unicode": "e60c",
            "created": 1
         },
         {
            "name": "Social-gplus",
            "id": "social-gplus",
            "unicode": "e60d",
            "created": 1
         },
         {
            "name": "Social-reddit",
            "id": "social-reddit",
            "unicode": "e60e",
            "created": 1
         },
         {
            "name": "Social-skype",
            "id": "social-skype",
            "unicode": "e60f",
            "created": 1
         },
         {
            "name": "Social-dribbble",
            "id": "social-dribbble",
            "unicode": "e00d",
            "created": 1
         },
         {
            "name": "Social-behance",
            "id": "social-behance",
            "unicode": "e610",
            "created": 1
         },
         {
            "name": "Social-foursquare",
            "id": "social-foursquare",
            "unicode": "e611",
            "created": 1
         },
         {
            "name": "Social-soundcloud",
            "id": "social-soundcloud",
            "unicode": "e612",
            "created": 1
         },
         {
            "name": "Social-spotify",
            "id": "social-spotify",
            "unicode": "e613",
            "created": 1
         },
         {
            "name": "Social-stumbleupon",
            "id": "social-stumbleupon",
            "unicode": "e614",
            "created": 1
         },
         {
            "name": "Social-youtube",
            "id": "social-youtube",
            "unicode": "e008",
            "created": 1
         },
         {
            "name": "Social-dropbox",
            "id": "social-dropbox",
            "unicode": "e00c",
            "created": 1
         }
      ]
      callback(icons)
   }
}