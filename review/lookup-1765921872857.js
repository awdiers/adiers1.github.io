(function(window, undefined) {
  var dictionary = {
    "3dc72bd5-4867-4f6d-b218-4248f07b605d": "Screen 3",
    "40fd1554-9947-40e8-b255-a95ff2c7bbe9": "Screen 6",
    "0934d045-80da-448a-adbb-e0ed1ba57c4f": "Screen 2",
    "2b8b9b1c-305b-4068-972b-e8790bf668a4": "Screen 5",
    "871b6639-7ded-4adb-ac20-1850d0291899": "Screen 7",
    "3880c9a2-c42e-4ef9-bb58-8b8f087f0495": "Screen 4",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);