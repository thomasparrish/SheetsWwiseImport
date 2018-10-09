cd $(WwiseProjectPath)\SheetsWwiseImport\
node ..\waapi\WwiseSFX.js > ..\WwiseSFX.txt
node ..\waapi\WwiseMUS.js > ..\WwiseMUS.txt
node ..\waapi\WwiseVO.js > ..\WwiseVO.txt
git add --all
git commit -m "Added events from Wwise"
git pull
git push