using ShoppLab.Domain.Entities;
using ShoppLab.Domain.Interfaces;

namespace ShoppLab.Service
{
    public class EmailService : ServiceBase<Email>, IEmailService
    {
        private readonly IEmailRepository _emailRepository;

        public EmailService(IEmailRepository emailRepository)
            :base(emailRepository)
        {
            _emailRepository = emailRepository;
        }
    }
}
