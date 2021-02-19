using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private DataContext _context { get; set; }
        public UsersController(DataContext context)
        {
            this._context = context;

        }

        [HttpGet]
        public  async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await this._context.Users.ToListAsync();
        }



        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(int? id)
        {
            return await this._context.Users.FindAsync(id);
        }
    }
}
