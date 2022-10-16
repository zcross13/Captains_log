|   #	|   Action	|   URL	|  HTTP Verb. 	|   JSX view filename	|   mongoose method	|
|---	|---	    |---	|---	        |---	                |---	            |
|   1	|  Index 	|  / 	|  get 	        |   Index.jsx	            |   Log.find()	            |
|   2	|  New 	    |  /new |  get 	        |   New.jsx	                |   none	            |
|   3	|  Delete 	|  /:id |  delete       |   none	                |   Log.findByIdAndDelete()	            |
|   4	|  Update 	|  /:id	|  put 	        |   none	                |   Log.findByIdAndUpdate()	            |
|   5	|  Create 	|  /	|  post         |   none	                |  Log.create(req.body) 	            |
|   6	|  Edit 	|/:id/edit|get   	    |   Edit.jsx                |   Log.findById()	            |
|   7	|  Show 	|  /:id	|  get  	    |   Show.jsx                |    Log.findById()		            |  