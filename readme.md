<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="RESTAURANTS_API_0"></a>RESTAURANTS_API</h1>
<h3 class="code-line" data-line-start=2 data-line-end=3 ><a id="Steps_To_set_up_the_Project_2"></a>Steps To set up the Project</h3>
<ul>
<li class="has-line-data" data-line-start="4" data-line-end="5">Create a <code>.env</code> file in the root directory</li>
<li class="has-line-data" data-line-start="5" data-line-end="7">Add the Database credentials according to the follow given belo</li>
</ul>
<h5 class="code-line" data-line-start=7 data-line-end=8 ><a id="env_file_format_processenv_file_7"></a><code>.env</code> file format (process.env file)</h5>
<ul>
<li class="has-line-data" data-line-start="8" data-line-end="9">Set up the <code>.env</code> file according to the format shown below</li>
</ul>
<pre><code class="has-line-data" data-line-start="10" data-line-end="15" class="language-sh">DBUSERNAME=<span class="hljs-string">"&lt;postgres username&gt;"</span>
DBPASSWORD=<span class="hljs-string">"&lt;postgres sql password&gt;"</span>
DBDIALECT=<span class="hljs-string">"postgres"</span>
DBHOST=<span class="hljs-string">"&lt;localhost&gt; / 127.0.0.1"</span>
</code></pre>
<h5 class="code-line" data-line-start=15 data-line-end=16 ><a id="Development_platform_execution_15"></a>Development platform execution</h5>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">root directory Ternminal commands</li>
</ul>
<pre><code class="has-line-data" data-line-start="18" data-line-end="23" class="language-sh">npm install
npm run db:create
npm run db:migrate
npm run dev
</code></pre>
<h3 class="code-line" data-line-start=24 data-line-end=25 ><a id="Software_Requirements_24"></a>Software Requirements</h3>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Plugin</th>
<th>README</th>
</tr>
</thead>
<tbody>
<tr>
<td>Node.js</td>
<td><a href="http://nodejs.org">Node js API </a></td>
</tr>
<tr>
<td>postman</td>
<td><a href="https://www.postman.com/">website</a></td>
</tr>
<tr>
<td>postgres SQL</td>
<td><a href="https://www.postgresql.org/">website</a></td>
</tr>
<tr>
<td>pgadmin4</td>
<td><a href="https://www.pgadmin.org/">website</a></td>
</tr>
</tbody>
</table>
<h2 class="code-line" data-line-start=33 data-line-end=34 ><a id="package_Dependencies_33"></a>package Dependencies</h2>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Package</th>
<th>Documentation</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sequelize</td>
<td><a href="https://sequelize.org/">Docs</a></td>
</tr>
<tr>
<td>Sequelize-cli</td>
<td><a href="https://github.com/sequelize/cli">Docs</a></td>
</tr>
<tr>
<td>pg</td>
<td><a href="https://node-postgres.com/">Docs</a></td>
</tr>
<tr>
<td>pg-hstore</td>
<td><a href="https://github.com/scarney81/pg-hstore">Docs</a></td>
</tr>
<tr>
<td>express</td>
<td><a href="http://expressjs.com">Docs</a></td>
</tr>
<tr>
<td>dotenv</td>
<td><a href="https://github.com/motdotla/dotenv">Docs</a></td>
</tr>
</tbody>
</table>
<h3 class="code-line" data-line-start=43 data-line-end=44 ><a id="devdependecies_43"></a>dev-dependecies</h3>
<ul>
<li class="has-line-data" data-line-start="44" data-line-end="45">nodemon</li>
</ul>
<h3 class="code-line" data-line-start=45 data-line-end=46 ><a id="Testing_45"></a>Testing</h3>
<ul>
<li class="has-line-data" data-line-start="46" data-line-end="47">Make a post request to <code>localost:3000/</code></li>
<li class="has-line-data" data-line-start="47" data-line-end="48">Add the headers to <code>Content-type</code> to <code>application/json</code></li>
<li class="has-line-data" data-line-start="48" data-line-end="56">Use the below <code>json</code> format for uploading records to the table (in the body --&gt; raw in postman).<br>
<code>{ &quot;restaurant_name&quot;: &quot;Trick or treat fast Food Center&quot;, &quot;address&quot;: &quot;Japan&quot;, &quot;vegOnly&quot;: false, &quot;cost&quot;: &quot;medium&quot;, &quot;cuisineTypes&quot;: [&quot;French&quot;,&quot;Japanese&quot;] }</code></li>
<li class="has-line-data" data-line-start="56" data-line-end="57">Check if the data was uploaded to the table in postgres database</li>
<li class="has-line-data" data-line-start="57" data-line-end="58">Queries for CRUD &amp; filtering the data</li>
</ul>
<pre><code class="has-line-data" data-line-start="59" data-line-end="88" class="language-sh">//(Get all the records present <span class="hljs-keyword">in</span> the table)
GET: localhost:<span class="hljs-number">3000</span>/restaurants

//(Get all the veg restaurants present <span class="hljs-keyword">in</span> the table)
GET: localhost:<span class="hljs-number">3000</span>/restaurants?vegOnly=<span class="hljs-literal">true</span>

//(Get all veg restaurants with cost low)
GET:localhost:<span class="hljs-number">3000</span>/restaurants?vegOnly=<span class="hljs-literal">true</span>&amp;cost=low

//(Get all veg restaurants with cost low or high)
GET:localhost:<span class="hljs-number">3000</span>/restaurants?vegOnly=<span class="hljs-literal">true</span>&amp;cost=low,high&amp;opCost=or

//(Get all veg restaurants with cost low or high and cuisine <span class="hljs-built_in">type</span> french or italian)
GET:localhost:<span class="hljs-number">3000</span>/restaurants?vegOnly=<span class="hljs-literal">true</span>&amp;cost=low,high&amp;opCost=or&amp;cuisineTypes=French,Italian&amp;opCT=or

//(Get all veg restaurants with cost low or high and CuisineTypes french and Italian)
localhost:<span class="hljs-number">3000</span>/restaurants?vegOnly=<span class="hljs-literal">true</span>&amp;cost=low,high&amp;opCost=or&amp;cuisineTypes=French,Italian&amp;opCT=and

//(headers-{Content-type:<span class="hljs-string">"application/json"</span>} 
//<span class="hljs-built_in">set</span> body:json format spcified above)
POST: localhost:<span class="hljs-number">3000</span>/restaurants

//(headers-{Content-type:<span class="hljs-string">"application/json"</span>} &amp; 
//<span class="hljs-built_in">set</span> body:json format spcified above)
PATCH: localhost:<span class="hljs-number">3000</span>/restaurants/{&lt;record id&gt;}

(Record deletion using record id)
DELETE: localhost:<span class="hljs-number">3000</span>/restaurants/{&lt;record id&gt;}
</code></pre>
