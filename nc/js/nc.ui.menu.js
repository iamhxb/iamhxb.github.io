var menuData = [
{
	title: ['线性方程组','Linear Equations'],
	description: ['直接法、迭代法、LU分解法求解线性方程组。','Solve the linear equations with direct method, iterative method, and so on.'],
	titleImage: 'img/le.png',	
	cmd: [
		{
			id: "nc.ls.cmd.gaussSolve",
			title: ['高斯消元法','Gauss Elimination'],
			text: ['高斯消元法','Gauss Elimination']
		},
		
		{
			id: "nc.ls.cmd.gaussSolveColPivot",
			title: ['列主元高斯消元法','Column-pivoting Gauss Elimination'],
			text: ['列主元高斯消元法','Gauss Elemilation with Pivoting']
		},
		
		{
			id: "nc.ls.cmd.doolittleSolve",
			title: ['Doolittle分解法求解线性方程组','Doolittle Decomposition'],
			text: ['Doolittle分解法','Doolittle Mothod']
		},
		{
			id: "nc.ls.cmd.croutSolve",
			title: ['Crout分解法求解线性方程组','Crout Decomposition'],
			text: ['Crout分解法','Crout Mothod']
		},
		{
			id: "nc.ls.cmd.choleskySolve",
			title: ['Cholesky分解法求解线性方程组','Cholesky Decomposition'],
			text: ['Cholesky分解法','Cholesky Mothod']
		},
		{
			id: "nc.ls.cmd.chasingMethodSolve",
			title: ['追赶法求解三对角方程组','Chasing Method'],
			text: ['追赶法','Chasing Method']
		},
		{
			id: "nc.ls.cmd.jacobiSolve",
			title: ['Jacobi迭代法求解线性方程组','Jacobi Method'],
			text: ['Jacobi迭代法','Jacobi Mothod']
		},
		{
			id: "nc.ls.cmd.seidelSolve",
			title: ['Gauss-Seidel迭代法求解线性方程组','Gauss-Seidel Method'],
			text: ['Seidel迭代法','Seidel Mothod']
		},
		{
			id: "nc.ls.cmd.sorSolve",
			title: ['逐次超松弛迭代法求解线性方程组','SOR Method'],
			text: ['SOR迭代法','SOR Method']
		}
	]				
},


{
	title: ['矩阵','Matrix'],
	description: ['直接法、迭代法、LU分解法求解线性方程组。','Solve the linear equations with direct method, iterative method, and so on.'],
	titleImage: 'img/matrix.png',	
	cmd: [
		{
			id: "nc.matrix.cmd.doolittle",
			title: ['对矩阵进行Doolittle分解','Decompose Matrix with Doolittle Method'],
			text: ['Doolittle分解','Doolittle Method']
		},
		{
			id: "nc.matrix.cmd.crout",
			title: ['对矩阵进行Crout分解','Decompose Matrix with Crout Method'],
			text: ['Crout分解','Crout Method']
		},
		{
			id: "nc.matrix.cmd.cholesky",
			title: ['对矩阵进行Cholesky分解','Decompose Matrix with Cholesky Method'],
			text: ['Cholesky分解','Cholesky Method']
		},
		{
			id: "nc.matrix.cmd.chasingMethodDecomposition",
			title: ['对矩阵进行追赶法分解','Decompose Matrix with Chasing Method'],
			text: ['追赶法分解','Chasing Method']
		},
		{
			id: "nc.matrix.cmd.powerMethod",
			title: ['幂法求特征值','Power Method'],
			text: ['幂法求特征值','Power Method']
		},
		{
			id: "nc.matrix.cmd.invPowerMethod",
			title: ['反幂法求特征值','Inverse Power Method'],
			text: ['反幂法求特征值','Inverse Power Method']
		},
		
		{
			id: "nc.matrix.cmd.transferPowerMethod",
			title: ['平移幂法求特征值','Transfer Power Method'],
			text: ['平移幂法求特征值','Transfer Power Method']
		},			
		
		
		{
			id: "nc.matrix.cmd.clasicalJacobi",
			title: ['Jacobi法求特征值','Clasical Jacobi Method'],
			text: ['Jacobi法求特征值','Clasical Jacobi Method']
		},
		
		{
			id: "nc.matrix.cmd.qr",
			title: ['QR法求特征值','QR Method'],
			text: ['QR法求特征值','QR Method']
		}		
	]				
},	


{
	title: ['非线性方程的根','Root of nonlinear equation'],
	description: ['直接法、迭代法、LU分解法求解线性方程组。','Solve the linear equations with direct method, iterative method, and so on.'],
	titleImage: 'img/root.png',		
	cmd: [
		{
			id: "nc.sns.cmd.bisectionMethod",
			title: ['二分法','Bisection Method'],
			text: ['二分法','Bisection Method']
		},

		{
			id: "nc.sns.cmd.iterationMethod",
			title: ['迭代法','Iteration Method'],
			text: ['迭代法','Iteration Method']
		},

		{
			id: "nc.sns.cmd.newtonMethod",
			title: ['牛顿法','Newton Method'],
			text: ['牛顿法','Newton Method']
		},
		
		{
			id: "nc.sns.cmd.secandMethod",
			title: ['割线法','Secand Method'],
			text: ['割线法','Secand Method']
		}
	]
},	





{
	title: ['插值','Interpolation'],
	description: ['直接法、迭代法、LU分解法求解线性方程组。','Solve the linear equations with direct method, iterative method, and so on.'],
	titleImage: 'img/interp.png',		
	cmd: [
		{
			id: "nc.interpolation.cmd.lagrange",
			title: ['Lagrange插值法','Lagrange Interpolation Method'],
			text: ['Lagrange插值法','Lagrange Interpolation']
		},
		
		{
			id: "nc.interpolation.cmd.newton",
			title: ['Newton插值法','Newton Interpolation Method'],
			text: ['Newton插值法','Newton Interpolation']
		},

		{
			id: "nc.interpolation.cmd.hermite3",
			title: ['3次Hermite插值法','Hermite Interpolation of Order 3'],
			text: ['3次Hermite插值','Hermite Interpolation 3']
		},
		
		{
			id: "nc.interpolation.cmd.hermite",
			title: ['Hermite插值法', 'Hermite Interpolation'],
			text: ['Hermite插值', 'Hermite Interpolation']
		},
		
		{
			id: "nc.interpolation.cmd.cubicSpline",
			title: ['3次Spline插值', 'Cubic Spline Interpolation'],
			text: ['3次Spline插值', 'Cubic Spline Interpolation']
		}		

	]
},


{
	title: ['数据拟合','Data Fitness'],
	description: ['直接法、迭代法、LU分解法求解线性方程组。','Solve the linear equations with direct method, iterative method, and so on.'],
	titleImage: 'img/datafit.png',		
	cmd: [
		{
			id: "nc.fit.cmd.dataFit",
			title: ['数据拟合','Data Fitness'],
			text: ['数据拟合','Data Fitness']
		},

		{
			id: "nc.fit.cmd.dataFitCurve",
			title: ['数据拟合曲线','Data Fit Curve'],
			text: ['数据拟合曲线','Data Fit Curve']
		}		
	]
},




{
	title: ['数值积分','Numerical integration'],
	description: ['直接法、迭代法、LU分解法求解线性方程组。','Solve the linear equations with direct method, iterative method, and so on.'],
	titleImage: 'img/integration.png',		
	cmd: [
		{
			id: "nc.integration.cmd.trap",
			title: ['梯形公式','Trap'],
			text: ['梯形公式','Trap']
		},
		
		{
			id: "nc.integration.cmd.simpson",
			title: ['Simpson公式','Simpson'],
			text: ['Simpson公式','Simpson']
		},
		
		{
			id: "nc.integration.cmd.cotes",
			title: ['Cotes公式','Cotes'],
			text: ['Cotes公式','Cotes']
		},

		{
			id: "nc.integration.cmd.compositeTrap",
			title: ['复化梯形公式','Composite Trap'],
			text: ['复化梯形公式','Composite Trap']
		},

		{
			id: "nc.integration.cmd.compositeSimpson",
			title: ['复化Simpson公式','Composite Simpson'],
			text: ['复化Simpson公式','Composite Simpson']
		},


		{
			id: "nc.integration.cmd.recursionTrap",
			title: ['梯形法的递推公式','Recursion formula of Trap'],
			text: ['梯形法的递推公式','Recursion formula of Trap']
		},


		{
			id: "nc.integration.cmd.romberg",
			title: ['Romberg公式','Romberg Formula'],
			text: ['Romberg公式','Romberg formula']
		}		
	]
},



{
	title: ['常微分方程数值解','Numerial Solution of ODE'],
	description: ['直接法、迭代法、LU分解法求解线性方程组。','Solve the linear equations with direct method, iterative method, and so on.'],
	titleImage: 'img/ode.png',		
	cmd: [	
		{
			id: "nc.nsode.cmd.eulerMethod",
			title: ['欧拉方法','Euler Method'],
			text: ['欧拉方法','Euler Method']
		},
		
		{
			id: "nc.nsode.cmd.eulerPredictCorrect",
			title: ['欧拉预估-校正法','Euler Predict Correct'],
			text: ['欧拉预估-校正法','Euler Predict Correct']
		},		
		
		
		{
			id: "nc.nsode.cmd.runge_kutta4",
			title: ['经典四阶R-K方法','Classical Order 4 R-K Method'],
			text: ['经典四阶R-K方法','R-K Method Order 4']
		},
		
		{
			id: "nc.nsode.cmd.adamsExtrapolation",
			title: ['Adams外推法','Adams Extrapolation'],
			text: ['Adams外推法','Adams Extrapolation']
		}			
		
	]
}	
];