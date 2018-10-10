#!/bin/sh
RepositoryPath=/Users/thomas.parrish/Documents/WwiseProjects/WwiseSandbox/SheetsWwiseImport
echo $RepositoryPath > output.txt
node $RepositoryPath/waapi/WwiseSFX.js > $RepositoryPath/WwiseSFX.txt
node $RepositoryPath/waapi/WwiseMUS.js > $RepositoryPath/WwiseMUS.txt
node $RepositoryPath/waapi/WwiseVO.js > $RepositoryPath/WwiseVO.txt
git -C $RepositoryPath/ add --all
git -C $RepositoryPath/ commit -m "Added events from Wwise"
git -C $RepositoryPath/ pull
git -C $RepositoryPath/ push
exit