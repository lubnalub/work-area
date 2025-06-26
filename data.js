var APP_DATA = {
  "scenes": [
    {
      "id": "0-work-area",
      "name": "work area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.08001007830543116,
        "pitch": 0.012461795684803434,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.278809238617608,
          "pitch": -0.08558971736620968,
          "rotation": 1.5707963267948966,
          "target": "1-store-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-store-room",
      "name": "store room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.08195291880194233,
        "pitch": -0.052090112614845197,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "calicut workarea and storeroom",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
