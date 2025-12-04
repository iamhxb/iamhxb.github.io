var inputData = {
	
	/*Linear system*/
	'nc.ls.cmd.gaussSolve': [
		'nc.ls.common'
	],
	
	'nc.ls.cmd.gaussSolveColPivot': [
		'nc.ls.common'
	],
	
	'nc.ls.cmd.doolittleSolve': [
		'nc.ls.common'
	],
	
	'nc.ls.cmd.croutSolve': [
		'nc.ls.common'
	],

	'nc.ls.cmd.choleskySolve': [
		'nc.ls.common'
	],
	
	'nc.ls.cmd.chasingMethodSolve': [
		'nc.ls.common'
	],

	'nc.ls.cmd.jacobiSolve': [
		'nc.ls.iteration'
	],	
	
	
	'nc.ls.cmd.seidelSolve': [
		'nc.ls.iteration'
	],	
	

	'nc.ls.common': [
		{
			base: 'nc.base.matrix',
			title: ['系数矩阵 A','Coefficient Matrix A'],
			extras: {placeholder: '6,1,0;1,4,1;0,1,14'},
			description: ['线性方程组的系数矩阵.<br>用换行或";"分割行; 用","或空格分隔行中元素.<br>如 6,1,0;1,4,1;0,1,14',
			              'Coefficient matrix of linear equations, <br>rows are seperated by newline or ";", elements are seperated by space or ",". <br> e.g. 6,1,0;1,4,1;0,1,14 ']
		},
		
		{
			base: 'nc.base.vector',
			description: ['线性方程组的常数向量. 用","或空格分隔元素, 如1,2,3',
			              'Vector of linear equations, <br>Elements are seperated by space or ",". <br> e.g. 1,2,3']
		},
		
		'nc.options.numOfDecimal-select'
	],
	
	
	'nc.ls.iteration': [
		
		'nc.ls.common',
		
		'nc.base.vector.x0',
		
		'nc.base.iteration',

		'nc.options.epsilon'
	],


	'nc.ls.cmd.sorSolve': [
		'nc.ls.iteration',
		
		{
			id: 'omega',
			name: 'omega',
			title: ['&omega;', '&omega;'],
			ctrltype: 'text',
			datatype: 'float',
			description: ['小数,位于(0,2)', 'Decimal, in (0,2)'],			
			extras:{ placeholder: '1.25', onblur: 'nc.ui.checkData(this)', class:'input-text mui-input-clear'}	
		}
	],	
	




	
	
	/* matrix*/
	'nc.matrix.cmd.doolittle': [
		'nc.matrix.decomposition'
	],
	
	
	'nc.matrix.cmd.crout': [
		'nc.matrix.decomposition'
	],


	'nc.matrix.cmd.cholesky': [
		'nc.matrix.decomposition'
	],

	'nc.matrix.cmd.chasingMethodDecomposition': [
		'nc.matrix.decomposition'
	],	
	
	'nc.matrix.cmd.powerMethod': [
		'nc.matrix.eigenvalue'
	],


	'nc.matrix.cmd.invPowerMethod': [
		'nc.matrix.eigenvalue'
	],	
	

	'nc.matrix.cmd.transferPowerMethod': [
		'nc.matrix.eigenvalue',
		
		{
			base: 'nc.base.float',
			id: 'lamda0',
			name: 'lamda0',
			paramname: 'lamda0',
			title: '&lambda;<sub>0</sub>',
			description: ['特征值的近似值,如 2.56', 'Approximate values of the eigenvalues, e.g. 2.56']
		}
	],
	
	
	'nc.matrix.cmd.clasicalJacobi': [
		'nc.matrix.decomposition',
		
		'nc.base.iteration',
		
		'nc.options.epsilon'
	],	
	

	'nc.matrix.cmd.qr': [
		'nc.matrix.decomposition',
		
		'nc.base.iteration',
		
		'nc.options.epsilon'
	],
	
	
	'nc.matrix.decomposition': [
		{
			base: 'nc.base.matrix',
			extras: {placeholder: '6,1,0;1,4,1;0,1,14'}
		},
		
		'nc.options.numOfDecimal-select'
	],
	

	'nc.matrix.eigenvalue': [
	
		'nc.matrix.decomposition',
		
		'nc.base.vector.x0',
		
		'nc.base.iteration',
		
		'nc.options.epsilon'
	],	
	


	


	
	/*solution of nonlinear system*/
	'nc.sns.cmd.bisectionMethod': [	
		{
			base: 'nc.base.fn',
			description: ['解方程f(x)=0,输入f(x)的函数表达式,如 x^3-x-1',
			             'The expression of f(x) in equation f(x) = 0, e.g. x^3-x-1'],
		},
		
		'nc.base.interval',		

		'nc.base.iteration',
		
		'nc.options.numOfDecimal-select',
		
		'nc.options.epsilon'
	],
	

	'nc.sns.cmd.iterationMethod': [	
		{
			base: 'nc.base.fn',
			id: 'phi',
			name: 'phi',
			title: ['迭代函数&phi;(x)', 'Iteration Function &phi;(x)'],
			description: ['解方程x=&phi;(x),输入&phi;(x)的函数表达式,如 E^(-x)',
			              'The expression of function &phi;(x) in equation x=&phi;(x), e.g. E^(-x)'],
			extras: {placeholder: 'e^(-x)'}
		},	
		
		'nc.base.float.x0',

		'nc.base.iteration',
		
		'nc.options.numOfDecimal-select',
		
		'nc.options.epsilon'
	],	
	
	
	'nc.sns.cmd.newtonMethod': [
		{
			base: 'nc.base.fn',
			title: 'f(x)',
			description: ['解方程f(x)=0,输入f(x)的函数表达式,如 x^3-3*x-1',
			              'The expression of f(x) in equation f(x)=0, e.g. x^3-3*x-1'],
			extras: {placeholder: 'x^3-3*x-1'}
		},	

		{
			base: 'nc.base.fn',
			id: 'dfn',
			name: 'dfn',
			title: "f'(x)",
			description: ['f(x)的一阶导数,如 3*x^2-3',
			              'The first order derivative of f(x), e.g. 3*x^2-3'],
			extras: {placeholder: '3*x^2-3'}
		},
		
		{
			base: 'nc.base.float.x0',
			extras: {placeholder: '2'}
		},

		'nc.base.iteration',
		
		'nc.options.numOfDecimal-select',
		
		'nc.options.epsilon'
	],
	
	
	'nc.sns.cmd.secandMethod': [
		{
			base: 'nc.base.fn',
			description: ['解方程f(x)=0,输入f(x)的函数表达式,如 x^3-3*x-1',
			              'The expression of f(x) in equation f(x)=0, e.g. x^3-3*x-1'],
			extras: {placeholder:'x^3-3*x-1'}
		},	

		{
			base: 'nc.base.float',
			id: 'a',
			name: 'a',
			paramname: 'a',
			title: 'x<sub>0</sub>',
			description: 'x<sub>0</sub>',
			extras:{placeholder: '2.0'}
		},	

		{
			base: 'nc.base.float',
			id: 'b',
			name: 'b',
			paramname: 'b',
			title: 'x<sub>1</sub>',
			description: 'x<sub>1</sub>',
			extras:{placeholder: '1.9'}
		},	

		'nc.base.iteration',
		
		'nc.options.numOfDecimal-select',
		
		'nc.options.epsilon'
	],
	/*end f solution of nonlinear system*/


	
	
	/*interploation*/
	'nc.interpolation.cmd.lagrange': [

		'nc.base.xi',
		
		'nc.base.yi',

		{
			base: 'nc.base.vector',
			id: 'xpoint',
			name: 'xpoint',
			title: ['求值点', 'Evaluation Point'],
			description: ['求值点, 如 0.22, 0.36', 'Evaluation point, e.g. 0.22, 0.36'],
			extras:{placeholder: '0.22, 0.36'}
		},	

		'nc.options.numOfDecimal-select'		
	],
	
	
	'nc.interpolation.cmd.newton': [
		'nc.interpolation.cmd.lagrange',
		
		{
			id: 'solveType',
			name: 'solveType',
			title: ['求解方式', 'Solving Type'],
			ctrltype: 'select',
			datatype: 'integer',
			options: [{'value': '0', 'text': '迭代求解'},{'value': '1', 'text': '直接求解'}],
			extras:{class: 'input-text mui-numbox-input option'}
		}		
	],
	
   //x0, y0, dy0, x1, y1, dy1
	'nc.interpolation.cmd.hermite3': [	
		{
			base: 'nc.base.xi',
			extras: {placeholder: '0.1,0.3'}
		},
		
		{
			base: 'nc.base.yi',
			extras: {placeholder: '0.01,0.09'}
		},	
		
		{
			base: 'nc.base.xi',
			id: 'dyi',
			name: 'dyi',
			title: ["一阶导数值 y<sub>i</sub>'", "First Order Derivative y<sub>i</sub>'" ],
			description: ["函数f(x)一阶导数值 y<sub>i</sub>', 如 0.2,0.6",
			              "First order derivative of function f(x) at y<sub>i</sub>', e.g. 0.2,0.6"],
			extras: {placeholder: '0.2,0.6'}
		},
		
		{
			base: 'nc.base.float',
			id: 'x',
			name: 'x',
			title: ['求值点x', 'Evaluation Point x'],
			description: ['求值点x,如 0.15', 'Evaluation point x, e.g. 0.15'],
			extras: {placeholder: '0.15'}
		},			
		
		'nc.options.numOfDecimal-select'		
	],	


   //x0, y0, dy0, x1, y1, dy1
	'nc.interpolation.cmd.hermite': [
		'nc.interpolation.cmd.hermite3'
	],
	
	
	'nc.interpolation.cmd.cubicSpline': [
		'nc.base.xi',
		
		'nc.base.yi',		
		
		{
			id: 'edgeType',
			name: 'edgeType',
			title: ['边界条件', 'Boundary Condition'],
			ctrltype: 'select',
			datatype: 'integer',
			options: [{'value': 1, 'text': '第一边界条件'},{'value': 2, 'text': '第二边界条件'},{'value': 3, 'text': '第三边界条件'}],
			extras:{class:'input-text mui-numbox-input'}
		},
		
		{
			base: 'nc.base.float',
			id: 'edgeValue1',
			name: 'edgeValue1',
			title: ['左边界值', 'Left Boundary Value'],
			description: ['左边界值,如 0.26', 'Left boundary value, e.g 0.26'],
			extras: {placeholder:'0.26'}
		},	

		{
			base: 'nc.base.float',
			id: 'edgeValue2',
			name: 'edgeValue2',
			title: ['右边界值', 'Right Boundary Value'],
			description: ['右边界值,如 0.66', 'Right boundary value, e.g. 0.66'],
			extras: {placeholder:'0.66'}
		},			
		
		'nc.options.numOfDecimal-select'		
	],
	/*end of interploation*/


	
	
	
	
	
   /*data fit*/
	'nc.fit.cmd.dataFit': [
	    'nc.base.xi',
		'nc.base.yi',
		
		{
			base: 'nc.base.vector',
			id: 'baseFun',
			name: 'baseFun',
			paramname: 'baseFun',
			title: ['基函数', 'Base Function'],
			datatype: 'charvector',
			description: ['数据拟合的基函数, 如 &phi;<sub>0</sub>(x),&phi;<sub>1</sub>(x),...,&phi;<sub>m</sub>(x)',
			              'Base function of data fit, e.g. &phi;<sub>0</sub>(x),&phi;<sub>1</sub>(x),...,&phi;<sub>m</sub>(x)'],
			extras: {placeholder: '1,x,x^2'}			
		},
		
		'nc.options.numOfDecimal-select'
	],
	
	
	'nc.fit.cmd.dataFitCurve': [
		{
			base: 'nc.base.xi',
			extras: {placeholder: '1.00, 1.25, 1.5, 1.75, 2.0'}		
		},
	   
	    {
		    base: 'nc.base.yi',
			extras: {placeholder: '5.1, 5.79, 6.53, 7.45, 8.46'}			   
	    },
		
		{
			id: 'curveId',
			name: 'curveId',
			title: ['拟合曲线', 'Fit Curve'],
			ctrltype: 'select',
			datatype: 'string',
			options: [{value:'0', text: '请选择曲线'},{value:'c1', text: '曲线 a*x^b'},{value:'c2', text: '曲线 a*x^b + c'},{value:'c3', text: '曲线 a*e^(b*x)', selected: true},
			        {value:'c4', text: '曲线 a + b * ln(x)'},{value:'c5', text: '曲线 x / (ax + b)'},{value:'c6', text: '曲线 e^(a+b*x)/(e^(a+b*x) + 1)'}],
			extras:{class:'input-text mui-numbox-input'}			
			
		},
		
		'nc.options.numOfDecimal-select'
	], 
	/*end of data fit*/


	
	/*integration*/
   'nc.integration.cmd.trap' : [
	   {
		   base: 'nc.base.fn',
		   title: ['被积函数f(x)', 'Integrable Function f(x)'],
		   description: ['被积函数f(x)的表达式, 如 x^2+1', 'Integrable function f(x), e.g. x^2+1'],
		   extras: {placeholder: 'x^2+1'}
	   },
	   
	   {
		   base: 'nc.base.float',
		   id: 'a',
		   name: 'a',
		   title: ['积分下限', 'Integral Lower Limit'],
		   description: ['积分下限, 如 0.0', 'Integral lower limit, e.g. 0.0'],
		   extras: {placeholder: '0.0'}
	   },	   
	   
	   {
		   base: 'nc.base.float',
		   id: 'b',
		   name: 'b',
		   title: ['积分上限', 'Integral Upper Limit'],
		   description: ['积分上限, 如 1.0', 'Integral upper limit, e.g. 1.0'],
		   extras: {placeholder: '1.0'}		   
	   },
	   
	   'nc.options.numOfDecimal-select'
	],
	
	
   'nc.integration.cmd.simpson' : [
		'nc.integration.cmd.trap'
	],	
	
	
   'nc.integration.cmd.cotes' : [
		'nc.integration.cmd.trap'
	],	


   'nc.integration.cmd.compositeTrap' : [
		'nc.integration.cmd.trap',
		
		{
		   base: 'nc.base.integer',
		   id: 'n',
		   name: 'n',
		   title: ['区间划分次数', 'Interval Division Times'],
		   description: ['区间划分次数, 正整数, 如 8', 'Interval division times, positive integer, e.g. 8'],
		   extras: {placeholder: '2'}		   
	   }		
	],	



   'nc.integration.cmd.compositeSimpson' : [
		'nc.integration.cmd.compositeTrap'
	],



   'nc.integration.cmd.recursionTrap' : [
   
		'nc.integration.cmd.trap',
	
		{
		   base: 'nc.base.integer',
		   id: 'n',
		   name: 'n',
		   title: ['递推次数', 'Recurrence Times'],
		   description: ['递推次数, 正整数, 如 4', 'Recurrence times, positive integer, e.g. 4'],
		   extras: {placeholder: '4'}		   
	   },

		'nc.options.epsilon'		
	],	


   'nc.integration.cmd.romberg' : [
		'nc.integration.cmd.trap'
	],		
	/*end of integration*/


	
	
	
	/*begin of solutin of ODE*/
	'nc.nsode.cmd.eulerMethod': [
	   {
		   base: 'nc.base.fn',
		   id: 'fxy',
		   name: 'fxy',
		   title: ['函数f(x,y)', 'Function f(x,y)'],
		   description: ["微分方程 y' = f(x,y)中函数f(x,y)表达式, 如 y - x/y",
		                 "Function f(x,y) in ODE y' = f(x,y), e.g. y - x/y"],
		   extras: {placeholder: 'y - x/y'}
	   },

	   {
		   base: 'nc.base.float',
		   id: 'x0',
		   name: 'x0',
		   title: ['初始值 x<sub>0</sub>', 'Initial Value x<sub>0</sub>'],
		   description: ['初始值x<sub>0</sub>, 如 0.0', 'Initial value x<sub>0</sub>, 如 0.0'],
		   extras: {placeholder: '0.0'}
	   },	   
	   
	   {
		   base: 'nc.base.float',
		   id: 'y0',
		   name: 'y0',
		   title: ['初始值 y<sub>0</sub>', 'Initial Value y<sub>0</sub>'],
		   description: ['初始值 y<sub>0</sub>, 如 1.0', 'Initial value y<sub>0</sub>, e.g. 1.0'],
		   extras: {placeholder: '1.0'}
	   },
	   
	   {
		   base: 'nc.base.float',
		   id: 'h',
		   name: 'h',
		   title: ['步长h', 'Step h'],
		   description: ['步长h, 如 0.1', 'Length of step, e.g. 0.1'],
		   extras: {placeholder: '0.1'}
	   },

	   {
		   base: 'nc.base.integer',
		   id: 'n',
		   name: 'n',
		   title: ['步数n', 'Step Number n'],
		   description: ['步数n, 如 5', 'Step number n, e.g. 5'],
		   extras: {placeholder: '5'}		   
	   },	   
	   
	   'nc.options.numOfDecimal-select'
	],

	'nc.nsode.cmd.eulerPredictCorrect': [
		'nc.nsode.cmd.eulerMethod'
	],	
	
	'nc.nsode.cmd.runge_kutta4': [
		'nc.nsode.cmd.eulerMethod'
	],	
	
	'nc.nsode.cmd.adamsExtrapolation':[
		'nc.nsode.cmd.eulerMethod'
	],
	/*end of ode*/
	


	


	/* base */
	'nc.base.vector.x0': {
		id: 'x0',
		name: 'x0',
		paramname: 'x0',
		ctrltype: 'text',
		datatype: 'vector',
		title: ['初始向量x<sub>0</sub>', 'Initial Vector x<sub>0</sub>'],
		description: ['初始迭代向量, 如 1,1,1', 'Initial vector, e.g. 1,1,1'],
		extras: {placeholder: '1,1,1', class:'input-text mui-input-row mui-input-clear', onblur: 'nc.ui.checkData(this)'}
	},


	'nc.base.float.x0': {
		id: 'x0',
		name: 'x0',
		paramname: 'x0',
		ctrltype: 'text',
		datatype: 'float',
		title: ['初始值 x<sub>0</sub>', 'Initial Value x<sub>0</sub>'],
		description: ['初始值, 如 0.5', 'Initial value, e.g. 0.5'],
		extras: {placeholder: '0.5', class:'input-text mui-input-row mui-input-clear', onblur: 'nc.ui.checkData(this)'}
	},	


   'nc.base.xi': {
		id: 'xi',
		name: 'xi',
		title: ['数据 x<sub>i</sub>', 'Data x<sub>i</sub>'],
		ctrltype: 'text',
		datatype: 'vector',
		paramname: 'xi',
		description: ['数据 x<sub>i</sub>, 如 0, 0.2, 0.35, 0.56',
		              'Data x<sub>i</sub>, e.g. 0, 0.2, 0.35, 0.56'],
		extras:{placeholder: '0, 0.2, 0.35, 0.56', class:'input-text mui-input-row mui-input-clear', onblur: 'nc.ui.checkData(this)'}
	},


   'nc.base.yi': {
		id: 'yi',
		name: 'yi',
		title: ['数据 y<sub>i</sub>', 'Data y<sub>i</sub>'],
		ctrltype: 'text',
		datatype: 'vector',
		paramname: 'yi',
		description: ['函数f(x<sub>i</sub>)数据, 如 0, 0.5, 0.65, 0.86', 
		              'Data of function f(x<sub>i</sub>), e.g. 0, 0.5, 0.65, 0.86'],
		extras:{placeholder: '0, 0.5, 0.65, 0.86', class:'input-text mui-input-row mui-input-clear', onblur: 'nc.ui.checkData(this)'}
	},
	
	
	'nc.base.matrix': {
		id: 'A',
		name: 'A',
		paramname: 'A',			
		title: ['矩阵 A', 'Matrix A'],
		ctrltype: 'textarea',
		datatype: 'matrix',
		description: ['矩阵. 用换行或";"分割行; 用","或空格分隔行中元素.<br>如 6,1,0;1,4,1;0,1,14',		
		              'Matrix, rows are seperated by newline or ";", elements are seperated by space or ",". <br> e.g. 6,1,0;1,4,1;0,1,14 '],
		extras:{placeholder: '6,1,0;1,4,1;0,1,14', class:'input-text mui-input-row mui-input-clear', onblur: 'nc.ui.checkData(this)', rows: 6, cols: 36}
	},
	
	
	'nc.base.vector': {
		id: 'b',
		name: 'b',
		paramname: 'b',
		title: ['向量 b','Vector b'],
		ctrltype: 'text',
		datatype: 'vector',
		description: ['向量, 如 1,2,3', 'Vector, e.g. 1,2,3'],
		extras:{placeholder: '6,24,322',  onblur: 'nc.ui.checkData(this)', class: 'input-text mui-input-row mui-input-clear'}
	},


	'nc.base.float': {
		id: 'x',
		name: 'x',
		title: ['x', 'x'],
		ctrltype: 'text',
		datatype: 'float',
		description: ['小数, 如 2.6', 'Decimal, e.g. 2.6'],
		extras:{ placeholder: '3.51', onblur: 'nc.ui.checkData(this)', class:'mui-input-row mui-input-clear'}						
	},
	
	
	
	'nc.base.iteration': {
		id: 'itr',
		name: 'itr',
		paramname: 'itr',
		ctrltype: 'text',
		datatype: 'integer',		
		title: ['迭代次数', 'Iteration Number'],
		description: ['迭代次数,如 100', 'Iteration number, e.g. 100'],	
		extras:{placeholder: '100', onblur: 'nc.ui.checkData(this)', class:'input-text mui-input-row mui-input-clear'}						
	},	


	'nc.base.integer': {
		id: 'a',
		name: 'a',
		title: ['整数', 'Integer'],
		ctrltype: 'text',
		datatype: 'integer',
		description: ['整数, 如 100', 'Integer, e.g. 100'],
		extras:{placeholder: '100', onblur: 'nc.ui.checkData(this)', class:'input-text mui-input-row mui-input-clear'}						
	},


	'nc.base.fn': {
		id: 'fn',
		name: 'fn',
		paramname: 'fn',
		title: ['函数 f(x)', 'Function f(x)'],
		ctrltype: 'textarea',
		datatype: 'string',
		description: ['函数f(x)的表达式, 如 x^3 -x -1', 'Expression of function f(x). e.g. x^3 -x -1'],
		extras:{placeholder: 'x^3 -x -1', onblur: 'nc.ui.checkData(this)', class: 'input-text mui-input-row mui-input-clear',cols:36, rows:4}
	},
	

	'nc.base.interval':[
		{
			base: 'nc.base.float',
			id: 'a',
			name: 'a',
			paramname: 'a',
			title: ['区间左端点', 'Left End of Interval'],
			description: ['区间[a,b]的左端点a', 'Left end a of interval [a,b]'],
			extras:{placeholder: '1.0'}
		},	

		{
			base: 'nc.base.float',
			id: 'b',
			name: 'b',
			paramname: 'b',
			title: ['区间右端点', 'Right End of Interval'],
			description: ['区间[a,b]的右端点b', 'Right end b of interval [a,b]'],
			extras:{placeholder: '2.0'}
		}	
	],
	
	
	'nc.options.numOfDecimal-select': {
			id: 'numOfDecimal',
			name: 'numOfDecimal',
			title: ['小数位数', 'Number of Decimal'],
			ctrltype: 'select',
			datatype: 'integer',
			description: ['小数位数, 如 6', 'Number of decimal, e.g. 6'],
			options: [1,2,3,4,5,6,7,9,10,11,12,13,14,15],
			extras:{class:'input-text mui-input-row mui-numbox-input option'}
	},
	
	
	'nc.options.epsilon': {
			id: 'epsilon',
			name: 'epsilon',
			title: ['误差 &epsilon;', 'Error &epsilon;'],
			ctrltype: 'text',
			datatype: 'float',
			description: ['误差值, 如 1e-10', 'Allowed error value, e.g. 1e-10'],
			extras:{placeholder: '1e-10', onblur: 'nc.ui.checkData(this)', class:'input-text mui-input-row mui-input-clear option'}
	}
};