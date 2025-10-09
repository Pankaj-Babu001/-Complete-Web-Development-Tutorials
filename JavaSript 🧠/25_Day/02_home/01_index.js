                                     CALL STACK (top = current frame)

                                ----------------------------------------------------
                                | inner()        |  <-- current frame
                                | outer()        |
                                | main()         |
                                | global         |
                                ----------------------------------------------------


                                    MEMORY HEAP
                                ----------------------------------------------------
                                | Object: user = { name: 'Alice', id: 42 }  |
                                | Array: nums = [1,2,3]                     |
                                | Closure Env: { count: 3, ref -> inner }   |
                                ---------------------------------------------------

                                    Notes:
                                - Stack frames hold function contexts, local primitives, and return addresses.
                                    - Heap holds objects, arrays, and closure environments (persistent data).
                                - Closures store environment records on the heap so inner() can access variables after outer() returns.
