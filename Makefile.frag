
testv8: all
	$(PHP_EXECUTABLE) -n -d extension_dir=./modules -d extension=v8js.so test.php

debugv8: all
	gdb --arg $(PHP_EXECUTABLE) -n -d extension_dir=./modules -d extension=v8js.so test.php

valgrindv8: all
	USE_ZEND_ALLOC=0 valgrind --leak-check=full --show-reachable=yes --track-origins=yes $(PHP_EXECUTABLE) -n -d extension_dir=./modules -d extension=v8js.so test.php 2> valgrind.dump


