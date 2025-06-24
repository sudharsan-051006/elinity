import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../constants/blogs';
import { Facebook, Linkedin, Link as LinkIcon, X as XIcon } from 'lucide-react';

const tabs = [
  { label: 'Updates' },
  { label: 'Blogs' },
  { label: 'News' },
  { label: 'Resources' },
];

const BlogDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Updates');
  const blog = blogs.find((b: any) => b.id === Number(id));
  if (!blog) return <div className="text-white">Blog not found.</div>;

  // For related articles, just pick other blogs
  const relatedArticles = blogs.filter((b: any) => b.id !== blog.id).slice(0, 3);

  // Blog URL for sharing
  const blogUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Share handlers
  const handleShare = (platform: string) => {
    const text = encodeURIComponent(blog.title);
    const url = encodeURIComponent(blogUrl);
    let shareUrl = '';
    if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(blogUrl);
      alert('Blog link copied to clipboard!');
    } catch (err) {
      alert('Failed to copy link.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white flex flex-col">
      <main className="flex-1 max-w-5xl mx-auto px-4 pt-24 pb-16 flex">
        {/* Left Sidebar */}
        <div className="flex flex-col items-center mr-8 mt-8 gap-4">
          <Link to="/blog" className="flex items-center gap-2 bg-[#23235b] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition mb-4">
            <span>◀</span> Back to Blogs
          </Link>
          <div className="flex flex-col gap-4 mt-8">
            <button className="bg-[#23235b] hover:bg-purple-700 text-white p-3 rounded-full transition" onClick={() => handleShare('twitter')} aria-label="Share on X (Twitter)"><XIcon size={18} /></button>
            <button className="bg-[#23235b] hover:bg-purple-700 text-white p-3 rounded-full transition" onClick={() => handleShare('facebook')} aria-label="Share on Facebook"><Facebook size={18} /></button>
            <button className="bg-[#23235b] hover:bg-purple-700 text-white p-3 rounded-full transition" onClick={() => handleShare('linkedin')} aria-label="Share on LinkedIn"><Linkedin size={18} /></button>
            <button className="bg-[#23235b] hover:bg-purple-700 text-white p-3 rounded-full transition" onClick={handleCopyLink} aria-label="Copy Link"><LinkIcon size={18} /></button>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1">
          {/* Category Buttons */}
          <div className="flex gap-4 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 text-sm focus:outline-none ${
                  activeTab === tab.label
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-transparent border border-purple-700 text-purple-200 hover:bg-purple-900/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">{blog.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-purple-200 text-sm flex items-center gap-2">
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.time}</span>
            </span>
            <img src={blog.authorAvatar} alt={blog.author} className="w-10 h-10 rounded-full border-2 border-purple-400" />
            <div>
              <p className="text-white font-semibold leading-tight">{blog.author}</p>
              <p className="text-xs text-purple-200 leading-tight">Aescape</p>
            </div>
          </div>
          <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-2xl mb-8 shadow-lg" />
          <div className="prose prose-invert max-w-none mb-12 text-lg">
            {blog.content.split('\n').map((para: string, idx: number) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4">Related Articles</h2>
          <div className="flex gap-6 flex-wrap mb-8">
            {relatedArticles.map((article: any) => (
              <Link to={`/blog/${article.id}`} key={article.id} className="bg-[#181848] rounded-2xl p-4 flex flex-col items-center w-72 hover:scale-105 transition-transform border border-purple-700/40 shadow-xl">
                <img src={article.image} alt={article.title} className="w-full h-32 object-cover rounded mb-4" />
                <span className="text-lg font-bold text-white mb-2 text-center">{article.title}</span>
                <div className="flex items-center gap-2 text-xs text-purple-200 mb-1">
                  <span>{article.time}</span>
                  <span className="font-bold text-white">{article.date}</span>
                </div>
                <button className="mt-2 px-4 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold">Read More</button>
              </Link>
            ))}
          </div>
          <div className="flex justify-end">
            <Link to="/blog" className="text-purple-400 hover:underline font-semibold">See all articles</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail; 