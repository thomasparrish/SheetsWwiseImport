SET projPath=C:\Users\Tommy\Documents\WwiseProjects\First2018\SheetsWwiseImport
node %projPath%\waapi\WwiseSFX.js > %projPath%\WwiseSFX.txt
node %projPath%\waapi\WwiseMUS.js > %projPath%\WwiseMUS.txt
node %projPath%\waapi\WwiseVO.js > %projPath%\WwiseVO.txt
git add --all %projPath%\
git commit %projPath%\ -m "Added events from Wwise"
git pull %projPath%\
git push %projPath%\
pause