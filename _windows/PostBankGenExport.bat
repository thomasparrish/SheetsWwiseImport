::Path of 'SheetsWwiseImport' repository clone. Recommended to place in Wwise project root folder.
SET SheetExportDir=C:\Users\thomas.parrish\Documents\WwiseProjects\WwiseTest\SheetsWwiseImport

::Reroute output from Node.js scripts into the corresponding text files.
node %SheetExportDir%\waapi\WwiseSFX.js > %SheetExportDir%\WwiseSFX.txt
node %SheetExportDir%\waapi\WwiseMUS.js > %SheetExportDir%\WwiseMUS.txt
node %SheetExportDir%\waapi\WwiseVO.js > %SheetExportDir%\WwiseVO.txt

::Commit all changes, then upload to GitHub repository.
git -C %SheetExportDir%\ add --all
git -C %SheetExportDir%\ commit -m "Added events from Wwise"
git -C %SheetExportDir%\ pull
git -C %SheetExportDir%\ push