<template>
  <!-- <input type="file" accept="image/*" capture="camera" /> -->
  <div id="container">
    <video id="gum-local" autoplay playsinline></video>
    <div id="errorMsg"></div>
  </div>
</template>

<script>
  'use strict';



  export default {
    name: 'nearby',

    mounted () {
      console.log('on ready.');
      var errorElement = this.$el.querySelector('#errorMsg');
      var video = this.$el.querySelector('video');

      // Put variables in global scope to make them available to the browser console.
      var constraints = window.constraints = {
        audio: false,
        video: true
      };

      function handleSuccess(stream) {
        var videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', constraints);
        console.log('Using video device: ' + videoTracks[0].label);
        stream.oninactive = function() {
          console.log('Stream inactive');
        };
        window.stream = stream; // make variable available to browser console
        video.srcObject = stream;
      }

      function handleError(error) {
        if (error.name === 'ConstraintNotSatisfiedError') {
          errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
            constraints.video.width.exact + ' px is not supported by your device.');
        } else if (error.name === 'PermissionDeniedError') {
          errorMsg('Permissions have not been granted to use your camera and ' +
            'microphone, you need to allow the page access to your devices in ' +
            'order for the demo to work.');
        }
        errorMsg('getUserMedia error: ' + error.name, error);
      }

      function errorMsg(msg, error) {
        errorElement.innerHTML += '<p>' + msg + '</p>';
        if (typeof error !== 'undefined') {
          console.error(error);
        }
      }

      navigator.mediaDevices.getUserMedia(constraints).
      then(handleSuccess).catch(handleError);

    }
  }
</script>

<style scoped>

</style>
