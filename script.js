TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
    "overlays": [
     {
      "videoVisibleOnStop": false,
      "blending": 0.08,
      "video": {
       "height": 480,
       "class": "VideoResource",
       "width": 854,
       "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C",
      "loop": true,
      "rotationX": 6.05,
      "chromaSmoothing": 0.1,
      "rotationY": -11.11,
      "pitch": -8.36,
      "chromaThreshold": 0.24,
      "image": {
       "levels": [
        {
         "height": 2,
         "class": "ImageResourceLevel",
         "width": 2,
         "url": "media/overlay_C5ACBA36_CA04_401B_41D0_CC3DFF353F5C_t.png"
        }
       ],
       "class": "ImageResource"
      },
      "roll": -2.59,
      "vfov": 26.38,
      "yaw": 82.05,
      "autoplay": true,
      "chromaColor": "#28C034",
      "data": {
       "label": "Video"
      },
      "hfov": 31.49,
      "useHandCursor": true,
      "enabledInCardboard": true
     },
     {
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_C50AAF12_CA27_9A6D_41C8_A059080A8470",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [],
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 138,
           "class": "ImageResourceLevel",
           "width": 155,
           "url": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -68.62,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 7.28,
        "pitch": 41.41
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 134,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_t.jpg",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
  "audios": [
   {
    "data": {
     "label": "ES_Castle Haunted"
    },
    "class": "PanoramaAudio",
    "id": "audio_C58B4939_CA69_669E_41CA_BAD9E3DB0763",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "id": "audioresource_C5F7097B_CA69_A692_41E7_356926C2CA58",
     "mp3Url": "media/audio_C58B4939_CA69_669E_41CA_BAD9E3DB0763.mp3",
     "oggUrl": "media/audio_C58B4939_CA69_669E_41CA_BAD9E3DB0763.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "5.00_00_27_10.Imagen fija002",
  "cardboardMenu": {
   "fontFamily": "Arial",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "rollOverBackgroundColor": "#000000",
   "class": "Menu",
   "id": "Menu_C5CDEE5C_CA6A_BA96_41E3_0F841250E9CB",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "children": [
    {
     "class": "MenuItem",
     "label": "5.00_00_27_10.Imagen fija002",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "5.00_00_00_00.Imagen fija001",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    }
   ],
   "selectedFontColor": "#FFFFFF"
  },
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
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
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
    "overlays": [
     {
      "videoVisibleOnStop": false,
      "blending": 0,
      "video": {
       "height": 360,
       "class": "VideoResource",
       "width": 640,
       "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_C769E505_C9EA_BC1B_41C5_DFDFB9E1427F",
      "loop": false,
      "rotationX": 1.53,
      "chromaSmoothing": 0.46,
      "rotationY": -28.65,
      "pitch": -1.27,
      "chromaThreshold": 0.09,
      "image": {
       "levels": [
        {
         "height": 360,
         "class": "ImageResourceLevel",
         "width": 640,
         "url": "media/overlay_C769E505_C9EA_BC1B_41C5_DFDFB9E1427F_t.png"
        }
       ],
       "class": "ImageResource"
      },
      "roll": -4.03,
      "vfov": 9.91,
      "yaw": 57.98,
      "autoplay": true,
      "chromaColor": "#28C034",
      "data": {
       "label": "Video"
      },
      "hfov": 13.43,
      "useHandCursor": true,
      "enabledInCardboard": true
     },
     {
      "data": {
       "label": "Image"
      },
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_DA0EC349_CA3E_EAFE_41BB_E8F1A6E3EE75",
      "areas": [
       {
        "mapColor": "image",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "maps": [],
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 151,
           "class": "ImageResourceLevel",
           "width": 149,
           "url": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_0_HS_1_0.png"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 76.02,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 8.41,
        "pitch": -25.93
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 133,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_t.jpg",
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
  "audios": [
   {
    "data": {
     "label": "ES_Dark Element 4"
    },
    "class": "PanoramaAudio",
    "id": "audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.mp3",
     "oggUrl": "media/audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_C0895001_0895_360_190926080439_360_equi_equi",
  "cardboardMenu": "this.Menu_C5CDEE5C_CA6A_BA96_41E3_0F841250E9CB",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
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
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43.jpeg"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
    "overlays": [
     {
      "videoVisibleOnStop": false,
      "blending": 0.07,
      "video": {
       "height": 360,
       "class": "VideoResource",
       "width": 640,
       "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4"
      },
      "class": "VideoPanoramaOverlay",
      "id": "overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F",
      "loop": true,
      "rotationX": 31.76,
      "chromaSmoothing": 0.78,
      "rotationY": -24.56,
      "pitch": -26.98,
      "chromaThreshold": 0.31,
      "image": {
       "levels": [
        {
         "height": 2,
         "class": "ImageResourceLevel",
         "width": 2,
         "url": "media/overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F_t.png"
        }
       ],
       "class": "ImageResource"
      },
      "roll": -14.8,
      "vfov": 48.94,
      "yaw": 10.52,
      "autoplay": true,
      "chromaColor": "#28C034",
      "enabledInCardboard": true,
      "data": {
       "label": "Video"
      },
      "hfov": 23.08,
      "useHandCursor": true,
      "mouseLeave": "this.overlay_C1DF9AA0_CA27_BBAE_41E8_5775E3BF675F.stop()"
     }
    ]
   }
  ],
  "hfovMax": 130,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_t.jpg",
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
  "audios": [
   {
    "data": {
     "label": "ES_Heartbeat Slow"
    },
    "class": "PanoramaAudio",
    "id": "audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.mp3",
     "oggUrl": "media/audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "5.00_00_00_00.Imagen fija001",
  "cardboardMenu": "this.Menu_C5CDEE5C_CA6A_BA96_41E3_0F841250E9CB",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": -18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": -323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": -18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "automaticZoomSpeed": 10,
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
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C1B046BF_CA04_4008_41E0_8CE040877BBD_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C5B97B45_C9A9_D41B_41E8_262C96682E8A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "media": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43",
    "end": "this.trigger('tourEnded')",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C03336BB_CA04_4008_41D4_63E87BC9AA43_camera"
   }
  ]
 },
 {
  "label": "4",
  "video": {
   "height": 680,
   "class": "VideoResource",
   "width": 1358,
   "mp4Url": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82.mp4"
  },
  "class": "Video",
  "width": 3168,
  "id": "video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
  "loop": false,
  "height": 1584,
  "thumbnailUrl": "media/video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "displayPlaybackBar": true,
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "id": "MainViewerVideoPlayer"
 },
 {
  "class": "PlayList",
  "id": "playList_D83F2E25_CA6A_BAB6_41D4_C763FC9AE670",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D83F2E25_CA6A_BAB6_41D4_C763FC9AE670, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D83F2E25_CA6A_BAB6_41D4_C763FC9AE670, 0, this.video_C44B7538_C9D9_BC69_41AC_6006A7A2EA82)"
   }
  ]
 },
 {
  "label": "videoplayback",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "width": 640,
   "mp4Url": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E.mp4"
  },
  "class": "Video",
  "width": 640,
  "id": "video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_D830EE26_CA6A_BAB2_41D6_36B845842011",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D830EE26_CA6A_BAB2_41D6_36B845842011, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D830EE26_CA6A_BAB2_41D6_36B845842011, 0, this.video_C7E44AB7_C9E9_5467_41BA_69EEDF5E262E)"
   }
  ]
 },
 {
  "label": "videoplayback (1)",
  "video": {
   "height": 720,
   "class": "VideoResource",
   "width": 1280,
   "mp4Url": "media/video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693.mp4"
  },
  "class": "Video",
  "width": 1280,
  "id": "video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693",
  "loop": false,
  "height": 720,
  "thumbnailUrl": "media/video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_D830DE26_CA6A_BAB2_41E8_909A0B95B3E2",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D830DE26_CA6A_BAB2_41E8_909A0B95B3E2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D830DE26_CA6A_BAB2_41E8_909A0B95B3E2, 0, this.video_C6581CBB_C9F7_4C6F_41E1_F63770BAF693)"
   }
  ]
 },
 {
  "label": "Untitled Project",
  "video": {
   "height": 480,
   "class": "VideoResource",
   "width": 854,
   "mp4Url": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313.mp4"
  },
  "class": "Video",
  "width": 854,
  "id": "video_C4225EF6_CA0B_C018_41B7_D6667882B313",
  "loop": false,
  "height": 480,
  "thumbnailUrl": "media/video_C4225EF6_CA0B_C018_41B7_D6667882B313_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_D8309E26_CA6A_BAB2_41BF_87C67C2D8038",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C4225EF6_CA0B_C018_41B7_D6667882B313",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D8309E26_CA6A_BAB2_41BF_87C67C2D8038, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D8309E26_CA6A_BAB2_41BF_87C67C2D8038, 0, this.video_C4225EF6_CA0B_C018_41B7_D6667882B313)"
   }
  ]
 },
 {
  "label": "videoplayback (3)",
  "video": {
   "height": 360,
   "class": "VideoResource",
   "width": 640,
   "mp4Url": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB.mp4"
  },
  "class": "Video",
  "width": 640,
  "id": "video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
  "loop": false,
  "height": 360,
  "thumbnailUrl": "media/video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB_t.jpg",
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_C5C90E59_CA6A_BA9E_41BC_52CC4470AE04",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C5C90E59_CA6A_BA9E_41BC_52CC4470AE04, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C5C90E59_CA6A_BA9E_41BC_52CC4470AE04, 0, this.video_C6C35398_CA27_E99D_41E4_BB9D2FE58CEB)"
   }
  ]
 },
 "this.Menu_C5CDEE5C_CA6A_BA96_41E3_0F841250E9CB",
 "this.audio_C58B4939_CA69_669E_41CA_BAD9E3DB0763",
 "this.audio_C5BB7C8E_CA69_BE72_41DA_B933525DC8B9",
 "this.audio_DA2B70AE_CA6F_67B2_41BD_CE95495C108F"
], "children": [
 {
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowColor": "#333333",
  "progressBarBorderColor": "#000000",
  "playbackBarBottom": 5,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "paddingTop": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionMode": "blending",
  "minHeight": 50,
  "class": "ViewerArea",
  "playbackBarHeadWidth": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "toolTipShadowOpacity": 1,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "toolTipFontColor": "#606060",
  "toolTipBorderColor": "#767676",
  "paddingRight": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderSize": 1,
  "playbackBarProgressOpacity": 1,
  "paddingBottom": 0,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "toolTipPaddingRight": 6,
  "shadow": false,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "progressBottom": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0,
  "progressOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "height": "100%",
  "paddingLeft": 0,
  "toolTipFontWeight": "normal",
  "progressBarOpacity": 1,
  "toolTipFontSize": 12,
  "toolTipFontStyle": "normal",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarLeft": 0,
  "propagateClick": false,
  "toolTipShadowVerticalLength": 0
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "width": "100%",
 "borderSize": 0,
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "scripts": {
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "borderRadius": 0,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "class": "Player",
 "id": "rootPlayer",
 "data": {
  "name": "Player536"
 },
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "mobileMipmappingEnabled": false
})