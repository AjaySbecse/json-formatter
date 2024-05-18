const container = document.getElementById('outputJson');
const options = { mode: 'view' };
const editor = new JSONEditor(container, options);

function validateJson() {
    const inputJson = document.getElementById("inputJson").value;
    try {
        const jsonObj = JSON.parse(inputJson);
        editor.set(jsonObj);
    } catch (e) {
        editor.setText('Invalid JSON: ' + e.message);
    }
  }

  function clearJson() {
    document.getElementById("inputJson").value = "";
    editor.set({});
  }

  function sampleJson() {
    const data = {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.55,
        "batters":
            {
                "batter":
                    [
                        { "id": "1001", "type": "Regular" },
                        { "id": "1002", "type": "Chocolate" },
                        { "id": "1003", "type": "Blueberry" },
                        { "id": "1004", "type": "Devil's Food" }
                    ]
            },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    };
    document.getElementById("inputJson").value = JSON.stringify(
      data,
      null,
      6
    );
  }