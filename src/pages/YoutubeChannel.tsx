import { useTranslation } from "react-i18next";

const blogPosts = [
  {
    id: 1,
    titleKey: "blog_post_1_title",
    descKey: "blog_post_1_desc",
    youtubeUrl: "https://youtu.be/zOOKUdEnuGY",
    imageUrl: "/assets/thumb-nest.png"
  }
];

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 bg-slate-800 bg-opacity-70 rounded-xl shadow-lg backdrop-blur text-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4">
        {t("blog_title")}
      </h2>
      <p className="text-base sm:text-lg text-gray-300 mb-4">
        {t("blog_desc")}
      </p>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <a
            key={post.id}
            href={post.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="p-4 bg-slate-700 rounded-lg shadow hover:bg-slate-600 transition">
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt={t(post.titleKey)}
                  className="w-full max-h-64 object-contain rounded-md mb-3"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{t(post.titleKey)}</h3>
              <p className="text-gray-300 mb-2">{t(post.descKey)}</p>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default Blog;