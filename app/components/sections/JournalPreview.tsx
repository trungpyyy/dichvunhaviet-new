import React from 'react'

export default function JournalPreview() {
    return (
        <section className="bg-base-100 border rounded-xl mt-8">
            <div className="max-w-[1280px] mx-auto px-2 sm:px-4 py-10">
                <div className="text-center mb-6">
                    <h2 className="text-xl sm:text-2xl font-semibold">Nhật ký sửa chữa</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {Array.from({ length: 6 }).slice(0, 3).map((_, i) => (
                        <article key={i} className="card bg-base-100 border">
                            <div className="card-body items-center text-center">
                                <div className="w-full aspect-video rounded bg-base-200" />
                                <h3 className="card-title mt-3 text-base sm:text-lg">Bài viết mẫu {i + 1}</h3>
                                <p className="opacity-80 text-sm">Mô tả ngắn nội dung bài viết...</p>
                                <div className="card-actions mt-2">
                                    <a className="btn btn-sm btn-primary" href="#">Chi tiết</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}


