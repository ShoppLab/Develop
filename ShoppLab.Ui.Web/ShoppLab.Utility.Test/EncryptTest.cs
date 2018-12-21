using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace ShoppLab.Utility.Test
{
    [TestClass]
    public class EncryptTest
    {
        [TestMethod]
        public void Encrypted()
        {
            var encryptedValue = "123";
            var retEncryptedValue = Encrypt.Encrypted(encryptedValue);

            Assert.AreNotEqual(encryptedValue, retEncryptedValue);
        }

        [TestMethod]
        public void Decrypted()
        {
            var encryptedValue = "123";
            var retEncryptedValue = Encrypt.Encrypted(encryptedValue);

            var retDecryptedValue = Encrypt.Decrypt(retEncryptedValue);

            Assert.AreEqual(encryptedValue, retDecryptedValue);
        }
    }
}
