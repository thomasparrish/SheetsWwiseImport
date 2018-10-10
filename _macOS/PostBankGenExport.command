#!/bin/sh
here="`dirname \"$0"`"
node here\waapi\WwiseSFX.js > here\WwiseSFX.txt
node here\waapi\WwiseMUS.js > here\WwiseMUS.txt
node here\waapi\WwiseVO.js > here\WwiseVO.txt
git -C here\ add --all
git -C here\ commit -m "Added events from Wwise"
git -C here\ pull
git -C here\ push
pause