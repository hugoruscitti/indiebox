N=\x1b[0m
V=\x1b[32;01m
VERSION=`git name-rev --name-only --tags HEAD | sed 's/\^.*//'`

all:
	@echo ""
	@echo " $(V)test_mac$(N)     Prueba la aplicacion usando nodewebkit en mac osx."
	@echo " $(V)test_linux$(N)   Prueba la aplicacion usando nodewebkit en linux."
	@echo ""

version:
	@echo $(VERSION)

test_mac:
	@echo "Cuidado - se está usando la version de nodewebkit del sistema."
	open -a /Applications/node-webkit.app src

test_linux: .dependencias
	nw src
