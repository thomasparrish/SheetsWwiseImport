SET projPath=C:\Users\Tommy\Documents\WwiseProjects\First2018\SheetsWwiseImport
node projPath\waapi\WwiseSFX.js > projPath\WwiseSFX.txt
node projPath\waapi\WwiseMUS.js > projPath\WwiseMUS.txt
node projPath\waapi\WwiseVO.js > projPath\WwiseVO.txt
git add --all
git commit -m "Added events from Wwise"
git pull
git push