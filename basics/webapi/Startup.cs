using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace webapi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("A (Re)");
                await next();
                await  context.Response.WriteAsync("A (Response)");
            });

            // Middleware B
            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("B (before)");
                await next();
                await  context.Response.WriteAsync("B (after)");
            });

            // Middleware C (terminal)
            app.Run(async context =>
            {
                Console.WriteLine("C");
                await context.Response.WriteAsync("Hello world");
            });

            // Middleware d
            app.Use(async (context, next) =>
            {
                await context.Response.WriteAsync("D (before)");
                await next();
                await  context.Response.WriteAsync("D (after)");
            });

            app.UseHttpsRedirection();
            app.UseMvc();
        }

        }
}
