namespace ILKFER_LIBRARY.Models
{
    public class Book
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Author { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        public string ImagePath { get; set; } = string.Empty;

        public int CategoryId { get; set; }
    }
}
