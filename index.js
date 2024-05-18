function validateJson() {
    const inputJson = document.getElementById("inputJson").value;
    const outputJson = document.getElementById("outputJson");
    try {
        if(inputJson.trim().length == 0){
            return
        }
        const jsonObj = JSON.parse(inputJson);
        outputJson.value = JSON.stringify(jsonObj, null, 4);
    } catch (e) {
        outputJson.value = "Invalid JSON: " + e.message;
    }
  }

  function clearJson() {
    document.getElementById("inputJson").value = "";
    document.getElementById("outputJson").value = "";
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