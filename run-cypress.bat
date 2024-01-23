# run-complex.sh (for Unix-like systems)
# Contents of the shell script
echo "Running automation test cypress"
# run overwrite report
# npm run cypress:run

npx cypress run
npm run mochawesome:merge
# ...
