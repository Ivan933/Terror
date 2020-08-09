TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "chromaThreshold": 0.24,
      "video": {
       "height": 480,
       "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4",
       "width": 854,
       "class": "VideoResource"
      },
      "autoplay": true,
      "id": "overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C",
      "loop": true,
      "rotationX": 6.05,
      "roll": -2.59,
      "chromaColor": "#28C034",
      "pitch": -8.36,
      "class": "VideoPanoramaOverlay",
      "yaw": 82.05,
      "rotationY": -11.11,
      "enabledInCardboard": true,
      "vfov": 26.38,
      "videoVisibleOnStop": false,
      "useHandCursor": true,
      "blending": 0.08,
      "data": {
       "label": "Video"
      },
      "hfov": 31.49,
      "image": {
       "levels": [
        {
         "height": 2,
         "width": 2,
         "url": "media/overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "chromaSmoothing": 0.1
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0",
      "hfov": 50.4,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DE7A8335_CA26_AA96_41C2_EAA5880F4283",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -71.26,
        "hfov": 6.95,
        "image": {
         "levels": [
          {
           "height": 150,
           "width": 150,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 42.14
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 134,
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
  "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_Castle Haunted"
    },
    "class": "PanoramaAudio",
    "id": "audio_DF46CC02_CA2F_9E6D_41E4_11C404230921",
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.mp3",
     "oggUrl": "media/audio_DF46CC02_CA2F_9E6D_41E4_11C404230921.ogg"
    },
    "autoplay": true
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "5.00_00_27_10.Imagen fija002",
  "class": "Panorama",
  "cardboardMenu": {
   "rollOverOpacity": 0.8,
   "selectedBackgroundColor": "#202020",
   "class": "Menu",
   "fontFamily": "Arial",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "opacity": 0.4,
   "rollOverFontColor": "#FFFFFF",
   "selectedFontColor": "#FFFFFF",
   "id": "Menu_DBB9EA21_D4A4_BAF0_41BC_A0A2C86C6FA5",
   "children": [
    {
     "label": "5.00_00_27_10.Imagen fija002",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "5.00_00_00_00.Imagen fija001",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    }
   ],
   "rollOverBackgroundColor": "#000000"
  },
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.63,
   "hfov": 129,
   "pitch": 9.95
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "chromaThreshold": 0.09,
      "video": {
       "height": 360,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "autoplay": true,
      "id": "overlay_C769E505_C9EA_BC1B_41C5_DFDFB9E1427F",
      "loop": false,
      "rotationX": 1.53,
      "roll": -4.03,
      "chromaColor": "#28C034",
      "pitch": -1.27,
      "class": "VideoPanoramaOverlay",
      "yaw": 57.98,
      "rotationY": -28.65,
      "enabledInCardboard": true,
      "vfov": 9.91,
      "videoVisibleOnStop": false,
      "useHandCursor": true,
      "blending": 0,
      "data": {
       "label": "Video"
      },
      "hfov": 13.43,
      "image": {
       "levels": [
        {
         "height": 360,
         "width": 640,
         "url": "media/overlay_C769E505_C9EA_BC1B_41C5_DFDFB9E1427F_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "chromaSmoothing": 0.46
     },
     {
      "chromaThreshold": 0.22,
      "video": {
       "height": 360,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "autoplay": false,
      "id": "overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC",
      "loop": false,
      "enabledInCardboard": true,
      "roll": 2.67,
      "chromaColor": "#28C034",
      "pitch": -7.57,
      "class": "VideoPanoramaOverlay",
      "yaw": -164.61,
      "rotationY": -4.93,
      "rotationX": 8.05,
      "vfov": 33.31,
      "videoVisibleOnStop": false,
      "useHandCursor": true,
      "blending": 0,
      "data": {
       "label": "Video"
      },
      "hfov": 18.88,
      "image": {
       "levels": [
        {
         "height": 360,
         "width": 640,
         "url": "media/overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "click": "this.overlay_DB9B7068_CA67_E6BE_41C8_1A09D8B026FC.play()",
      "chromaSmoothing": 0
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_D82F1856_CA29_A692_41DC_2EBC7F389C5E",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 69.26,
        "hfov": 6.9,
        "image": {
         "levels": [
          {
           "height": 120,
           "width": 120,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.09
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 133,
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
  "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_Dark Element 4"
    },
    "class": "PanoramaAudio",
    "id": "audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.mp3",
     "oggUrl": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.ogg"
    },
    "autoplay": true
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_DBB9EA21_D4A4_BAF0_41BC_A0A2C86C6FA5",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": 18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.13,
   "hfov": 129,
   "pitch": -15.45
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "chromaThreshold": 0.34,
      "video": {
       "height": 360,
       "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4",
       "width": 640,
       "class": "VideoResource"
      },
      "autoplay": true,
      "id": "overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F",
      "loop": true,
      "rotationX": 31.76,
      "roll": -14.8,
      "chromaColor": "#28C034",
      "pitch": -26.98,
      "class": "VideoPanoramaOverlay",
      "yaw": 10.52,
      "rotationY": -24.56,
      "enabledInCardboard": true,
      "vfov": 48.94,
      "videoVisibleOnStop": false,
      "useHandCursor": true,
      "blending": 0.07,
      "data": {
       "label": "Video"
      },
      "hfov": 23.08,
      "image": {
       "levels": [
        {
         "height": 2,
         "width": 2,
         "url": "media/overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "chromaSmoothing": 0.7
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_tcap0",
      "hfov": 50.4,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     },
     {
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_D87777FF_CA2B_E992_41DC_99E342FF745A",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "data": {
       "label": "Image"
      },
      "maps": [],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -22.03,
        "hfov": 6.21,
        "image": {
         "levels": [
          {
           "height": 100,
           "width": 100,
           "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 6.23
       }
      ]
     },
     {
      "chromaThreshold": 0.23,
      "video": {
       "height": 720,
       "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4",
       "width": 1280,
       "class": "VideoResource"
      },
      "autoplay": true,
      "id": "overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE",
      "loop": true,
      "rotationX": 5.23,
      "roll": 0.64,
      "chromaColor": "#28C034",
      "pitch": 5.18,
      "class": "VideoPanoramaOverlay",
      "yaw": -40.31,
      "rotationY": -5.12,
      "enabledInCardboard": true,
      "vfov": 14.55,
      "videoVisibleOnStop": false,
      "useHandCursor": true,
      "blending": 0,
      "data": {
       "label": "Video"
      },
      "hfov": 12.07,
      "image": {
       "levels": [
        {
         "height": 720,
         "width": 1280,
         "url": "media/overlay_D82771DC_CA2A_A996_41D2_045CE5C504DE_t.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "chromaSmoothing": 0.06
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
  "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_Heartbeat Slow"
    },
    "class": "PanoramaAudio",
    "id": "audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.mp3",
     "oggUrl": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.ogg"
    },
    "autoplay": true
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "5.00_00_00_00.Imagen fija001",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_DBB9EA21_D4A4_BAF0_41BC_A0A2C86C6FA5",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": -323,
     "yawSpeed": 7.96,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawDelta": -18.5,
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 133.98,
   "pitch": -8.85
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "camera": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera"
   }
  ]
 },
 {
  "class": "Video",
  "label": "4",
  "video": {
   "height": 680,
   "mp4Url": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82.mp4",
   "width": 1358,
   "class": "VideoResource"
  },
  "width": 3168,
  "id": "video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
  "loop": false,
  "height": 1584,
  "thumbnailUrl": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer",
  "id": "MainViewerVideoPlayer"
 },
 {
  "class": "PlayList",
  "id": "playList_DBA05A1C_D4A4_BAD1_41E0_D35033E40105",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DBA05A1C_D4A4_BAD1_41E0_D35033E40105, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DBA05A1C_D4A4_BAD1_41E0_D35033E40105, 0, this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "videoplayback",
  "video": {
   "height": 360,
   "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4",
   "width": 640,
   "class": "VideoResource"
  },
  "width": 640,
  "id": "video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DBA39A1D_D4A4_BAD0_41C0_7E9CFD833AEE",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DBA39A1D_D4A4_BAD0_41C0_7E9CFD833AEE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DBA39A1D_D4A4_BAD0_41C0_7E9CFD833AEE, 0, this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "videoplayback (1)",
  "video": {
   "height": 720,
   "mp4Url": "media/video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693",
  "loop": false,
  "height": 720,
  "thumbnailUrl": "media/video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DBA3DA1D_D4A4_BAD0_41DB_8EFF7E6DE469",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DBA3DA1D_D4A4_BAD0_41DB_8EFF7E6DE469, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DBA3DA1D_D4A4_BAD0_41DB_8EFF7E6DE469, 0, this.video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "Untitled Project",
  "video": {
   "height": 480,
   "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4",
   "width": 854,
   "class": "VideoResource"
  },
  "width": 854,
  "id": "video_C4225EF6_CA0B_C018_41B7_D6667882B313",
  "loop": false,
  "height": 480,
  "thumbnailUrl": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DBA32A1D_D4A4_BAD0_41D0_E8311A76A8C5",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C4225EF6_CA0B_C018_41B7_D6667882B313",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DBA32A1D_D4A4_BAD0_41D0_E8311A76A8C5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DBA32A1D_D4A4_BAD0_41D0_E8311A76A8C5, 0, this.video_C4225EF6_CA0B_C018_41B7_D6667882B313)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "videoplayback (3)",
  "video": {
   "height": 360,
   "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4",
   "width": 640,
   "class": "VideoResource"
  },
  "width": 640,
  "id": "video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DBA37A1D_D4A4_BAD0_41DB_CB8446A62906",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DBA37A1D_D4A4_BAD0_41DB_CB8446A62906, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DBA37A1D_D4A4_BAD0_41DB_CB8446A62906, 0, this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB)"
   }
  ]
 },
 {
  "class": "Video",
  "label": "1",
  "video": {
   "height": 720,
   "mp4Url": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E.mp4",
   "width": 1280,
   "class": "VideoResource"
  },
  "width": 1280,
  "id": "video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
  "loop": false,
  "height": 720,
  "thumbnailUrl": "media/video_D98E3897_CA2A_A792_41CB_D4AAA103F65E_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_DBA2AA1D_D4A4_BAD0_41E9_1546845AA0CB",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DBA2AA1D_D4A4_BAD0_41E9_1546845AA0CB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DBA2AA1D_D4A4_BAD0_41E9_1546845AA0CB, 0, this.video_D98E3897_CA2A_A792_41CB_D4AAA103F65E)"
   }
  ]
 },
 "this.Menu_DBB9EA21_D4A4_BAF0_41BC_A0A2C86C6FA5",
 "this.audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
 "this.audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
 "this.audio_DF46CC02_CA2F_9E6D_41E4_11C404230921"
], "children": [
 {
  "toolTipPaddingBottom": 4,
  "transitionDuration": 500,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "playbackBarBottom": 5,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarHeight": 10,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadWidth": 6,
  "transitionMode": "blending",
  "playbackBarRight": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderSize": 0,
  "toolTipDisplayTime": 600,
  "minWidth": 100,
  "toolTipBorderColor": "#767676",
  "toolTipFontColor": "#606060",
  "progressBarBorderRadius": 0,
  "toolTipBorderSize": 1,
  "toolTipShadowSpread": 0,
  "playbackBarBorderRadius": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderColor": "#000000",
  "borderSize": 0,
  "progressLeft": 0,
  "toolTipFontFamily": "Arial",
  "paddingRight": 0,
  "width": "100%",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderSize": 0,
  "playbackBarHeadBorderSize": 0,
  "paddingBottom": 0,
  "toolTipPaddingTop": 4,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressHeight": 10,
  "toolTipFontWeight": "normal",
  "progressBottom": 0,
  "shadow": false,
  "toolTipTextShadowOpacity": 0,
  "height": "100%",
  "toolTipBackgroundColor": "#F6F6F6",
  "progressRight": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontStyle": "normal",
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "id": "MainViewer",
  "playbackBarOpacity": 1,
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "propagateClick": false,
  "toolTipShadowVerticalLength": 0,
  "class": "ViewerArea",
  "toolTipFontSize": 12,
  "progressBarOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingLeft": 0,
  "playbackBarLeft": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowColor": "#333333"
 },
 {
  "toolTipPaddingBottom": 4,
  "toolTipShadowColor": "#333333",
  "toolTipPaddingRight": 6,
  "toolTipTextShadowColor": "#000000",
  "borderSize": 0,
  "horizontalAlign": "center",
  "mode": "toggle",
  "width": 55,
  "paddingRight": 0,
  "toolTipFontFamily": "Arial",
  "borderRadius": 0,
  "height": 40,
  "toolTipPaddingTop": 4,
  "backgroundOpacity": 0,
  "verticalAlign": "middle",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "maxHeight": 128,
  "maxWidth": 128,
  "paddingBottom": 0,
  "paddingTop": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "shadow": false,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowOpacity": 1,
  "transparencyActive": true,
  "top": "2.16%",
  "cursor": "hand",
  "toolTipFontStyle": "normal",
  "minHeight": 1,
  "toolTipBorderRadius": 3,
  "id": "IconButton_DB5DD7E9_CA2E_A9BE_41E9_55DF27F10B7D",
  "toolTipDisplayTime": 600,
  "data": {
   "name": "IconButton1493"
  },
  "toolTipPaddingLeft": 6,
  "toolTipFontSize": 12,
  "propagateClick": false,
  "toolTip": "Fullscreen",
  "class": "IconButton",
  "iconURL": "skin/IconButton_DB5DD7E9_CA2E_A9BE_41E9_55DF27F10B7D.png",
  "toolTipShadowBlurRadius": 3,
  "paddingLeft": 0,
  "minWidth": 1,
  "toolTipBorderColor": "#767676",
  "toolTipFontColor": "#606060",
  "toolTipShadowSpread": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipBorderSize": 1,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipOpacity": 1,
  "right": "0.78%"
 }
], 
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_DB5DD7E9_CA2E_A9BE_41E9_55DF27F10B7D",
 "width": "100%",
 "mouseWheelEnabled": true,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); }
 },
 "gap": 10,
 "creationPolicy": "delayed",
 "verticalAlign": "top",
 "shadow": false,
 "mobileMipmappingEnabled": false,
 "height": "100%",
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player536"
 },
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "class": "Player",
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 20,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "start": "this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_DB5DD7E9_CA2E_A9BE_41E9_55DF27F10B7D].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarOpacity": 0.5
})