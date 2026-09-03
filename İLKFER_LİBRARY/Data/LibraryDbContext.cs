using ILKFER_LIBRARY.Models;
using Microsoft.EntityFrameworkCore;

namespace ILKFER_LIBRARY.Data
{
    public class LibraryDbContext : DbContext
    {
        public LibraryDbContext(DbContextOptions<LibraryDbContext> options)
            : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Book> Books { get; set; }
    }
}